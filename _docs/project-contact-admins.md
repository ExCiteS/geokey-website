---
layout: docs
title:  "Contact the project administrators"
---

Send an email to the project administrators via the API.

`````````````````````
POST /api/projects/:project_id/get-in-touch/
`````````````````````

### Request

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | A unique identifier for the project.

#### Request parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`email_text`      | `String`    | The inquiry the authenticated user sends to the admins.

#### Request body example

{% highlight json %}
{
    "email_text": "Please add me as a contributor to the project."
}
{% endhighlight %}

### Response

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The email has been successfully sent to the project administrators.
 401  | No user was authenticated with the request. For security reasons, only registered users can contact the project administrators.
 404  | The project was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
