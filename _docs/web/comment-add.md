---
layout: docs
title:  "Add comment"
---

``````
PATCH /api/projects/:project_id/contributions/:contribution_id/comments/
``````

### Request

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### POST body example

{% highlight json %}
{
  "text": "They got Camden Hells",
  "respondsto": null,
  "review_status": "open"
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
    "review_status": "open"
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 201  | The comment has been added successfully.
 404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
