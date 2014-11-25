---
layout: docs
title:  "Update comment"
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

### Request

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`grouping_id`     | `Integer`   | Optional. Unique identifier for the data grouping.
`contribution_id` | `Integer`   | Unique identifier for the contribution.
`comment_id`      | `Integer`   | Unique identifier for the comment.

#### PATCH body example

{% highlight json %}
{
    "review_status": "resolved"
}
{% endhighlight %}

### Response

The response contains the [comment](comment-response.html) that has been added to the contribution.

#### Example

{% highlight json %}
{
    "id": 361,
    "text": "They got Camden Hells!",
    "creator": {
        "id": 2,
        "display_name": "Oliver"
    },
    "respondsto": null,
    "created_at": "2014-09-23T14:41:34.856Z",
    "isowner": true,
    "responses": [],
    "review_status": "resolved"
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
200  | The comment has been updated successfully.
403  | The user authenticated with the request is not allowed to delete the contribution. (You have to be either creator of the contribution or a moderator of the project)
404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
