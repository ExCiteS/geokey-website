---
layout: internal-docs
title:  "Project"
---

A project in GeoKey represents a single mapping activity.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies the project in the database.
`name`                   | string                   | Short title of the project.
`description`            | string                   | Longer description about the project.
`isprivate`              | boolean                  | Indicates if the project is private
`created_at`             | datetime                 | Date and time when project was created.
`creator`                | [User](/docs/programming/user.html) | User who created the project.
`everyone_contributes`   | string                   | Indicates if all users, who have access to the project, can also contribute. Must be one of `true` (all users can contribute), `auth` (all user can contribute, but they have to be authenticated), `false` (only members of user groups with contribution rights can contribute).
`status`                 | string                   | Status of the project, must be one of `active`, `inactive`, `deleted`. Defaults to `active`.
`geographic_extend`      | geometry                 | The geographic extent of the project. You can use it on client side to zoom the map to this extent.
`categories`             | QuerySet                 | List of [categories](/docs/programming/category.html) assigned to the project
`observations`           | QuerySet                 | List of [observations](/docs/programming/observation.html) assigned to the project

### Methods

#### `delete()`

Deletes the project by setting its status to `deleted`.

#### `re_order_categories(order)`

Re-orders the categories of the project according to the order provided. `order` is a list of category ids.

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type">list</span></dt>
    <dd>List of category ids, in the desired order.</dd>
</dl>

##### Example

  ```python
    project.re_order_categories([1, 3, 10, 2])
  ```

#### `get_role(user)`

Returns a human readable terms of the user's role on the project

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>The user who's role is returned.</dd>
</dl>

##### Returns

<span class="type">string</span>

#### `is_admin(user)`

Returns `true` if the user is member of the administrators user group.

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User that is examined.</dd>
</dl>

##### Returns

<span class="type">boolean</span>

#### `can_access(user)`

Returns `true` if the user has access to the project, i.e.:

- the user is member of the administrators group
- the user is member of one of the user groups
- the project is public and has at least one public data grouping

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User that is examined.</dd>
</dl>

##### Returns

<span class="type">boolean</span>

#### `can_contribute(user)`

Returns `true` if the user is member of at least one user group that has contributor rights.

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User that is examined.</dd>
</dl>

##### Returns

<span class="type">boolean</span>

#### `can_moderate(user)`

Returns `true` if the user is member of at least one user group that has moderator rights.

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User that is examined.</dd>
</dl>

##### Returns

<span class="type">boolean</span>

#### `is_involved(user)`

Returns `true` if the user is member of at least one user group.

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User that is examined.</dd>
</dl>

##### Returns

<span class="type">boolean</span>

#### `get_all_contributions(user)`

Returns all contributions in a project that the user can access.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User for whom the contributions are returned.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of [Observations](/docs/programming/observation.html)

#### `contact_admins(sender, mail_content)`

Sends an email to all administrators in the project.

##### Parameters

<dl class="parameters">
    <dt>sender: <span class="type">string</dt>
    <dd>Email address of the user that sends the email.</dd>
    <dt>mail_content: <span class="type">string</dt>
    <dd>Text of the email.</dd>
</dl>

### Creating a model instance

#### `Project.create(name, description, isprivate, everyone_contributes, creator)`

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Title for the project.</dd>
    <dt>description: <span class="type">string</span></dt>
        <dd>A long-form description for the project</dd>
    <dt>isprivate: <span class="type">boolean</span></dt>
        <dd>Indicates if the project should be hidden from the public</dd>
    <dt>everyone_contributes: <span class="type">string</span></dt>
        <dd>Indicates if all users, who have access to the project, can also contribute. <br>Must be one of:<br> - <code>true</code> — all users can contribute<br> - <code>auth</code> — all user can contribute, but they have to be authenticated<br> - <code>false</code> — only members of user groups with contribution rights can contribute.</dd>
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User, who creates the project.</dd>
</dl>

##### Returns

<span class="type">Project</span>

### Accessing model instances

#### `get_list(user)`

Returns a list of all projects the user can access.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User the projects are queried for.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of [Projects](/docs/programming/project.html)

##### Example use

```python
from geokey.projects.models import Project

Project.objects.get_list(user)
```

#### `get_single(user, project_id)`

Returns a single project, if the user can access it.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User the project is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
    <dd>Identifies the project in the database.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/project.html">Project</a></span>

##### Raises

<dl class="parameters">
    <dt>Project.DoesNotExist</dt>
    <dd>If the project was not found in the data base or if the user can not access the project.</dd>
</dl>

##### Example use

```python
from geokey.projects.models import Project

Project.objects.get_single(user, 12)
```

#### `as_admin(user, project_id)`

Returns a single project, if the user is administrator of the project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User the project is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
    <dd>Identifies the project in the database.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/project.html">Project</a></span>

##### Raises

<dl class="parameters">
    <dt>Project.DoesNotExist</dt>
    <dd>If the project was not found in the database or if the user can not access the project.</dd>
    <dt>PermissionDenied</dt>
    <dd>If the user is not member of the administrator group.</dd>
</dl>

##### Example use

```python
from geokey.projects.models import Project

Project.objects.as_admin(user, 12)
```

#### `as_contributor(user, project_id)`

Returns a single project, if the user is contributor of the project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
    <dd>User the project is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
    <dd>Identifies the project in the database.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/project.html">Project</a></span>

##### Raises

<dl class="parameters">
    <dt>Project.DoesNotExist</dt>
    <dd>If the project was not found in the database or if the user can not access the project.</dd>
    <dt>PermissionDenied</dt>
    <dd>If the user is not member of any user group that has contributing rights.</dd>
</dl>

##### Example use

```python
from geokey.projects.models import Project

Project.objects.as_contributor(user, 12)
```
