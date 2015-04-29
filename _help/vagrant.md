---
layout: tutorial
title:  "Setup a development environment with Vagrant and VirtualBox"
---

[Vagrant](http://vagrantup.com/) is an easy way to create and distribute local self-contained development environments. When developing GeoKey, we used Vagrant together with [VirtualBox](https://www.virtualbox.org/) to deploy a development environment in just under ten minutes. This guide walks you through the process of setting up a Vagrant environment for devolping GeoKey.

1. Install [Vagrant](https://docs.vagrantup.com/v2/installation/index.html) and [VirtualBox](https://www.virtualbox.org/) on your machine.

2. <a href="https://github.com/ExCiteS/geokey/fork">Fork the repository</a> to your account.

3. Clone the repository:

    ```
    git clone https://github.com/[YOUR_GITHUB_ACCOUNT_HANDLE]/geokey
    ```

4. Copy the directory `local_settings.example` to `local_settings`. In the directory `local_settings`, open `settings.py` in your text editor and update the database settings to:

    ```
    DATABASES = {
        'default': {
            ...
            'USER': 'django',
            'PASSWORD': 'django123',
            'HOST': 'localhost',
            ...
        }
    }
    ```

5. Fire up the Vagrant VM:

    ```
    vagrant up
    ```

6. Log into the VM via ssh:

    ```
    vagrant ssh
    ```

7. Navigate to the shared directory and

    ```
    cd /vagrant/
    sudo pip install -e .
    ```

8. Run the tests, to see if things work out:

    ```
    python manage.py test --nocapture --nologcapture
    ```

9. Migrate the database

    ```
    python manage.py migrate
    ```

10. Create a superuser

    ```
    python manage.py createsuperuser
    ```

11. If all went well, run the test server:

```
python manage.py runserver 0.0.0.0:8000
```

You now should be able to access the admin interface from your browser via [http://localhost:4000](http://localhost:4000).

You have now successfully set up a self contained development environment.

### Shutting down and restarting

To shut down the VM and save its state use:

```
vagrant halt
```

And to restart it again use:

```
vagrant up
```

### Troubleshooting

If, on your host machine, the port 4000 is already used for another application, you need to change the following line in the `Vagrantfile`:

```
config.vm.network "forwarded_port", guest: 8000, host: 4000
```

Replace `host: 4000` with whatever port you want to use in your host to access the Vagrant box.
