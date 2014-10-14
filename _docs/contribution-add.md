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

{% include api-examples/contribution.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 201  | The contribution has been stored successfully.
 400  | The request data is not valid. 
 403  | The user authenticated with the request is not allowed to contribute to the project.
 404  | The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
