---
layout: tutorial
title:  "Data model"
---

![Data model](/img/model.gif)

Participatory mapping activities are organised into _projects_. Each project has a different objective and geographic extent. Users who are member of a project contribute perceptions or measurements of their environment to a project.

Perceptions and measurements are contributed to a project using _contributions_. Each contribution has a location. By separating observations and contributions, different users can contribute different perceptions on the same location or continuous measurements can be collected for a certain location. Users can further add comments to contributions, reply to comments or attach media files like photographs, videos or audio files to a contribution.

Each contribution has a _category_ that describes which information the contributor is expected to provide. Each category has a number of _fields_. For each field expected data types, accepted values and if the field is required must be stated. Field itself is an abstract entity and is instantiated by specific field types (see [Field Types](/help/field-types.html) for available types). Categories are used to validate user inputs and to create forms for user interfaces.

Users are granted permission to add, access, edit and delete data in a project using several user groups. First, each project has a number of users assigned that are administrators of the project. Project administrators are allowed to manage all other user groups including their users and permissions, create and manage observation types and field as well as views.

All other users can be assigned to one of a project's user groups. A user group indicates if it's members are allowed to moderate, contribute data in the project. Through user groups, project administrators can further restrict access to a subset of project data by selecting categories or, for each of the selected categories, by defining filters for selected fields.
