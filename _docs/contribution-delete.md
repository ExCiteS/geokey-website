---
layout: docs
title:  "Delete contribution"
---

You can delete a contribution through three different endpoints.

**All users:**

``````
DELETE /api/projects/:project_id/data-groupings/all-contributions/contributions/:contribution_id/
``````

**Contributors:**

``````
DELETE /api/projects/:project_id/maps/data-groupings/my-contributions/contributions/:contribution_id/
``````

**Users that have been granted access to a data grouping:**

``````
DELETE /api/projects/:project_id/data-groupings/:grouping_id/contributions/:contribution_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The comment has been deleted successfully.
 403  | The user authenticated with the request is not allowed to delete the contribution. (You have to be either creator of the contribution or a moderator of the project)
 404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
