---
layout: docs
title:  "Category response"
---

### Parameters

Parameter           | Type        | Description
--------------------|-------------|---------------------------------------------------------------------------------------
`id`                | `Integer`   | Unique identifier of the category.
`name`              | `String`    | Name of the category.
`description`       | `String`    | Detailed description of the nature of the category.
`created_at`        | `Timestamp` | Date and time, when the category was created.
`fields`            | `Array`     | A list of [fields](field-response.html) assigned to this category.
`colour`            | `String`    | Default colour, which should be used to display features for this category.
`symbol`            | `String`    | Image URL of a symbol, , which should be used to display features for this category.
`order`             | `Integer`   | The order in the list of categories.

### Example

{% include api-examples/category.md %}
