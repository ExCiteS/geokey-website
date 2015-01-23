---
layout: tutorial
title:  "How to update"
---

Updating GeoKey to the latest version takes just three simple steps.

Pull the latest updates from Github

```
sudo git pull
```

Update the requirements

```
pip install -U -r requirements.txt
```

Install the database migrations

```
python manage.py migrate
```

Restart Apache

```
/etc/init.d/apache2 restart
```
