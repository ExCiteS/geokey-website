{% highlight json %}

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
    "symbol": "/assets/symbols/pub.png",
    "created_at": "2014-09-17T00:00:00Z"
}

{% endhighlight %}