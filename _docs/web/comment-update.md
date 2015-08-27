---
layout: docs
title:  "Update comment"
---

### Request

``````
PATCH /api/projects/:project_id/contributions/:contribution_id/comments/:comment_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
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
