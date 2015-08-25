---
layout: tutorial
title:  "How to update"
---

Updating GeoKey to the latest version takes just three steps.

1. Install the latest version GeoKey:

    ```
    sudo pip install -U geokey
    ```

2. Install the database migrations (from your local `settings` directory):

    ```
    python manage.py migrate
    ```

3. Copy new and updated static files:

    ```
    python manage.py collectstatic
    ```

4. Restart Apache:

    ```
    sudo service apache2 restart
    ```
