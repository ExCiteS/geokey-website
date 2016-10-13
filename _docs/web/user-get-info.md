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
  "email": "example@email.com",
  "display_name": "Oliver"
  "social_accounts": [
    {
      "id": 1,
      "provider": "facebook"
    },
    {
      "id": 2,
      "provider": "twitter"
  	}
	]
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The user has been returned successfully.
 401  | The request has not been signed with an access token. An access token is required to identify the acting user.
