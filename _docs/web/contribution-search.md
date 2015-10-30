---
layout: docs
title:  "Search and filter contributions"
---

The list of contributions can be filtered either by providing a free-text `query_term` or by providing the `subset_id` of a pre-defined subset. Both parameters can be combined; the search filter across all contributions in the subset.

### Request

```
GET /api/projects/:project_id/contributions/?search={query_term}&subset={subset_id}
```

#### Request Parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.
`subset_id`       | `Integer`   | Optional. A unique identifier for the subset.
`query_term`      | `String`    | Optional. The term you want to search for.

### Response

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
