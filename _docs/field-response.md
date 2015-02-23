---
layout: docs
title:  "Field response"
---

#### Parameters

Parameter           | Type        | Description
--------------------|-------------|-----------------------------------------------
`id`                | `Integer`   | Unique identifier of the field.
`name`              | `String`    | Name of the field.
`description`       | `String`    | Detailed description of the nature of field.
`key`               | `String`    | The key of the field. Is used in API calls to identifiy the field.
`required`          | `Boolean`   | Indicates of this field is required, i.e. contributors have to provide a value.
`fieldtype`         | `String`    | Type of the field. One of `TextField`, `NumericField`, `TrueFalseField`, `DateTimeField`, `LookupField` or `MultipleLookupField`
`order`             | `Integer`   | Number indicating where the field should be displayed in the field list.
`textarea`          | `Boolean`   | Optional, only available with `TextField`. If the field should be displayed as text box.
`maxlength`            | `Number`    | Optional, only available with `TextField`. Maximum accepted amount of characters for this field.
`minval`            | `Number`    | Optional, only available with `NumericField`. Minimum accepted value for this field.
`maxval`            | `Number`    | Optional, only available with `NumericField`. Maximum accepted value for this field.
`lookupvalues`      | `Array`     | Optional, only available with `LookupField`. List of accepted values for this field.

#### Example

{% highlight json %}
{
    "id": 113,
    "name": "Name",
    "key": "name",
    "fieldtype": "TextField",
    "description": "The name of the restaurent",
    "status": "active",
    "required": true,
    "maxlength": 200,
    "textarea": true,
    "order": 0
}
{% endhighlight %}
