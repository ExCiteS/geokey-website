---
layout: tutorial
title:  "Platform code structure"
---

This document provides an overview on how the application code is structured into directories and how apps are structured internally.

## Directory Structure

### core

The core module provides a set of components that are applied across various parts of the system.

- `urls.py`: Django's root URLconf. Provides switches to specialised endpoints for the platform, such as administration interface, the AJAX API and OAuth components.
- `url/ajax.py`: URLconf for AJAX API endpoints.
- `url/admin.py`: URLconf for administration interface endpoints.
- `decorators.py`: Python decorators implementing exception handling for HTTP requests.
- `settings`: Directory containing settings for development, testing and production environments.

### static

Static JavaScript, CSS files and frameworks used in the administration interface.

- `lib`: All front-end libraries on which the administration interface depends. (Currently includes: [Twitter Bootstrap 3.0.0](http://getbootstrap.com/), [jQuery 1.10.1](http://jquery.com/), [Modernizr 2.6.2](http://modernizr.com/), [Leaflet](http://leafletjs.com/))
- `ccs`: Costum CSS. Partly overrides Bootstrap's defaults.
- `img`: Images used in the interface
- `js`: JavaScript used in the interface.

### templates

HTML templates for the administration interface.

### projects

Django app for projects.

### categories

Django app to define categories including fields.

### contributions

Django app for locations, observations, commends and media uploads that are contributed by users.

### users

Everything related to users and user groups.

## Application Components

Each app is made up of the following components.

- **base:** Definitions for lists and dictionaries shared across an app, e.g. accepted status types for a model instance.
- **forms:** [Form field definitions](https://docs.djangoproject.com/en/dev/topics/forms/) for creating new model instances.
- **manager:** [Django managers](https://docs.djangoproject.com/en/dev/topics/db/managers/), which provide access to model instances of the app.
- **models:** Model definitions.
- **serializers:** [Django Rest Framework](http://www.django-rest-framework.org/) serialisers for model instances used to validate updates and serialise objects in APIs.
- **views:** [Django class-based views](https://docs.djangoproject.com/en/1.3/ref/class-based-views/) for the app.
- **tests:** Unit and integration tests for the app.
