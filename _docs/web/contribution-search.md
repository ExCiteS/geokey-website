---
layout: docs
title:  "Search and filter contributions"
---

The list of contributions can be filtered either by providing a free-text `query_term`, by providing the `subset_id` of a pre-defined subset or boundary box '{xmin,ymin,xmax,ymax}'. All parameters can be combined; the search filter across all contributions in the subset together with the boundary box or they can also be used individually. Please, bare in mind that the boundary box should follow OSGeo standards. 

### Request

```
GET /api/projects/:project_id/contributions/?search={query_term}&subset={subset_id}&bbox=xmin,ymin,xmax,ymax
```

#### Request Parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.
`subset_id`       | `Integer`   | Optional. A unique identifier for the subset.
`query_term`      | `String`    | Optional. The term you want to search for.
`query_term`      | `String`    | Optional. The boundary box you want to search for.

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
 406  |  The boundary box intruduced is wrong be found.
