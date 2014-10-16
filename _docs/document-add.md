---
layout: docs
title:  "Add document"
---

You can add a documents to a contribution via three different endpoints.

**All users:**

``````
POST /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/media/
``````

**Contributors:**

``````
POST /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/media/
``````

**Users that have been granted access to a data grouping:**

``````
POST /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/media/
``````

### Request

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Request headers

Header          | Required value
----------------|----------------------------
`Content-Type`  | `multipart/form-data`

#### POST body exampe

````
name=Photo+of+the+playground&
description=It+clearly+shows+that+the+swing+is+broken&
file=@file.png
````

### Response

#### Example response

The response contains a [document](document-response.html) attached to the contribution.

{% include api-examples/document.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 201  | The document has been created successfully.
 404  | The project or contribution or document was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.