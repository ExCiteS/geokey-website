---
layout: docs
title:  "Single contribution"
---
You can access a single contribution through three different endpoints.

**All users:**

``````
GET /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/
``````

**Contributors:**

``````
GET /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/
``````

**Users that have been granted access to a data grouping:**

``````
GET /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/
``````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Example response

The response contains the [GeoJSON](http://geojson.org/geojson-spec.html) encoded [contribution](contribution-response.html).

{% include api-examples/contribution.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The contribution has been returned successfully.
 404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.