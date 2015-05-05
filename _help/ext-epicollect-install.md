---
layout: tutorial
title:  "How to setup EpiCollect for GeoKey"
---

You can use EpiCollect's mobile client to collect data for Geokey. This guide
show how to install the extension.

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

<div class="info-box alert alert-success">
    <i class="fa fa-check-square-o"></i>
    <p>EpiCollect should be installed now. Read more about
    <a href="ext-epicollect-use.html">how to enable your GeoKey project for EpiCollect</a>.</p>
</div>
