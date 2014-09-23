---
layout: docs
title:  "Delete comment"
---

You delete a comment via three different endpoints.

**All users:**

``````
DELETE /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/comments/:comment_id/
``````

**Contributors:**

``````
DELETE /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/comments/:comment_id/
``````

**Users that have been granted access to a data grouping:**

``````
DELETE /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/comments/:comment_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`comment_id`      | `Integer`   | Unique identifier for the comment.

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The comment has been deleted successfully.
 404  | The project, contribution or comment was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.