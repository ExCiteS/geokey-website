---
layout: docs
title:  "Single project"
---

`````````````````````
GET /api/projects/:project_id/
`````````````````````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.

#### Response

The response contains a [complete Project repsonse object](project-response.html).

{% include api-examples/project.md %}

#### Response status codes

Code  |  Reason
------|-----------------------------------------
 200  |  The project has been returned successfully.
 404  |  The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.