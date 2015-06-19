---
layout: docs
title:  "Delete document"
---

``````
DELETE /api/projects/:project_id/contributions/:contribution_id/media/:document_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`document_id`     | `Integer`   | Unique identifier for the document

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The document has been deleted successfully.
 403  | The user authorised with the request is not the creator of the document or not a moderator of the project and hence not allowed to delete this document.
 404  | The project or contribution or document was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
