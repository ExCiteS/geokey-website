---
layout: internal-docs
title:  "Field"
---

A field is part of a category. It defines type and constraints for one property of a contribution.

The following types are available:

- `TextField` for text input.
- `NumericField` for numeric input.
- `DateTimeField` for input of date and time.
- `DateField` for date-only inputs.
- `TimeField` for time-only inputs.
- `LookupField`; a list of predefined values, the user can select exactly one.
- `MultipleLookupField`; a list of predefined values, the user can select arbitrary number.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies the field in the database.
`name`                   | string                   | Short title of the field.
`description`            | string                   | Longer description about the field.
`key`                    | string                   | The key is used as an identifier for the field, when exchanging contribution attributes via the API.
`required`               | boolean                  | Indicates if a value for this field is required.
`category`               | [Category](/docs/programming/category.html) | Category this field is assigned to.
`order`                  | int                      | Position of the field in the list of fields for the category.
`status`                 | string                   | Status of the field. Must be one of `active`, `inactive`, `deleted`. Defaults to `active`.

#### Field-specific attributes

##### TextField

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`maxlength`              | int                      | Maximum number of characters accepted for the text field.
`textarea`               | boolean                  | Indicates of the field should be displayed as a text box in the front-end.

##### NumericField

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`minval`                 | float                    | Lowest accepted value for the field.
`maxval`                 | float                    | Largest accepted value for the field.

##### Lookupfield / MultipleLookupField

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`lookupvalues`           | QuerySet                 | List of [LookupValues](/docs/programming/lookupvalues.html)

### Read-only properties

Parameter              | Description
-----------------------|-----------------------------------------------
`type_name`              | Human readable type of the field, e.g. "Date and time"
`fieldtype`              | Type of the field, e.g. "DateTimeField"

### Methods

#### `get_field_types()`

Returns a list of fields types that are available to use.

##### Returns

<span class="type">list</span>

##### Example

```python
>>> from geokey.categories.models import Field
>>> Field.get_field_types()
[TextField, NumericField, DateTimeField]
```

#### `validate_input(value)`

Validates the input against the field definition, i.e. the type and constraints.

##### Parameter

<dl class="parameters">
    <dt>value: <span class="type">multiple</span></dt>
        <dd>The value that is validated.</dd>
</dl>

##### Raises

<dl class="parameters">
    <dt>InputError</dt>
        <dd>If the value does not comply to the field definition.</dd>
</dl>

#### `validate_required(value)`

Checks if an accepted value is provided if the field is required.

##### Parameter

<dl class="parameters">
    <dt>value: <span class="type">multiple</span></dt>
        <dd>The value that is validated.</dd>
</dl>

##### Raises

<dl class="parameters">
    <dt>InputError</dt>
        <dd>If the field is required and no value is provided.</dd>
</dl>

#### `delete()`

Deletes the field by setting its status to `deleted`.

### Creating a field instance

`Field.create(name, description, key, required, category, field_type)`

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Title for the category.</dd>
    <dt>description: <span class="type">string</span></dt>
        <dd>Optional. A long-form description for the category</dd>
    <dt>key: <span class="type">str</span></dt>
        <dd>Key used when exchanging contribution attributes via the API/</dd>
    <dt>required: <span class="type">boolean</span></dt>
        <dd>Indicates if a value for the field is required.</dd>
    <dt>category: <span class="type"><a href="/docs/programming/category.html">Category</a></span></dt>
        <dd>Category this field is assigned to.</dd>
    <dt>field_type: <span class="type">string</span></dt>
        <dd>Identifies the type of the field.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/programming/field.html">Field</a></span>

##### Example use

```python
Field.create(
    'Name of Restaurant',
    'The name of the restaurant',
    'name-of-restaurant'
    True
    category,
    'TextField'

)
```

### Accessing model instances

#### `get_list(user, project_id, category_id)`

Returns a list of all fields in a category that the user can access.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the fields are queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>category_id: <span class="type">integer</span></dt>
        <dd>Identifies the category in the database.</dd>
</dl>

##### Returns

<span class="type">django.db.models.query.QuerySet</span>: List of <span class="type">Fields</span>

#### `get_single(user, project_id, category_id, field_id)`

Returns a single field.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the field is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>category_id: <span class="type">integer</span></dt>
        <dd>Identifies the category in the database.</dd>
    <dt>field_id: <span class="type">integer</span></dt>
        <dd>Identifies the field in the database.</dd>
</dl>

##### Returns

<span class="type">Field</span>

##### Raises

<dl class="parameters">
    <dt>Field.DoesNotExist</dt>
        <dd>If the field was not found in the data base.</dd>
    <dt>PermissionDenied</dt>
        <dd>If the field can not be accessed by the user; e.g., the is inactive and the user is not an admin of the project or if the field is inactive.</dd>
</dl>

#### `as_admin(user, project_id, category_id, field_id)`

Returns a single field if the user is an administrator of the project.

##### Parameters

<dl class="parameters">
    <dt>user: <span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User the field is queried for.</dd>
    <dt>project_id: <span class="type">integer</span></dt>
        <dd>Identifies the project in the database.</dd>
    <dt>category_id: <span class="type">integer</span></dt>
        <dd>Identifies the category in the database.</dd>
    <dt>field_id: <span class="type">integer</span></dt>
        <dd>Identifies the field in the database.</dd>
</dl>

##### Returns

<span class="type">Field</span>

##### Raises

<dl class="parameters">
    <dt>Field.DoesNotExist</dt>
        <dd>If the field was not found in the data base.</dd>
    <dt>PermissionDenied</dt>
        <dd>If the field can not be accessed by the user; e.g., the user is not an administrator of the project.</dd>
</dl>
