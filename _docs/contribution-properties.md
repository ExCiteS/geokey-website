---
layout: docs
title:  "Contribution properties"
---

Contribution properties are not a stand-alone API response. They are part of a [contribution](contribution-response.html).

#### Parameters
Parameter           | Type        | Description                                                                           
--------------------|-------------|---------------------------------------------------------------------------------------
`attributes`        | `Object`    | Attributes and their values. The key names correspond to the field keys (see [field response](field-response.html) for more info)
`creator`           | `Object`    | User, who created the contribution.
`updator`           | `Object`    | Optional. User, who last updated the contribution.
`created`           | `Timestamp` | Date and time when the contribution has been created.
`version`           | `Integer`   | Version number of the contribution.
`category`          | `Integer`   | Unique identifier of the contribution's category.
`status`            | `String`    | Status of the contribution. Can be `active` or `pending`. `Pending` contributions are only visible to project moderators.
`review_comment`    | `String`    | Comment that has been provided, when the contribution has been flagged for review.

#### Example
{% highlight json %}
{
    "attributes": {
        "child_friedly": false,
        "name": "The Grafton",
        "address": "20 Prince of Wales Rd, London NW5 3LG"
    },
    "creator": {
        "id": 2,
        "display_name": "Oliver"
    },
    "updator": null,
    "created_at": "2014-09-19T15:51:32.804Z",
    "version": 1,
    "category": 40,
    "status": "active",
    "review_comment": null,
}
{% endhighlight %}