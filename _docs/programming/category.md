---
layout: internal-docs
title:  "Category"
---

A category is represents a data type in GeoKey. Each contribution has a category that defines "what" that contribution is. A set of fields is assigned to each category that structure the data that is being collected for contributions of a category.

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies the category in the database.
`name`                   | string                   | Short title of the category.
`description`            | string                   | Longer description about the category.
`project`                | [Project](/docs/programming/project.html) | The project this category is assigned to.
`created_at`             | datetime                 | Date and time when the category was created.
`creator`                | [User](/docs/programming/user.html) | The user who created the category
`order`                  | int                      | Position at which the category should be displayed in the list of the project's categories.
`status`                 | string                   | Current status of the category, must be one of `active`, `inactive` or `deleted`. Defaults to `active`.
`display_field`          | [Field](/docs/internat/field.html) | Field that is used to display contributions in a list. That field should be a descriptive field, such as a name.
`expiry_field`           | [Field](/docs/internat/field.html) | Field that is used to set the expiry date for contributions.
`default_status`         | string                   | Default status that is assigned to all contributions of that category when they are created. Must be one of `active` or `pending`. Defaults to `pending`.
`colour`                 | string                   | Hex code defining the colour that is used to display contributions of that category on the map.
`symbol`                 | File                     | An image file that is used to display contributions of that category on the map.
`fields`                 | QuerySet                 | List of fields assigned to this category.

### Methods

#### `re_order_fields(order)`

Re-orders the fields of the category according to the order provided. `order` is a list of field ids.

##### Parameters

<dl class="parameters">
    <dt>order: <span class="type">list</span></dt>
    <dd>List of field ids, in the desired order.</dd>
</dl>

##### Example

  ```python
    category.re_order_fields([1, 3, 10, 2])
  ```

#### `delete()`

Deletes the category by setting its status to `deleted`.

### Creating a category instance

##### Example use

```python
Category.objects.create(
    name='Category',
    description='This is a category',
    project=project,
    creator=user,
    default_status='active',
    colour='#fff000',
    symbol=file
)
```

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Title for the category.</dd>
    <dt>description: <span class="type">string</span></dt>
        <dd>Optional. A long-form description for the category</dd>
    <dt>project: <span class="type"><a href="/docs/programming/project.html">Project</a></span></dt>
        <dd>Project this category will be assigned to.</dd>
    <dt>creator: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User, who creates the category.</dd>
    <dt>default_status: <span class="type">string</span></dt>
        <dd>Optional. Default status of the category. Must be one of `active` or `pending`.</dd>
    <dt>colour: <span class="type">string</span></dt>
        <dd>Optional. Hex code of the categories' display colour.</dd>
    <dt>symbol: <span class="type">File</span></dt>
        <dd>Optional. An image that is used to display contributions of that category on the map.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/category.html">Category</a></span>

### Accessing model instances

#### `get_list(user, project_id)`

Returns a list of categories for a project that the user can access.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the categories are queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of [Categories](/docs/programming/category.html)

#### `get_single(user, project_id, category_id)`

Returns a single category.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the category is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>category_id: <span class="type">integer</span></dt>
        <dd>Identifies the category in the database.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/category.html">Category</a></span>

##### Raises

<dl class="parameters">
    <dt>Category.DoesNotExist</dt>
        <dd>If the category was not found in the data base.</dd>
    <dt>PermissionDenied</dt>
        <dd>If the category can not be accessed by the user; e.g., the category is inactive or the user is not an admin of the project.</dd>
</dl>

#### `as_admin(user, project_id, category_id)`

Returns a single category if the user is admin of the project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the category is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>category_id: <span class="type">integer</span></dt>
        <dd>Identifies the category in the database.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/category.html">Category</a></span>

##### Raises

<dl class="parameters">
    <dt>Category.DoesNotExist</dt>
        <dd>If the category was not found in the data base.</dd>
    <dt>PermissionDenied</dt>
        <dd>If the user is not an administrator of the project.</dd>
</dl>
