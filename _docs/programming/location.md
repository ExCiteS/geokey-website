---
layout: internal-docs
title:  "Location"
---

A Location represents a place on the earth. Together with [Observations](/docs/programming/observation.html), Locations form a contribution. Location and Observation are separate to enable reusing existing Locations for various Observations.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                   | int                      | Identifies the location in the database.
`name`                 | string                   | Short title of the location.
`description`          | string                   | Longer description about the location.
`geometry`             | [GEOSGeometry](https://docs.djangoproject.com/en/1.8/ref/contrib/gis/geos/#geosgeometry)             | Shape and geographic location.
`created_at`           | datetime                 | Date and time when location was created.
`creator`              | [User](/docs/programming/user.html) | User who created the location.
`status`               | string                   | Status of the location, must be one of `active`, `review`. Defaults to `active`.
`private`              | boolean                  | Indicates if the location can be reused with other observations. If `true`, the location is not re-usable, unless `private_for_project` is set; then the location is re-usable for the specified project.
`private_for_project`   | [Project](/docs/programming/project.html) | Optional. Indicates the project, in which the location can be used.

### Creating a location instance

#### `Location.objects.create(**kwargs)`

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Title for the location.</dd>
    <dt>description: <span class="type">string</span></dt>
        <dd>Optional. A long-form description for the location.</dd>
    <dt>geometry: <span class="type"><a href="https://docs.djangoproject.com/en/1.8/ref/contrib/gis/geos/#creating-a-geometry">GEOSGeometry</a></span></dt>
        <dd>Shape and geographic location.</dd>
    <dt>creator: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User, who creates the location.</dd>
    <dt>private: <span class="type">boolean</span></dt>
        <dd>Optional. Indicates if the location can be reused with other observations. If <code>true</code> the location is not re-usable, unless <code>private_for_project</code> is set; then the location is re-usable for the specified project.</dd>
    <dt>private_for_project: <span class="type"><a href="/docs/programming/project.html">Project</a></span></dt>
        <dd>Optional. Indicates the project, in which the location can be used.</dd>
</dl>

##### Returns

<span class="type">Location</span>

##### Example

```python
from django.contrib.gis.geos import GEOSGeometry
from geokey.contributions.models import Location

Location.objects.create(
    name='Buckingham Palace',
    description='You know, the Queen lives here',
    geometry=GEOSGeometry('{ "type": "Point", "coordinates": [ -0.1418781280517578, 51.50128299559082 ] }'),
    creator=user,
    private=False
)
```

### Accessing model instances

#### `get_list(user, project_id)`

Returns a list of locations that can be used with the project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the location is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of [Locations](/docs/programming/location.html)

#### `get_single(user, project_id, location_id)`

Returns a single location.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the location is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>location_id: <span class="type">integer</span></dt>
        <dd>Identifies the location in the database.</dd>
</dl>

##### Returns

<span class="type">Location</span>

##### Raises

<dl class="parameters">
    <dt>PermissionDenied</dt>
        <dd>If the the location can not be used with the project.</dd>
</dl>
