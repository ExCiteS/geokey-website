---
layout: docs
title:  "Delete comment"
---

### Request

``````
DELETE /api/projects/:project_id/contributions/:contribution_id/comments/:comment_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`comment_id`      | `Integer`   | Unique identifier for the comment.

### Response

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The comment has been deleted successfully.
 403  | The user authenticated with the request is not allowed to delete the comment. (You have to be either creator of the comment or a moderator of the project)
 404  | The project, contribution or comment was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
