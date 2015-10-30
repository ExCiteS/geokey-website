---
layout: extension
title:  "Install the export extension"
---

Installing the export extensions for GeoKey just takes four steps.

1. Install the extension using _pip_.

    ```
    pip install geokey-export
    ```

2. Register the extension with installed apps: Open `settings.py` from your local settings in a text editor and add `geokey_export` to `INSTALLED_APPS`.

    ```
    INSTALLED_APPS += (
        ...
        'geokey_export'
    )
    ```

3. Add the required tables to the database. In your local settings directory, you should find `manage.py`. Move to that directory and run:

    ```
    python manage.py migrate geokey_export
    ```

4. Copy the static files by running the following command from the same directory:

    ```
    python manage.py migrate collectstatic
    ```

_geokey-export_ is now installed.
