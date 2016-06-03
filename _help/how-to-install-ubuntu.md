---
layout: tutorial
title:  "How to install on Ubuntu"
---

This guide walks you through the process of setting up GeoKey on your own server. It explains how to setup the database, how to install the Python packages and what configurations you should implement to make GeoKey run smoothly.

<div class="info-box alert alert-warning">
    <i class="fa fa-exclamation-triangle"></i>
    <div>
        This guide shows you how to install GeoKey on a Ubuntu machine. We have prepared installation guides for the following additional systems:
        <ul class="tutorial-links">
            <li><a href="/help/how-to-install.html">Debian</a></li>
        </ul>
    </div>
</div>

### Installing pre-requisites

1. Update your system

    ```
    sudo apt-get update && sudo apt-get upgrade
    ```

2. Install Postgres and PostGIS (we follow the [official guides](http://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS21UbuntuPGSQL93Apt))

    ```
    sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt trusty-pgdg main" >> /etc/apt/sources.list'
    wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
    sudo apt-get update
    sudo apt-get install postgresql-9.4-postgis-2.1 postgresql-contrib postgresql-server-dev-9.4 pgadmin3
    ```

3. Setup all other dependencies

    ```
    sudo apt-get install python-pip python-virtualenv python-dev libjpeg-dev binutils libproj-dev gdal-bin python-gdal
    ```

### Setting up the database

1. Create a new user on you system, which GeoKey uses to write to and read from the data base.

    ```
    # adduser django
    ```

2. Add the user to your database.

    Connect to postgres as the postgres user

    ```
    # su - postgres
    $ psql
    ```

    Now you're connected to Postgres, you can add the user and create a new database. To make it simple, we add ownership of that database to the user.

    ```
    CREATE USER django WITH PASSWORD 'django123';
    ```

3. Create the data base

    ```
    CREATE DATABASE geokey OWNER django;
    ```

    Close the data base connection.

    ```
    \q
    ```

4. Install the PostGIS extension on you database

    ```
    psql -d geokey -c 'create extension postgis;'
    psql -d geokey -c 'create extension hstore;'
    ```

5. Finally log out as user postgres

    ```
    logout
    ```

### Setting up your virtual environment

We will install GeoKey in a [virtual enviroment](http://virtualenv.readthedocs.org/en/latest/virtualenv.html). That way you can run applications that depend on different versions of the same library simultaneously without having to worry about version conflicts.

1. Choose a directory where you have write access and create an empty virtual environment

    ```
    virtualenv env
    ```

2. Activate the env

    ```
    . env/bin/activate
    ```

3. Upgrade pip so the correct python dependencies will be installed later on

    ```
    pip install --upgrade pip
    ```

### Setting up GeoKey

1. Install the package

    ```
    pip install geokey
    ```

2. Download and unzip the GeoKey runner:

    ```
    wget http://geokey.org.uk/downloads/settings.tar.gz
    tar -xvf settings.tar.gz
    ```

3. Open `settings.py` and add the database info and a secret key to your app

    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.contrib.gis.db.backends.postgis',
            'NAME': 'geokey',
            'USER': 'django',
            'PASSWORD': 'django123',
            'HOST': 'localhost',
            'PORT': '',
        }
    }
    ```

    ```
    SECRET_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    ```


4. Create the database structure

    ```
    python manage.py migrate
    ```

5. Add yourself as super user. You can use the same email and password to log into the system later.

    ```
    python manage.py createsuperuser
    ```

6. You should be all set now. Try running the test server:

    ```
    python manage.py runserver 0.0.0.0:8000
    ```

   If you point your browser to `your-domain.com:8000/admin` you should see the landing page of GeoKey.


<div class="info-box alert alert-success">
    <i class="fa fa-check-square-o"></i>
    <div>
        <ul class="tutorial-links">
            <li>
                <h3><a href="/help/install-troubleshooting.html">Troubleshooting</a></h3>
                <p>Identify and fix troubles with your installation.</p>
            </li>
            <li>
                <h3><a href="/help/run-in-apache.html">Running GeoKey in Apache</a></h3>
                <p>Now that you have installed GeoKey, learn how to make it available on the Web.</p>
            </li>
        </ul>
    </div>
</div>
