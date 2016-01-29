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
        "version": "0.2.0",
        "name": "geokey_export"
      },
      {
        "version": "0.7.0",
        "name": "geokey_sapelli"
      },
      {
        "version": null,
        "name": "some_extension"
      }
    ]
  }
}
{% endhighlight %}

If the `version` of an extension is `null` this means the extension did not pass its version to GeoKey upon registering.

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The info has been returned successfully.
