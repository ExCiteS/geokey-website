---
layout: docs
title:  "My contributions"
---
`````````````````````
GET /api/projects/:project_id/data-groupings/my-contributions/
`````````````````````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.

#### Response

The response contains a [GeoJSON Feature Collection](http://geojson.org/geojson-spec.html#feature-collection-objects) object of all [contributions](contribution-response.html) the authenticated user has made to the project.

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
 404  |  The project was not found or the authenticated user is not a contribtor of this project. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.