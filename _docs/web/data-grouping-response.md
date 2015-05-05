---
layout: docs
title:  "Data grouping response"
---

Parameter           | Type        | Description                                                                                | Compact object | Complete object
--------------------|-------------|--------------------------------------------------------------------------------------------|----------------|----------------
`id`                | `Integer`   | Unique identifier for a project.                                                           | ✔              | ✔   
`name`              | `String`    | Name of the project.                                                                       | ✔              | ✔   
`description`       | `String`    | Detailed description of the nature of the project.                                         | ✔              | ✔ 
`created_at`        | `Timestamp` | Date and time, when the project was created.                                               | ✔              | ✔
`num_contributions` | `Integer`   | Number of contributions available through this view.                                       | ✔              | ✔
`contributions`     | `Object`    | [GeoJSON Feature Collection](http://geojson.org/geojson-spec.html#feature-collection-objects) object of all [contributions](contribution-response.html) available through this data grouping |                | ✔

#### Example

{% highlight json %}
{
    "id": 44,
    "name": "Restaurants",
    "description": "",
    "status": "active",
    "created_at": "2014-09-19T12:57:53.527Z",
    "contributions": {
        "type": "FeatureCollection",
        "features": []
    },
    "isprivate": false,
    "num_contributions": 0
}
{% endhighlight %}