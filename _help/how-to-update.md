---
layout: tutorial
title:  "How to update"
---

Updating GeoKey to the latest version takes just three simple steps.

Fetch the latest updates from Github and switch to the stable branch

```
sudo git fetch
sudo git checkout stable/0.4.x
```

Update the requirements

```
pip install -U -r requirements.txt
```

Install the database migrations

```
python manage.py migrate
```

If you're running Apache you need to update your WSGI settings again. (We're working on making this more convenient for you.)

Open the WSGI file in your text editor

```
vim core/settings/wsgi.cgi
```

and update the system path to your GeoKey directory

```
sys.path.append('/var/www/geokey/geokey/')
```

Restart Apache

```
/etc/init.d/apache2 restart
```
