---
layout: docs
title:  "Single document"
---

You can get a single document attached to a contribution via three different endpoints.

**All users:**

``````
GET /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/media/:document_id/
``````

**Contributors:**

``````
GET /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/media/:document_id/
``````

**Users that have been granted access to a data grouping:**

``````
GET /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/media/:document_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`document_id`     | `Integer`   | Unique identifier for the document

#### Example response

The response contains a [document](document-response.html) attached to the contribution.

{% include api-examples/document.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The document has been returned successfully.
 404  | The project or contribution or document was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.