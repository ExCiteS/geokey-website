---
layout: docs
title:  "Single project"
---

`````````````````````
GET /api/projects/:project_id/
`````````````````````

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.

#### Response

The response contains a [complete Project repsonse objects](response-project.html).

{% highlight json %}
[
  {
    "id": 26,
    "name": "The project name", 
    "description": "A project description",
    "is_involved": true
  }
]
{% endhighlight %}


#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  |  The list project has been returned successfully.
 404  |  The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.