---
layout: docs
title:  "List projects"
---

List all projects visible to the authenticated user. If no user is authenticated only public projects will be returned.

`````````````````````
GET /api/projects/
`````````````````````

#### Response

The response contains an array of [compact Project repsonse objects](response-project.html).

{% highlight json %}
[  
  {
    "id": 21,
    "name": "London Transport",
    "description": "",
    "user_info": {
      "is_involved": true,
      "can_moderate": true,
      "is_admin": true,
      "can_contribute": true
    }
  },
  {
    "id": 26,
    "name": "Hackney Wick",
    "description": "Hackney Wick is located within the Wick Ward in the far east of the borough 
                    and on the edge of the planned 2012 Olympic Park. Hackney Wick has a proud 
                    history at the heart of east Londons industrial development.",
    "user_info": {
      "is_involved": true,
      "can_moderate": true,
      "is_admin": true,
      "can_contribute": true
    }
  },
  {
    "id": 28,
    "name": "Local spots",
    "description": "",
    "user_info": {
      "is_involved": true,
      "can_moderate": true,
      "is_admin": true,
      "can_contribute": true
    }
  },
]
{% endhighlight %}