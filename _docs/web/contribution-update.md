---
layout: docs
title:  "Update contribution"
---

### Request

``````
PATCH /api/projects/:project_id/contributions/:contribution_id/
``````

#### URL parameters

Parameter         | Type        | Description
------------------|-------------|--------------------------------------
`project_id`      | `Integer`   | Unique identifier for the project.
`contribution_id` | `Integer`   | Unique identifier for the contribution.

#### Request headers

Header            | Required value
------------------|-------------
`Content-Type`    | `application/json`

#### PATCH body example

The body contains are partial contribution with only the fields you want to update. Fields that are not present will remain untouched.

{% highlight json %}
{
  "properties": {
      "address": "20 Prince of Wales Road, London NW5 3LG"
  }
}
{% endhighlight %}

### Response

The response contains the [GeoJSON](http://geojson.org/geojson-spec.html) encoded [contribution](contribution-response.html).

#### Example response

{% include api-examples/contribution.md %}

#### Response codes

Code  |  Reason
------|-----------------------------------------
 200  | The contribution has been updated successfully.
 400  | The request data is not valid.
 403  | The user authenticated with the request is not allowed to update the contribution (You have to be either creator of the contribution or a moderator of the project).
 404  | The project or contribution was not found. For security reasons we do not leak information about private projects, hence we don't confirm existence private projects to unauthorised users.
