---
layout: docs
title:  "Contribution response"
---

### Parameters

Parameter           | Type        | Description
--------------------|-------------|---------------------------------------------------------------------------------------
`id`                | `Integer`   | Unique identifier of the category.
`type`              | `String`    | Is always `Feature`.
`geometry`          | `Object`    | [GeoJSON Geometry object](http://geojson.org/geojson-spec.html#geometry-objects) describing the contribution's location.
`properties`        | `Object`    | Attributes and their values. The key names correspond to the field keys (see [field response](field-response.html) for more info).
`display_field`     | `Object`    | Display attribute and its value. Defaults to the first field of the contribution's category. The key name correspond to the field key (see [field response](field-response.html) for more info).
`expiry_field`      | `String`    | Expiry date for the contribution.
`meta`              | `Object`    | [Meta information](contribution-meta.html) of the contribution.
`comments`          | `Array`     | List of [comments](comment-response.html) to the contribution.
`media   `          | `Array`     | List of [documents](document-response.html) added to the contribution.
`review_comments`   | `Array`     | List of comments that refer to a problem with this contribution. Will be empty if contribution status is `active`.

### Example

{% include api-examples/contribution.md %}
