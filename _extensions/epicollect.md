---
layout: extension
title:  "EpiCollect+"
---

[EpiCollect+](http://www.epicollect.net/) is a mobile and web application to
collect data. The mobile client can be used to collect data for GeoKey. This
guide explains how to enable your project so you can collect data with
EpiCollect's mobile client.

### Installation

1. Install the dependencies

    ```
    sudo apt-get install libxml2-dev libxslt1-dev
    ```

2. Install the extension

    ```
    pip install geokey-epicollect
    ```

### Register the extension with GeoKey

1. Add the EpiCollect extension to your `INSTALLED_APPS` settings (`settings/local_settings.py`):

    ```
    INSTALLED_APPS = (
        ...
        'geokey_epicollect',
    )
    ```

2. Include the EpiCollect URL configuration in your extensions urls.py (`settings/urls.py`):

    ```
    url(r'^', include('geokey_epicollect.urls', namespace='geokey_epicollect')),
    ```

3. Add the EpiCollect tables to the data base:

    ```
    python manage.py migrate
    ```

### Enabling your project

1. To collect data with EpiCollect, you have to enable your project first. On your
dashboard head to the EpiCollect extension.

    ![EpiCollect link](/img/epicollect-01.png)

2. Then enable the project by checking the checkbox for the project.

    ![Enable EpiCollect](/img/epicollect-02.png)

    And click save to store the changes.

3. Now open EpiCollect on your mobile phone and click "Load project". Instead of
entering the name of your project, you enter the URL provided beneath the
project.

    ![Enable EpiCollect](/img/epicollect-03.png)
    ![Enable EpiCollect](/img/epicollect-04.png)

    This loads the data structure into EpiCollect's mobile client.
