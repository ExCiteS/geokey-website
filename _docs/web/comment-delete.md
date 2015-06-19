---
layout: docs
title:  "Delete comment"
---

``````
DELETE /api/projects/:project_id/contributions/:contribution_id/comments/:comment_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`comment_id`      | `Integer`   | Unique identifier for the comment.

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The comment has been deleted successfully.
 404  | The project, contribution or comment was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
