---
layout: docs
title:  "Comment response"
---

#### Parameters

Parameter           | Type        | Description                                   
--------------------|-------------|-----------------------------------------------
`id`                | `Integer`   | Unique identifier of the comment.
`text`              | `String`    | Comment content.
`creator`           | `creator`   | Person, who created the comment.
`responds_to`       | `Integer`   | Unique identifier of another comment this comment responds to.
`created_at`        | `Timestamp` | Date and time the comment has been created.
`responses`         | `Array`     | List of comments that respond to this comment.

#### Example 

{% highlight json %}
{
    "id": 361,
    "text": "They got Camden Hells!",
    "creator": {
        "id": 2,
        "display_name": "Oliver"
    },
    "respondsto": null,
    "created_at": "2014-09-23T14:41:34.856Z",
    "isowner": true,
    "responses": [
        {
            "id": 362,
            "text": "And nice cask ales, too",
            "creator": {
                "id": 2,
                "display_name": "Oliver"
            },
            "respondsto": 361,
            "created_at": "2014-09-23T14:42:28.643Z",
            "isowner": true,
            "responses": []
        }
    ]
}
{% endhighlight %}