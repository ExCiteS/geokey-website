---
layout: tutorial
title:  "How to create an extension"
---

With GeoKey 0.3 we introduced an easy way to add functionality to GeoKey by
creating and installing extensions. This guide explains how to create and
register an extension.

### Start developing

We created a [boilerplate](https://github.com/ExCiteS/geokey-extension-boilerplate)
for GeoKey extensions that you can use as a starting point for your own
extension.

<span class="tut-step">1</span>
[Download](https://api.github.com/repos/ExCiteS/geokey-extension-boilerplate/zipball/master)
and unzip the boilerplate.

<span class="tut-step">2</span> Rename all occurrences of `geokey_extension`
with the name of your Python package (e.g. `my_awesome_package`) and
`GeoKey Extension` with a title of your extension (e.g. `My Extension`). The
latter one will be used in user interface if applicable. Don't forget to
rename the directories accordingly.

<span class="tut-step">3</span> Now install the extension using `python-pip`.
Just move to the extension's root directory and install the extension
for development:

```
pip install -e .
```

<span class="tut-step">4</span> Register the extension with GeoKey.

Add the package to installed apps in `settings/settings.py`:

```
INSTALLED_APPS += (
    ...
    'my_awesome_package'
)
```

And register the API endpoints in `settings/urls.py` if applicable:

```
urlpatterns = patterns(
    ...
    url(r'^', include('my_awesome_package.urls', namespace='my_awesome_package')),
)
```

You are now ready to go.

### Add the extension to the admin pages

You can add extension specific pages to GeoKey's administration. The link
will then appear in the users dashboard under _Extensions_. Note, that GeoKey
expects the landing page to your extension at the named URL pattern
`my_awesome_package:index`.

To register the extension, open `__init__.py` in the app root and set

```
    display_admin=True,
```

You can also restrict the extension to superusers of the system. That way only
superusers can access the admin pages of your extension and make change to its
setup. Simply set:

```
    superuser=True,
```
