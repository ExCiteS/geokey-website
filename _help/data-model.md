---
layout: tutorial
title:  "Data model"
---

![Data model](img/data-model-01.png)

Participatory mapping activities are organised into _projects_. Each project has a different objective and geographic extent. Users who are member of a project contribute perceptions or measurements of their environment to a project and access these contributions via _data groupings_.

Perceptions and measurements are contributed to a project using _contributions_. Each contribution further has a location. That way different users can contribute different perceptions on the same location or continuous measurements can be collected for a certain location. Users can further add comments to contributions, reply to comments or attach media files like photographs or videos to a contribution.

Each contributions has a _category_ that describes which information the contributor is expected to provide. Each category has a number of _fields_. For each field expected data types, accepted values and obligatoriness must be stated. Field itself is an abstract entity and is instantiated by specific field types (see [Field Types](/help/field-types.html) for available types). Categories are used to validate user inputs and to create forms for user interfaces.

Data is accessed through data groupings, which are subsets of all contributions in a project that were contributed to a project. Based on a category, a project administrator defines rules by which the subset of all contributions in a project is created.

Users are granted permission to add, access, edit and delete data in a project using several user groups. First, each project has a number of users assigned that are administrators of the project. Project administrators are allowed to manage all other user groups including their users and permissions, create and manage observation types and field as well as views.

All other users can be assigned to one of a project's user groups. A user group indicates if it's members are allowed to administrate, moderate, contribute data in the project. Further, each user group can be assigned to data groupings. The relation between user group data groupings defines what data the members in a user group can access.
