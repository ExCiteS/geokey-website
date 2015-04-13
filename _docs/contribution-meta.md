---
layout: docs
title:  "Contribution meta information"
---

Contribution properties are not a stand-alone API response. They are part of a [contribution](contribution-response.html).

#### Parameters
Parameter           | Type        | Description
--------------------|-------------|---------------------------------------------------------------------------------------
`creator`           | `Object`    | User, who created the contribution.
`updator`           | `Object`    | Optional. User, who last updated the contribution.
`created`           | `Timestamp` | Date and time when the contribution has been created.
`version`           | `Integer`   | Version number of the contribution.
`category`          | `Integer`   | Unique identifier of the contribution's category.
`status`            | `String`    | Status of the contribution. Can be `active`, `review`, `draft` or `pending`. `pending` contributions are only visible to project moderators, `draft` only to contribution owners.

#### Example
{% highlight json %}
{
    "creator": {
        "id": 2,
        "display_name": "Oliver"
    },
    "updator": null,
    "created_at": "2014-09-19T15:51:32.804Z",
    "version": 1,
    "category": 40,
    "status": "active",
}
{% endhighlight %}
