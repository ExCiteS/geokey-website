---
layout: docs
title:  "All contributions"
---
`````````````````````
GET /api/projects/:project_id/data-groupings/all-contributions/
`````````````````````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.

#### Response

The response contains a [GeoJSON Feature Collection](http://geojson.org/geojson-spec.html#feature-collection-objects) object of all [contributions](contribution-response.html) the authenticated user can access in the project.

{% highlight json %}
{
    "type": "FeatureCollection",
    "features": []
}
{% endhighlight %}

#### Response status codes

Code  |  Reason
------|-----------------------------------------
 200  |  The list data grouping has been returned successfully.
 404  |  The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.