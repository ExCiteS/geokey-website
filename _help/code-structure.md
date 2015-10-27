---
layout: tutorial
title:  "Repository code structure"
---

This document provides an overview on how the GeoKey's repository is structured. You will find all program files in the directory `geokey`. The contents of this directory are explained further.

### General Directory Structure

Within the directory GeoKey you will find several directories: [core](#core), [static](#static) and [templates](#templates) contain code that is relevant to all components of GeoKey. All [other directories](#django-applications) hold Django apps that contain the program logic of GeoKey.

#### core

`Core` provides shared functionality that is used across different parts of GeoKey. This directory contains the following files:

- `context_processors.py`: Pre-processors to add common information to template contexts.
- `decorators.py`: Python decorators implementing exception handling for HTTP requests
- `exceptions.py`: Implements custom exceptions.
- `middleware.py`: Contains request middleware that is executed when requests to the API are handled.
- `mixins.py`: Contains mixins that are used to implement functionality that shared across model instances.
- `serializers.py`: Contains base classes that are used to implement specific model serialisers.
- `urls.py`: Django's root URL configuration. It provides switches to URLs available for GeoKey. You can find the following URL configurations in the directory `url`:
    - `ajax.py`: Configurations for internal AJAX API endpoints that are used with admin panels.
    - `admin.py`: Configurations for administration interface.
    - `api.py`: Configurations for the public API.
- `settings`: Directory containing settings for development, production environments

#### static

This directory contains all static files that are needed in the administration pages. The directory contains several sub-directories for JavaScript and CSS libraries (`lib`), custom CSS (`css`), images (`img`) and custom JavaScript (`js`).

GeoKey makes use of the following JavaScript and CSS libraries, that can be found in `lib`:

- [bootstrap](http://getbootstrap.com)
- [bootstrap-colorpicker](http://mjolnic.com/bootstrap-colorpicker/)
- [bootstrap-datetime](https://eonasdan.github.io/bootstrap-datetimepicker/)
- [jasny-bootstrap](http://www.jasny.net/bootstrap/)
- [file-upload](https://github.com/kartik-v/bootstrap-fileinput)
- [handlebars](http://handlebarsjs.com/)
- [jQuery](https://jquery.com/)
- [modernizr](http://modernizr.com/)
- [moment](http://momentjs.com/)

#### templates

`templates` contains HTML templates for the administration panels. The templates can be found sub-directories corresponding to the [Django apps](#django-applications).

#### Django applications

The remaining directories all contain Django applications that make modules that make GeoKey. The apps contain functionality for components as follows. Please have a look at [GeoKey's data model](/help/data-model.html) to find out how components are related.

- **applications**: OAuth2 applications.
- **projects**: Projects.
- **categories**: Categories and Fields.
- **contributions**: Observations, Locations, Comments and MediaFiles.
- **users**: User and UserGroups.
- **extensions**: Functionality to register extensions.
- **superusertools**: Functionality for superuser tools. Contains only admin panel views, no models.
- **subsets**: Subsets.

The structure of each of the application directory is explained in the following section.

### Application Components

Each directory represents is a Django application, that follows a certain convention. Most of GeoKey's Django apps consist of the following files. Apps that differ from that convention are pointed out below.

- **base.py:** Definitions for lists and dictionaries shared across an app, e.g. accepted status types for a model instance.
- **forms.py:** [Forms](https://docs.djangoproject.com/en/dev/topics/forms/#the-form-class) to validate data in the admin panels.
- **manager.py:** [Django managers](https://docs.djangoproject.com/en/dev/topics/db/managers/), which provide access to instances of models.
- **models.py:** Model definitions.
- **serializers.py:** [Django Rest Framework](http://www.django-rest-framework.org/) serialisers for model instances used to validate updates and serialise objects in the APIs.
- **views.py:** [Django class-based views](https://docs.djangoproject.com/en/1.8/ref/class-based-views/) for the app.

Some parts of complex apps have sub-directories instead of single files. For instance, the app _contributions_ has a sub-directory `views` that separates views for observations, locations, comments and media files.

- **tests:** Unit and integration tests for the app.
- **templatetags**: Custom template tags used in templates related to this app.

The app _contributions_ has two additional directories:

- **parsers:** Contains parsers to parse various data formats (GeoJSON) into de-serialisable objects.
- **renderer:** Renders serialised objects into various data formats (GeoJSON, KML).
