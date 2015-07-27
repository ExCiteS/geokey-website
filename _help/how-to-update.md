---
layout: tutorial
title:  "How to update"
---

Updating GeoKey to the latest version takes just three steps.

1. Install the latest version GeoKey.

    ```
    sudo pip install -U geokey
    ```

2. Install the database migrations. You need to do that from your local `settings` directory.

    ```
    python manage.py migrate
    ```
3. Restart Apache.

    ```
    sudo service apache2 restart
    ```
