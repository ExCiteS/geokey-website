---
layout: docs
title:  "Update contribution"
---

You can update a single contribution through three different endpoints.

**All users:**

``````
PATCH /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/
``````

**Contributors:**

``````
PATCH /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/
``````

**Users that have been granted access to a data grouping:**

``````
PATCH /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/
``````

### Request

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### PATCH body example

The body contains are partial contribution with only the fields you want to update. Fields that are not present will remain untouched.

{% highlight json %}
{
  "properties": {
    "attributes": {
      "address": "20 Prince of Wales Road, London NW5 3LG"
    }
  }
}
{% endhighlight %}

### Response

The response contains the [GeoJSON](http://geojson.org/geojson-spec.html) encoded [contribution](contribution-response.html).

#### Example response

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
        "updator": {
            "id": 2,
            "display_name": "Oliver"
        },
        "created_at": "2014-09-19T15:51:32.804Z",
        "version": 2,
        "location": {
            "id": 2964,
            "name": null,
            "description": null,
            "created_at": "2014-09-19T15:51:32.790Z"
        },
        "attributes": {
            "child_friedly": false,
            "name": "The Grafton",
            "address": "20 Prince of Wales Road, London NW5 3LG"
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
 200  | The contribution has been updated successfully.
 400  | The request data is not valid. 
 403  | The user authenticated with the request is not allowed to update the contribution. (You have to be either creator of the contribution or a moderator of the project)
 404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.