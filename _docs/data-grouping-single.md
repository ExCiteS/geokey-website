---
layout: docs
title:  "Single data grouping"
---
`````````````````````
GET /api/projects/:project_id/data-groupings/:grouping_id/
`````````````````````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Unique identifier for the data grouping.

#### Response

The response contains a [complete data grouping repsonse object](data-grouping-response.html).

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

#### Response status codes

Code  |  Reason
------|-----------------------------------------
 200  |  The list data grouping has been returned successfully.
 404  |  The data grouping or project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.