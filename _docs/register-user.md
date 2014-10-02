---
layout: docs
title:  "Register a user"
---

``````
POST /oauth2/signup/
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
  "password": "123"
  "display_name": "Oliver"
}
{% endhighlight %}

You need to obtain a `client_id` by [registering your application]({{site.url}}help/register-your-app.html) with [the platform].

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
 201  | The was registered successfully.
 400  | A user with the email and/or display has already registered. <br>You did provide an invalid client id or not client id at all.