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
`created_at`        | `Timestamp` | Date and time when the contribution has been created.
`updated_at`        | `Timestamp` | Date and time when the contribution has been updated.
`version`           | `Integer`   | Version number of the contribution.
`isowner`           | `Boolean`   | `True` if the user authenticated with the request has created this contribution.
`category`          | `Object`    | [Category object](category-response.html) of the contribution.
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
    "updated_at": "2014-09-21T15:51:32.804Z",
    "version": 1,
    "category": {
        "id": 40,
        "name": "Pubs",
        "description": "",
        "status": "active",
        "fields": [
            {
                "id": 117,
                "name": "Name",
                "key": "name",
                "fieldtype": "TextField",
                "description": "",
                "status": "active",
                "required": true
            },
            {
                "id": 118,
                "name": "Address",
                "key": "address",
                "fieldtype": "TextField",
                "description": "",
                "status": "active",
                "required": false
            },
            {
                "id": 119,
                "name": "Child friedly",
                "key": "child_friedly",
                "fieldtype": "TrueFalseField",
                "description": "Would your take your kids?",
                "status": "active",
                "required": false
            }
        ],
        "colour": "#0033ff",
        "created_at": "2014-09-17T00:00:00Z"
    },
    "status": "active",
}
{% endhighlight %}
