---
layout: docs
title:  "Add document"
---

Add a photo or video to a contribution.

Currently the following file formats are supported:

- _Images:_ `.png`, `.jpg`, `.jpeg`, `.gif`
- _Videos:_ `.mov`, `.mpeg4`, `.avi`, `.wmv`, `.flv`, `.3gpp`, `.webm`

### Request

``````
POST /api/projects/:project_id/contributions/:contribution_id/media/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Request headers

Header          | Required value
----------------|----------------------------
`Content-Type`  | `multipart/form-data`

#### POST body exampe

````
---XXX---
Content-Disposition: form-data; name="name"

Photo of the playground
---XXX---
Content-Disposition: form-data; name="description"

It clearly shows that the swing is broken
---XXX---
Content-Disposition: form-data; name="file"; filename="file.png"
Content-Type: image/png

---XXX---
````
Content-Disposition: attachment; filename=genome.jpeg;

### Response

The response contains a [document](document-response.html) attached to the contribution.

{% include api-examples/document.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 201  | The document has been created successfully.
 404  | The project or contribution or document was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
