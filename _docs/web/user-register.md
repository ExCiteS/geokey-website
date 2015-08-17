---
layout: docs
title:  "Register a user"
---

``````
POST /api/user/
``````

### Request

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### Request body example

{% highlight json %}
{
  "client_id": XXXXXXXXXXXXXXXXXX,
  "email": "oliver@example.com",
  "password1": "123",
  "password2": "123",
  "display_name": "Oliver"
}
{% endhighlight %}

You need to obtain a `client_id` by [registering your application](/help/register-your-app.html) with GeoKey.

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
 201  | The user was registered successfully.
 400  | A user with the email and/or display has already registered. <br>You did provide an invalid client id or not client id at all.
