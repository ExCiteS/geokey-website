---
layout: internal-docs
title:  "Observation"
---

An Observation represents an entry contributed by a user. Together with a [Location](/docs/programming/location.html), an observations forms a contribution.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies the observation in the database.
`location`               | [Location](/docs/programming/location.html) | Geographic location of the observation.
`project`                | [Project](/docs/programming/project.html)   | Project the observation has been contributed to.
`category`               | [Category](/docs/programming/category.html) | Category of the observation.
`status`                 | string                   | Status of the observation. Must be one of `active`, `draft` `review`, `pending`, `deleted`. Defaults to the `default_status` of the contributions category.
`properties`             | dict                     | Key-value pairs of the observation's attributes. Keys represent the key of the category's fields.
`created_at`             | datetime                 | Date and time when the observation was created.
`creator`                | [User](/docs/programming/user.html) | User who created the observation.
`updated_at`             | datetime                 | Date and time when the observation last updated.
`updator`                | [User](/docs/programming/user.html) | User who last updated the observation.
`version`                | int                      | Version of the observation. Is increased every time the observation is updated.

### Methods

#### `validate_partial(category, data)`

Partially validates data against the category. A partial validation only validates against those fields that are present in data; if a field that is required is not provided it will be ignored. This method should be used to validate drafts only.

##### Parameters

<dl class="parameters">
    <dt>category: <span class="type"><a href="/docs/programming/category.html">Category</a></span></dt>
        <dd>Category the data is validated against.</dd>
    <dt>data: <span class="type">dict</span></dt>
        <dd>Data that is validated.</dd>
</dl>

##### Raises

<dl class="parameters">
    <dt>ValidationError</dt>
        <dd>If the provided data is invalid.</dd>
</dl>

##### Example use

```python
from geokey.contributions.models import Observation

data = {
    'name': 'Buckingham Palace',
    'built-in': 1703
}
Contribution.validate_partial(category, data)
```

#### `validate_full(category, data)`

Validates the data against all fields defined for the category.

##### Parameters

<dl class="parameters">
    <dt>category: <span class="type"><a href="/docs/programming/category.html">Category</a></span></dt>
        <dd>Category the data is validated against.</dd>
    <dt>data: <span class="type">dict</span></dt>
        <dd>Data that is validated.</dd>
</dl>

##### Raises

<dl class="parameters">
    <dt>ValidationError</dt>
        <dd>If the provided data is invalid.</dd>
</dl>

##### Example use

```python
from geokey.contributions.models import Observation

data = {
    'name': 'Buckingham Palace',
    'built-in': 1703
}
Contribution.validate_full(category, data)
```

#### `update(properties, updator, status=None)`

Updates the properties of the Contribution.

##### Parameters

<dl class="parameters">
    <dt>properties: <span class="type">dict</span></dt>
        <dd>Attributes that are updated. This can contain only updated attributes, all other fields will not be changed.</dd>
    <dt>updator: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>The user who updates the observation.</dd>
    <dt>status: <span class="type">string</span></dt>
        <dd>Optional. The new status for the contribution.</dd>
</dl>

##### Returns

<span class="type">Observation</span>

#### `delete()`

Deletes the contribution by setting its status to `deleted`.

### Creating a model instance

#### `Observation.create(properties=None, creator=None, location=None, category=None, project=None, status=None)`

##### Parameters

<dl class="parameters">
    <dt>properties: <span class="type">dict</span></dt>
        <dd>Attributes of the contribution.</dd>
    <dt>creator: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>The user who creates the observation.</dd>
    <dt>location: <span class="type"><a href="/docs/programming/location.html">Location</a></span></dt>
        <dd>Geographic location of the observation.</dd>
    <dt>category: <span class="type"><a href="/docs/programming/category.html">Category</a></span></dt>
        <dd>Category of the observation.</dd>
    <dt>project: <span class="type"><a href="/docs/programming/project.html">Project</a></span></dt>
        <dd>Project the observation is contributed to..</dd>
    <dt>status: <span class="type">string</span></dt>
        <dd>Optional. The new status for the observation.</dd>
</dl>

##### Parameters

<span class="type">Observation</span>

### Accessing model instances

#### for_moderator(user)

Returns all observations for moderators; That includes all observations in a project; except this with `status='draft'`, which where not created by the given user.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the observations are queried for.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of <span class="type">Observation</span>

##### Example

```python
project.observations.for_moderator(user)
```

#### for_viewer(user)

Returns all observations for viewer, i.e. users who have no moderation permissions on the project.

If the user is anonymous, it returns only observations with `status='active'` and `status='review'`

If the user is not anonymous, it returns it returns only observations with `status='active'` and `status='review'` as well as `status='pending'` when the given user is creator of those observation.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the observations are queried for.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of <span class="type">Observation</span>

##### Example

```python
project.observations.for_viewer(user)
```

#### search(query)

Returns a subset of the QuerySet containing observations where one of the properties matches the given query.

<dl class="parameters">
    <dt>query: <span class="type">string</span></dt>
        <dd>The query that is filtered for.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of <span class="type">Observation</span>

```python
project.observations.search('Palace')
```
