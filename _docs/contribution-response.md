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

{% highlight json %}
{
    "id": 2966,
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            -0.144415497779846,
            51.54671869005856
        ]
    },
    "properties": {
        "attributes": {
            "child_friedly": false,
            "name": "The Grafton",
            "address": "20 Prince of Wales Rd, London NW5 3LG"
        },
        "location": {
            "id": 2964,
            "name": null,
            "description": null,
            "created_at": "2014-09-19T15:51:32.790Z"
        },
        "creator": {
            "id": 2,
            "display_name": "Oliver"
        },
        "updator": null,
        "status": "active",
        "created_at": "2014-09-19T15:51:32.804Z",
        "version": 1,
        "category": 40,
        "review_comment": null,
    },
    "comments": [],
    "isowner": true,
    "category": {
        "id": 40,
        "name": "Pubs",
        "description": "",
        "colour": "#0033ff",
        "created_at": "2014-09-17T00:00:00Z"
    }
}
{% endhighlight %}
