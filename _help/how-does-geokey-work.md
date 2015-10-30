---
layout: tutorial
title:  "How does GeoKey work"
---

This is an introduction into the basic concepts of GeoKey. It provides a bigger picture about the different components and how they are related.

Projects, categories and user groups are the basic components in GeoKey. Together, they define what data is being collected and who will be able to access that data.

### Projects

Community mapping ventures are organised into distinct projects. Each project has a specific aim and usually a targeted geographic area; e.g., a neighbourhood. Let's say you want to map your favourite hangouts in your area, like parks, pubs, restaurants and local shops — that would be your project. Measurements of air quality along your road would be a different one.

### Categories

Each project defines a set of categories, depending on what data you want your community to map. On a very generic level, a category says something about what the contribution of that category is about. In the example above this would be one category for each parks, pubs, restaurants and local shops.

Categories have fields that define what information should be provided for each contribution of a category. For the category restaurants, this could be a name, its address, the number of available seats and cuisine being served at that place. Fields have data types (e.g. text, number or a list of choices), you can define constraints like minimum and maximum values or if providing a value for a field is mandatory.

Every time a user creates a new or updates an existing contribution, the data provided is validated against its category and field definitions.

### User groups

Through user groups, you assign roles to its members. In GeoKey there are four different levels of user roles:

1. **Administrators** can access all data of a project, they can moderate and contribute as well manage the project. They can create and edit categories and their fields, create and change user groups, including adding and removing users and granting permissions to user groups
2. **Moderators** can moderate all data they are allowed to access. This includes editing and deleting contributions, comments and attached media of other users as well as approving pending contributions. Moderators further can contribute to the project.
3. **Contributors** can contribute to a project and read all data they are allowed to access. They can edit and delete their own contributions, comments and attached media.
4. **Read only users** can only access data they are allowed to.

### Providing access to projects and data

GeoKey allows you define who can access projects and data on a very detailed level. There are two types of projects: _public_ and _private_.

**Public projects** can be accessed by anyone, regardless if the user is registered and logged in or not. Consequently, all data in a public project is public too.

**Private projects** allow you to restrict access to a selected group of users. Only users that are registered, signed-in and member of one of the project's user groups have access to a private project. By default all data in a private project is accessible to all members of the project's user groups. For each user group individually, you can further restrict access to subset of all data in a project — by selecting categories or, for each of the selected categories, by defining filters for selected fields. Looking back at the example above, you could restrict access of the user group "Children" to restaurants, parks and shops while excluding pubs.

<div class="info-box alert alert-info">
    <i class="fa fa-info-circle"></i>
    <div>
        <ul class="tutorial-links">
            <li>
              <h3><a href="/help/how-to-create-project.html">Create your first project</a></h3>
              <p>Learn how to setup your first project.</p>
            </li>
            <li>
             <h3><a href="/developers/">Developers</a></h3>
              <p>Learn how to install GeoKey on your server or how to use the API to build apps.</p>
            </li>
        </ul>
    </div>
</div>
