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
`status`            | `String`    | Status of the contribution. Can be `active`, `review`, `draft` or `pending`. `pending` contributions are only visible to project moderators, `draft` only to contribution owners.
`display_field`     | `Object`    | Optional. The first field of the contribution's category. Use this as the default display field for the entry.
`search_matches`    | `Object`    | Optional, only available in search results. Several key-value pairs of fields that match the query.

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
