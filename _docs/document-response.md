---
layout: docs
title:  "Document reponse"
---

#### Parameters

Parameter           | Type        | Description                                   
--------------------|-------------|-----------------------------------------------
`id`                | `Integer`   | Unique identifier of the document.
`name`              | `String`    | Name of the document.
`description`       | `String`    | Detailed description of the document.
`isowner`           | `Boolean`   | `True` if the user authenticated with the request has created the document.
`url`               | 'String`    | Relative URL to retrieve the document
`creator`           | `Object`    | User, who created the document.
`created_at`        | `Timestamp` | Date and time when the document has been created.

#### Example

{% include api-examples/document.md %}