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
      -0.1444154977798462,
      51.54671869005856
    ]
  },
  "properties": {
    "category": 40,
    "attributes": {
      "name": "The Grafton",
      "address": "20 Prince of Wales Rd, London NW5 3LG",
      "child_friedly": false
    }
  }
}
{% endhighlight %}

### Response

The response contains the [contribution](contribution-response.html) that has been created.

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
        "status": "active",
        "category": 40,
        "review_comment": null,
        "creator": {
            "id": 2,
            "display_name": "Oliver"
        },
        "updator": null,
        "created_at": "2014-09-19T15:51:32.804Z",
        "version": 1,
        "location": {
            "id": 2964,
            "name": null,
            "description": null,
            "created_at": "2014-09-19T15:51:32.790Z"
        },
        "attributes": {
            "child_friedly": false,
            "name": "The Grafton",
            "address": "20 Prince of Wales Rd, London NW5 3LG"
        }
    },
    "comments": [],
    "isowner": true,
    "category": {
        "id": 40,
        "name": "Pubs",
        "description": "",
        "status": "active",
        "fields": [
            {
                "id": 117,
                "name": "Name",
                "key": "name",
                "fieldtype": "TextField",
                "description": "",
                "status": "active",
                "required": true
            },
            {
                "id": 118,
                "name": "Address",
                "key": "address",
                "fieldtype": "TextField",
                "description": "",
                "status": "active",
                "required": false
            },
            {
                "id": 119,
                "name": "Child friedly",
                "key": "child_friedly",
                "fieldtype": "TrueFalseField",
                "description": "Would your take your kids?",
                "status": "active",
                "required": false
            }
        ],
        "colour": "#0033ff",
        "created_at": "2014-09-17T00:00:00Z"
    },
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 201  | The contribution has been stored successfully.
 400  | The request data is not valid. 
 403  | The user authenticated with the request is not allowed to contribute to the project.
 404  | The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.