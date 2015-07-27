---
layout: docs
title:  "Single document"
---

``````
GET /api/projects/:project_id/contributions/:contribution_id/media/:document_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
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
