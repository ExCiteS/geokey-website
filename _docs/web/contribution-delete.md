---
layout: docs
title:  "Delete contribution"
---

``````
DELETE /api/projects/:project_id/contributions/:contribution_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The comment has been deleted successfully.
 403  | The user authenticated with the request is not allowed to delete the contribution (You have to be either creator of the contribution or a moderator of the project).
 404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
