---
layout: tutorial
title:  "How to install"
---

This guide walks you through the process of setting up GeoKey on your own server. It explains how to setup the database, an Apache web server and what configurations you should do to make GeoKey run smoothly.

### Installing pre-requisites

Before we you can start setting up GeoKey, you need to install the following pre-requisites:

1. Postgres (follow the [official guides](http://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS21UbuntuPGSQL93Apt)).
2. Dev dependencies: `apt-get install postgresql-server-dev-9.3 python-dev`
3. PostGIS: `sudo apt-get install postgresql-9.3-postgis`
4. Pip and virtualenv: `sudo apt-get install python-pip python-virtualenv`
5. Git: `sudo apt-get install git`
6. Apache2: `sudo apt-get install apache2`
7. mod-wsgi: `sudo apt-get install libapache2-mod-wsgi`


### Setting up the database

The database runs on Postgres 9.3 with hstore and PostGIS extension, which should be installed if you followed the instructions above.

First, you should create a new user, which GeoKey to write to and read from the data base.

Start by adding a new user to your system.

```
# adduser django
```

To add the user to your database and create a database for GeoKey, connect to postgres first.

```
# su - postgres
$ psql
```

Now you're connected to Postgres, you can add the user and create a new database. To make it simple, we add ownership of that database to the user.

```
CREATE USER django WITH PASSWORD 'django123';
CREATE DATABASE geokey OWNER django;
```

Close the data base

```
\q
```

and connect to the database you just created to install PostGIS and hstore:

```
psql -d geokey
```

Enable both extensions in your data base.

```
geokey=# CREATE EXTENSION hstore;
geokey=# CREATE EXTENSION postgis;
```

### Setting up your virtual environment

When installed, Apache automatically creates the directory `/var/www`, which is the default root for the web server. We're going to place GeoKey and all its dependencies in that directory.

To be save, we install GeoKey in a [virtual enviroment](http://virtualenv.readthedocs.org/en/latest/virtualenv.html). That way you can run applications that depend on different versions of the same library simultaniously without having to worry about version conflicts.

To set up a virtual environment, create a new directory in `/var/www` that will host GeoKey and its dependencies.

```
cd /var/www
mkdir geokey
cd geokey
```

Now create a virtualenv for the instance of GeoKey.

```
virtualenv env
```

Your virtual environment is now set up.

### Installing GeoKey

[The platform] can be installed by downloading the code from the Github repository, installing the requirements in the virtual environment and setting the data base structure.

First, pull the code from the [Github repository](https://github.com/ExCiteS/geokey/).

```
git clone https://github.com/ExCiteS/geokey.git
```

Switch to the platform directory

```
cd geokey
```

and install the dependencies into your virtual environment

```
../env/bin/pip install -r requirements.txt
```

Now connect GeoKey to your data base. First, duplicate the project settings file.

```
cp core/settings/project.sample.py core/settings/project.py
```

Open the file in your favourite text editor (e.g. Vim):

```
vim core/settings/project.py
```

and enter the user name and password of the data base user. Also, don't forget to change the platform to your project:

```
PLATFORM_NAME = 'My awesome mapping project'
```

This name will be user throughout the system, e.g. when notifying users via email.

Finally create the structure in your data base:

```
../env/bin/python manage.py syncdb --all
../env/bin/python manage.py migrate --fake
```

You should be all set now. Try running the test server:

```
../env/bin/python manage.py runserver 0.0.0.0:8000
```

If you point your browser to `your-domain.com:8000/admin` you should see the landing page of GeoKey.

### Running GeoKey in Apache

You have now succesfully installed GeoKey on your Debian server. You will agree, that running the server in the test environment is not exactly optimal. Hence, we're now setting up Apache with mod_wsgi to run GeoKey in Apache.

For simplicity, we are going to use the default virtual host provided by the Apache installation.

Open the apache config file in your text editor.

```
vim /etc/apache2/sites-available/default
```

Add the following lines just below `<VirtualHost *:80>`:

```
WSGIDaemonProcess geokey python-path=/var/www/geokey/geokey:/var/www/geokey/env/lib/python2.7/site-packages
WSGIProcessGroup geokey
WSGIScriptAlias / /var/www/geokey/geokey/core/wsgi.py
WSGIPassAuthorization On
```

This first line creates a new WSGI deamon that runs [the platfom] in Apache. Its name (in our case `geokey`) can be anything, but you should use a descriptive name. The `python-path` directive contains both the path of your Django project and the path to the Python packages inside your virtual environment.

The second line tells the virtual host to use the WSGI daemon we just created.

The third line tells Apache and mod_wsgi where to find the WSGI configuration.

The last line enables WSGI to pass authorisation credentials to the Django application. This is neccessary, because Django would not be able to authenticate users otherwise.

We then have to tell Apache where to find static and media files from your Django project.

```
Alias /static/ /var/www/geokey/geokey/static/
<Location "/static/">
    Options -Indexes
</Location>

Alias /media/ /var/www/geokey/geokey/media/
<Location "/media/">
    Options -Indexes
</Location>
```

Finally, we need to tell WSGI where to find configuration files for our Django project. Open the WSGI confguration in your text editor:

```
sudo vim /var/www/geokey/geokey/core/wsgi.py
```

Replace `import os` with the following lines:

```
import os, sys
sys.path.append('/var/www/geokey/geokey/')
```

You should be all set now. Now restart Apache

```
sudo service apache2 restart
```

and point your browser to your domain. You should see the admin landing page now.


### Enabling media upload

In order to enable upload of media, you need to create a media directory and point Django to it. Head to your Django application directory and create the directory.

```
cd /var/www/geokey/geokey/
sudo mkdir media
```

Then allow the default apache user to write to that directory.

```
chgrp -R www-data media/
chmod -R g+w media/
```

Then open the project configuration

```
vim core/settings/project.py
```

And set the media root to the directory you have just created.

```
MEDIA_ROOT = '/var/www/geokey/geokey/media/'
```

Videos are – by default – uploaded to your Youtube account. First you will need to obtain Youtube API keys following [this guide](https://developers.google.com/youtube/registering_an_application). The add the credentials to the project settings:

```
YOUTUBE_AUTH_EMAIL = 'your-email@example.com'
YOUTUBE_AUTH_PASSWORD = 'password'
YOUTUBE_DEVELOPER_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
YOUTUBE_CLIENT_ID = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
```

### Enabling email

GeoKey uses e-mail in various cases; for instance, when users want to reset their password. We therefore need to setup [Postfix](http://www.postfix.org/) to send e-mail from your server.

First install Postfix:

```
apt-get update
apt-get install postfix
```

Then open project configuration in your text editor:

```
vim core/settings/project.py
```

and add a default e-mail address that is used as sender for e-mails send by Django.

```
DEFAULT_FROM_EMAIL = 'sender@example.com'
```


### That's all

You have now successfully installed GeoKey on your server.
