---
layout: docs
title:  "Delete document"
---

You can get a single document attached to a contribution via three different endpoints.

**All users:**

``````
DELETE /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/media/:document_id/
``````

**Contributors:**

``````
DELETE /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/media/:document_id/
``````

**Users that have been granted access to a data grouping:**

``````
DELETE /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/media/:document_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`document_id`     | `Integer`   | Unique identifier for the document

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The document has been deleted successfully.
 403  | The user athorised with the request is not the creator of the document or not a moderator of the project and hence not allowed to delete this document.
 404  | The project or contribution or document was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.