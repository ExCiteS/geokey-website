---
layout: docs
title:  "Get server info"
---

### Request

``````
GET /api/info/
``````

### Response

{% highlight json %}
{
  "geokey": {
    "version": "0.9.0",
    "installed_extensions": [
      {
        "version": null,
        "name": "geokey_export"
      },
      {
        "version": "0.7.0",
        "name": "geokey_sapelli"
      }
    ]
  }
}
{% endhighlight %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The info has been returned successfully.
