---
layout: docs
title:  "List documents"
---

``````
GET /api/projects/:project_id/contributions/:contribution_id/media/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Example response

The response contains an array of all [documents](document-response.html) attached to the contribution.

{% highlight json %}
[
    {
        "id": 66,
        "name": "Photo of the playground",
        "description": "It clearly shows that the swing is broken",
        "isowner": true,
        "url": "/media/user-uploads/img-2165.jpg",
        "thumbnail_url": "/media/user-uploads/img-2165.jpg.300x300_q85_crop.png",
        "file_type": "ImageFile",
        "creator": {
            "id": 422,
            "display_name": "Peter Schmeichel"
        },
        "created_at": "2014-06-05T11:31:02.613Z",
    }
]
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The documents has been returned successfully.
 404  | The project or contribution or document was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
