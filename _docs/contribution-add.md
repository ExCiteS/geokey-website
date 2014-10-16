---
layout: docs
title:  "Add contribution"
---

``````
POST /api/projects/:project_id/contributions/
``````

### Request

#### URL Parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### POST body example

The POST body must contain a [GeoJSON](http://geojson.org/geojson-spec.html#geojson-objects) encoded description of the contribution and its location. 

{% highlight json %}
{
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
        "category": 40
    }   
}
{% endhighlight %}

### Response

#### Example response

{% include api-examples/contribution.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 201  | The contribution has been stored successfully.
 400  | The request data is not valid. 
 403  | The user authenticated with the request is not allowed to contribute to the project.
 404  | The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
