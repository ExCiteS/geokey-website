---
layout: internal-docs
title:  "Grouping"
---

Grouping represents a data grouping, that is a view on a subset of all contributions in a project.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies the grouping in the data base.
`name`                   | string                   | Title of the data grouping.
`description`            | string                   | Long-form description of the data grouping.
`creator`                | [User](/docs/programming/user.html) | User who created the data grouping.
`created_at`             | datetime                 | Date and time when the data grouping was created.
`isprivate`              | boolean                  | Indicates if the data grouping is private
`status`                 | string                   | Status of the data grouping. Must be one of `active` or `deleted`. Defaults to `active`.
`project`                | [Project](/docs/programming/project.html) | Project the data grouping is assigned to.

### Methods

#### data(user)

Provides access to all data accessible through the data grouping. It filters all contributions of the project according to the user's role (moderator or not) and rules assigned to that filter.

##### Parameters

<dl class="parameters">
    <dt>creator: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User, who requests the data.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of [Observations](/docs/programming/observation.html)

#### delete()

Deletes the grouping by setting its status to `deleted`.

#### can_moderate(user)

Returns `True` if the user can moderate the data in the data grouping.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User, who is examined.</dd>
</dl>

<span class="type">boolean</span>

### Creating a model instance

#### `Grouping.objects.create(**kwargs)`

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Title for the data grouping.</dd>
    <dt>description: <span class="type">string</span></dt>
        <dd>Optional. A long-form description for the data grouping.</dd>
    <dt>creator: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User, who creates the data grouping.</dd>
    <dt>private: <span class="type">boolean</span></dt>
        <dd>Optional. Indicates if the data grouping is private.</dd>
    <dt>project: <span class="type"><a href="/docs/programming/project.html">User</a></span></dt>
        <dd>Project this data grouping is assigned to.</dd>
</dl>

##### Returns

<span class="type">Grouping</span>

##### Example

```python
from geokey.datagroupings.models import Grouping
Grouping.objects.create(
    name='London sights build before 1800',
    creator=user,
    private=False,
    project=project
)
```

### Accessing model instances

#### `get_list(user, project_id)`

Returns a list of all data groupings that the user can access in a project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the groupings are queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of <span class="type">Grouping</span>

#### `get_single(user, project_id, grouping_id)`

Returns a single data grouping.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the grouping is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>grouping_id: <span class="type">integer</span></dt>
        <dd>Identifies the data grouping in the database.</dd>
</dl>

##### Returns

<span class="type">Grouping</span>

##### Raises

<dl class="parameters">
    <dt>Grouping.DoesNotExist</dt>
        <dd>The data grouping was not found in the data base or the user is not allowed to access the data grouping.</dd>
</dl>

#### `as_admin(user, project_id, grouping_id)`

Returns a single data grouping if the user is admin of the project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the grouping is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>grouping_id: <span class="type">integer</span></dt>
        <dd>Identifies the data grouping in the database.</dd>
</dl>

##### Returns

<span class="type">Grouping</span>

##### Raises

<dl class="parameters">
    <dt>Grouping.DoesNotExist</dt>
        <dd>The data grouping was not found in the data base or the user is not allowed to access the data grouping.</dd>
    <dt>PermissionDenied</dt>
        <dd>The user is not administrator of the data grouping.</dd>
</dl>
