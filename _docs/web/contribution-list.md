---
layout: docs
title:  "List all contributions"
---

``````
GET /api/projects/:project_id/contributions/
``````

#### Request Parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.

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
 200  |  The list of contributions has been returned successfully.
 404  |  The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
