---
layout: docs
title:  "Update user info"
---

``````
PATCH /api/user/
``````

### Request

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### Request body example

{% highlight json %}
{
  "email": "oliver@example.com",
  "password": "123",
  "display_name": "Oliver"
}
{% endhighlight %}

### Response

#### Response example

{% highlight json %}
{
  "id": 1,
  "display_name": "Oliver"
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The user updated was successfully.
 400  | A user with the email and/or display has already registered.
 401  | The request has not been signed with an access token. An access token is required to identify the acting user.
