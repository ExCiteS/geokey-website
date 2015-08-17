---
layout: docs
title:  "Project response"
---

#### Parameters

Parameter           | Type        | Description                                                                           | Compact object | Complete object
--------------------|-------------|---------------------------------------------------------------------------------------|----------------|----------------
`id`                | `Integer`   | Unique identifier for a project.                                                      | ✔              | ✔
`name`              | `String`    | Name of the project.                                                                  | ✔              | ✔
`description`       | `String`    | Detailed description of the nature of the project.                                    | ✔              | ✔
`created_at`        | `Timestamp` | Date and time, when the project was created.                                          | ✔              | ✔
`subsets`        | `Array`     | List of [subsets](subset-response.html) of that project.                         |                | ✔
`categories`        | `Array`     | List of [categories](category-response.html) of that project.                         |                | ✔
`contribution_info` | `Object`    | Statistics on contribtions in this project                                            |                | ✔
`user_info`         | `Object`    | Information, which permissions this user has been granted in the project.             | ✔              | ✔
`geographic_extent` | `Object`    | GeoJson Geometry about the project's geographic boundaries as defined by the project admin. |                | ✔

#### Example

{% include api-examples/project.md %}
