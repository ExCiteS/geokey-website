{% highlight json %}
{
    "id": 2966,
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            -0.144415497779846,
            51.54671869005856
        ]
    },
    "properties": {
        "attributes": {
            "child_friedly": false,
            "name": "The Grafton",
            "address": "20 Prince of Wales Rd, London NW5 3LG"
        },
        "location": {
            "id": 2964,
            "name": null,
            "description": null,
            "created_at": "2014-09-19T15:51:32.790Z"
        },
        "creator": {
            "id": 2,
            "display_name": "Oliver"
        },
        "updator": null,
        "status": "active",
        "created_at": "2014-09-19T15:51:32.804Z",
        "version": 1,
        "category": 40,
        "review_comment": null,
    },
    "comments": [],
    "isowner": true,
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
}
{% endhighlight %}