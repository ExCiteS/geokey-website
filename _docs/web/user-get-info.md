---
layout: docs
title:  "Get user info"
---

### Request

``````
GET /api/user/
``````

### Response

{% highlight json %}
{
  "id": 1,
  "display_name": "Oliver"
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The user has been returned successfully.
 401  | The request has not been signed with an access token. An access token is required to identify the acting user.
