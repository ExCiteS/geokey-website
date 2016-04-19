---
layout: tutorial
title:  "Getting started with the API"
---

You can use the open Web API to develop clients for GeoKey. This guide will demonstrate how you use the API to get project informations and how to add and update contributions via the API.

### Getting a list of projects

The starting point should be a list of all projects that can be accessed by a user. The user can select a project they want to work with from that list. To display the list on client side, you first retrieve all projects from GeoKey.

To request the list of projects from GeoKey, point the client to

```
GET /api/projects/
```

If you want to access private projects, don't forget to [sign the API calls with an OAuth token](/help/getting-started-with-oauth.html).

The response contains a list of projects including their ID, name, a description and information about the user's role in the project.

```json
[
    {
        "id": 1,
        "name": "Public places in Kentish Town",
        "description": "This map contains public places in north
                        London's Kentish Town. The data has been
                        contributed by students of Kentish Town
                        Primary School.",
        "user_info": {
            "is_involved": true,
            "can_moderate": true,
            "is_admin": true,
            "can_contribute": true
        }
    },
    {
        "id": 2,
        "name": "Toilets in Central London",
        "description": null,
        "user_info": {
            "is_involved": false,
            "can_moderate": false,
            "is_admin": false,
            "can_contribute": true
        }
    },
]
```

You can use this information to present a list to the user and prompt them to select one project to work on.

### Getting a single project

Using the ID of the selected project, you can request details on the project including categories and fields, which you can use to create forms for data input when adding and updating contributions.

```
GET /api/projects/1/
```

The request returns details on the project.

```json
{
    "name": "Public places in Kentish Town",
    "description": "This map contains public places in north
                    London's Kentish Town. The data has been
                    contributed by students of Kentish Town
                    Primary School.",
    "isprivate": false,
    "status": "active",
    "created_at": "2014-09-15T09:40:01.747Z",
    "geographic_extent": null,
    "subsets": [ ],
    "categories": [
        {
            "id": 39,
            "name": "Play grounds",
            "description": null,
            "status": "active",
            "fields": [
                {
                    "id": 113,
                    "name": "What we like about it",
                    "key": "what-we-like-about-it",
                    "fieldtype": "TextField",
                    "description": null,
                    "status": "active",
                    "required": false
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
                    "id": 115,
                    "name": "What we don't like about it",
                    "key": "what-we-dont-like-about-it",
                    "fieldtype": "TextField",
                    "description": null,
                    "status": "active",
                    "required": false
                }
            ],
            "colour": "#0033ff",
            "symbol": "/assets/symbols/play-ground.png",
            "created_at": "2014-09-17T00:00:00Z"
        },
    ],
    "user_info": {
        "is_involved": false,
        "can_moderate": false,
        "is_admin": false,
        "can_contribute": true
    }
}
```

Have a look in the [documentation](/docs/web/project-single.html) to find out what it all means.

The most interesting part in the response is the list of categories and their fields. They describe the data structure for contributions of a category. You can use that information to create forms for data input and to validate the user input on client side.

### Adding a new contribution

You can add a new contribution by POST data to

```
POST /api/projects/1/contributions/
```

In the request body you describe your contribution using the [GeoJSON format](http://geojson.org/).

```json
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
            -0.144415497779846,
            51.54671869005856
        ]
    },
    "properties": {
        "what-we-like-about-it": "It's very clean and we can meet all
                                  of our friends here.",
        "what-we-dont-like-about-it": "The swing needs to be fixed.",
        "address": "20 Prince of Wales Rd, London NW5 3LG"
    },
    "meta": {
        "category": 39
    }
}
```

- `geometry` is a GeoJSON encoded location, either es point, line or polygon.
- `properties` is the data input of the contributor. It is based on the fields of the category; each field is identified by a key that you can find in the `key` property in the project details.
- `meta` contains additional information. When you add a new contribution, you just need to provide the category ID of the contribution.

If the contribution is valid, you will receive a response indicating success (response code `201`) and containing [detailed information](/docs/web/contribution-add.html#response) about the contribution, including an ID that you will use the access or update the contribution later.

### Updating a contribution

Similar to adding a new contribution, you can update an existing contribution by posting to

```
POST /api/projects/1/contributions/103/
```

`103` is the contribution ID returned when you create a contribution.

The POST body contains only the parts of the contribution that you want to update. Everything, you do not pass along, will not be changed.

Using the example above, if the swing has been fixed, you can update the one field as follows:

```json
{
    "properties": {
        "what-we-dont-like-about-it": ""
    }
}
```

GeoKey will respond with status code `200` and [detailed information of the updated contribution](/docs/web/contribution-update.html#response)

### Comments and files

Comments and files can be accessed, added and updated in similar way.

For instance, to get a list of all comments of a contribution, you request

```
GET /api/projects/1/contribution/103/comments/
```

To get a single comment, to update or delete it you GET, POST, or DELETE to

```
GET /api/projects/1/contribution/103/comments/1034/
```

`1034` indicates the comment ID.

Have a look at the [API documentation](/docs/web-api.html) to find about all options and endpoints the API provides.
