---
layout: docs
title:  "Search contributions"
---

Search for contributions in a project using a keyword.

``````
GET /api/projects/:project_id/contributions/search/?query={query_term}
``````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`query_term`      | `String`    | The term you want to search for.

#### Response

The response contains a [GeoJSON Feature Collection](http://geojson.org/geojson-spec.html#feature-collection-objects) object of all [contributions](contribution-response.html) the authenticated user can access in the project and which match the query term.

{% highlight json %}
{
    "type": "FeatureCollection",
    "features": []
}
{% endhighlight %}