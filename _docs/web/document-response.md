---
layout: docs
title:  "Document reponse"
---

### Parameters

Parameter           | Type        | Description
--------------------|-------------|-----------------------------------------------
`id`                | `Integer`   | Unique identifier of the document.
`name`              | `String`    | Name of the document.
`description`       | `String`    | Detailed description of the document.
`file_type`         | `String`    | Type of the document. Can be `ImageFile` or `VideoFile`.
`isowner`           | `Boolean`   | `True` if the user authenticated with the request has created the document.
`url`               | `String`    | Relative URL to retrieve the document. Videos are uploaded to the specified Youtube account, the `url` then indicates the link to the video, that can be embedded into your application.
`thumbnail_url`     | `String`    | Relative URL to the document thumbnail.
`creator`           | `Object`    | User, who created the document.
`created_at`        | `Timestamp` | Date and time when the document has been created.

### Example

{% include api-examples/document.md %}
