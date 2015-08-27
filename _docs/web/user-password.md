---
layout: docs
title:  "Update password"
---

### Request

``````
POST /api/user/password/change
``````

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### Request body example

{% highlight json %}
{
  "oldpassword": "myoldpassword",
  "password1": "mynewpassword",
  "password2": "mynewpassword"
}
{% endhighlight %}


### Response

#### Response codes

Code  |  Reason
------|-----------------------------------------
 204  | The password updated was successfully.
 400  | Either the old password was wrong or the new passwords don't match.
 401  | The request has not been signed with an access token. An access token is required to identify the acting user.
