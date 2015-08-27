---
layout: docs
title:  "Field response"
---

### Parameters

Parameter           | Type        | Description
--------------------|-------------|-----------------------------------------------
`id`                | `Integer`   | Unique identifier of the field.
`name`              | `String`    | Name of the field.
`description`       | `String`    | Detailed description of the nature of field.
`key`               | `String`    | The key of the field. Is used in API calls to identifiy the field.
`required`          | `Boolean`   | Indicates of this field is required, i.e. contributors have to provide a value.
`fieldtype`         | `String`    | Type of the field. One of `TextField`, `NumericField`, `TrueFalseField`, `DateTimeField` or `LookupField`
`minval`            | `Number`    | Optional, only available with `NumericField`. Minimum accepted value for this field.
`maxval`            | `Number`    | Optional, only available with `NumericField`. Maximum accepted value for this field.
`textarea`          | `Boolean`   | Optional, only available with `TextField`. Indicates if the field should be displayed as textarea.
`maxlength`         | `Number`    | Optional, only available with `TextField`. The maximum number if characters accepted for this textfield.
`lookupvalues`      | `Array`     | Optional, only available with `LookupField`. List of accepted values for this field.
`order`             | `Integer`   | The order in the list of fields.

### Example

{% highlight json %}
{
    "id": 113,
    "name": "Name",
    "key": "name",
    "fieldtype": "TextField",
    "description": "The name of the restaurant",
    "status": "active",
    "required": true
}
{% endhighlight %}
