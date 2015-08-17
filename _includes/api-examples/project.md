{% highlight json %}
{
    "id": 28,
    "name": "Local spots",
    "description": "",
    "isprivate": true,
    "status": "active",
    "created_at": "2014-09-15T09:40:01.747Z",
    "geographic_extent": {
        "type": "Polygon",
        "coordinates": [
            [
                [-0.508, 51.682],
                [-0.53, 51.327],
                [0.225, 51.323],
                [0.167, 51.667],
                [-0.508, 51.682]
            ]
        ]
    },
    "subsets": [
        {
            "id": 1,
            "name": "Italian Restaurants",
            "description": null,
            "created_at": "2014-09-15T09:40:01.747Z",
        }
    ],
    "categories": [
        {
            "id": 39,
            "name": "Restaurants",
            "description": "Local places to eat",
            "status": "active",
            "fields": [
                {
                    "id": 113,
                    "name": "Name",
                    "key": "name",
                    "fieldtype": "TextField",
                    "description": "The name of the restaurent",
                    "status": "active",
                    "required": true
                },
                {
                    "id": 114,
                    "name": "Address",
                    "key": "address",
                    "fieldtype": "TextField",
                    "description": "",
                    "status": "active",
                    "required": true
                },
                {
                    "id": 116,
                    "name": "Cuisine",
                    "key": "cuisine",
                    "fieldtype": "LookupField",
                    "description": "",
                    "required": true,
                    "lookupvalues": [
                        {
                            "id": 31,
                            "name": "Italian"
                        },
                        {
                            "id": 32,
                            "name": "Russian"
                        },
                        {
                            "id": 33,
                            "name": "British"
                        },
                        {
                            "id": 34,
                            "name": "German"
                        }
                    ]
                },
                {
                    "id": 115,
                    "name": "Number of seats",
                    "key": "number_of_seats",
                    "fieldtype": "NumericField",
                    "description": "",
                    "status": "active",
                    "required": false,
                    "minval": null,
                    "maxval": null
                }
            ],
            "colour": "#0033ff",
            "symbol": "/assets/symbols/pub.png"
            "created_at": "2014-09-17T00:00:00Z"
        },
        {
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
            "symbol": null,
            "created_at": "2014-09-17T00:00:00Z"
        },
        {
            "id": 41,
            "name": "Local shop",
            "description": "",
            "status": "active",
            "fields": [
                {
                    "id": 120,
                    "name": "Name",
                    "key": "name",
                    "fieldtype": "TextField",
                    "description": "",
                    "status": "active",
                    "required": true
                },
                {
                    "id": 121,
                    "name": "Address",
                    "key": "address",
                    "fieldtype": "TextField",
                    "description": "",
                    "status": "active",
                    "required": true
                },
                {
                    "id": 122,
                    "name": "Description",
                    "key": "description",
                    "fieldtype": "TextField",
                    "description": "Describe what is nice about the place or what kind of stuff they sell.",
                    "status": "active",
                    "required": false
                }
            ],
            "colour": "#0033ff",
            "symbol": null,
            "created_at": "2014-09-17T00:00:00Z"
        }
    ],
    "contribution_info": {
        "personal": 0,
        "total": 0,
        "pending_personal": 0,
        "drafts": 0,
        "pending_all": []
    },
    "user_info": {
        "is_involved": true,
        "can_moderate": true,
        "is_admin": true,
        "can_contribute": true
    },
    "num_locations": 203
}
{% endhighlight %}
