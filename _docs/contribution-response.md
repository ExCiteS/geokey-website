---
layout: docs
title:  "Contribution response"
---

#### Parameters
Parameter           | Type        | Description                                                                           
--------------------|-------------|---------------------------------------------------------------------------------------
`id`                | `Integer`   | Unique identifier of the category.
`type`              | `String`    | Is always `Feature`.
`geometry`          | `Object`    | [GeoJSON Geometry object](http://geojson.org/geojson-spec.html#geometry-objects) describing the contribution's location.
`properties`        | `Object`    | [Properties](contribution-properties.html) of the contribution.
`comments`          | `List`      | List of [comments](comment-response.html) to the contribution.
`isowner`           | `Boolean`   | `True` if the user authenticated with the request has created this contribution.
`category`          | `Object`    | Minified [category object](category-response.html) of the contribution.

#### Example

{% include api-examples/contribution.md %}