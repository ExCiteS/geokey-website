---
layout: internal-docs
title:  "LookupValue"
---

A lookup value is a pre-defined accepted value for a LookupField or MuiltipleLookupField.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
id                     | int                      | Identifies the lookup value in the database.
name                   | str                      | Short title of the value.
status                 | str                      | Status of the field, must be one of 'active', 'inactive', `deleted`.
field                  | LookupField / MultipleLookupField | Field this value is assigned to.

### Methods

#### `delete()`

Deletes the value by setting its status to `inactive`.

### Create a new instance

#### LookupField

```python
from geokey.categories.models import LookupValue
LookupValue.objects.create(name=name, field=field)
```

#### MultipleLookupField

```python
from geokey.categories.models import MultipleLookupValue
MultipleLookupValue.objects.create(name=name, field=field)
```

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Value as displayed to the user.</dd>
    <dt>field: <span class="type">Field</span></dt>
        <dd>Field this value is assigned to.</dd>
</dl>


### Accessing model instances

#### `get(pk=value_id)`

##### Parameters

<dl class="parameters">
    <dt>value_id: <span class="type">integer</span></dt>
        <dd>Identifies the value in the database.</dd>
</dl>

##### Returns

<span class="type"><a href="/docs/internal/lookupvalue.html">LookupValue</a></span>

##### Raises

<dl class="parameters">
    <dt>LookupValue.DoesNotExist</dt>
        <dd>If the value of the lookup field was not found in the data base.</dd>

    <dt>MultipleLookupValue.DoesNotExist</dt>
        <dd>If the value of the multiple-lookup field was not found in the data base.</dd>
</dl>

##### Example

```python
field.lookupvalues.get(pk=2)
```
