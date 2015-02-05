---
layout: tutorial
title:  "How does GeoKey work"
---

This is an introduction into the basic concepts of GeoKey. It provides a bigger picture about the different components and how they are related.

Projects, categories, data groupings and user groups are the basic components in GeoKey. Together, they define what data is being collected and who will be able to access that data.

### Projects

Community mapping ventures are organised into distinct projects. Each project has a specific aim and usually a targeted geographic area; e.g., a neighbourhood. Let's say you want to map your favourite hangouts in your area, like parks, pubs, restaurants and local shops — that would be your project. Measurements of air quality along your road would be a different one.

### Categories

Each project defines a set of categories, depending on what data you want your community to map. On a very generic level, a category says something about what the contribution of that category is about. In the example above this would be one category for each parks, pubs, restaurants and local shops.

Furthermore, categories have fields that define what information should be provided for each contribution of a category. For the category restaurants, this could be a name, its address, the number of available seats and cuisine being served at that place. Fields have data types (e.g. text, number or a list of choices), you can define contraints like minimum and maximum values or if providing a value for a field is mandatory.

Using the category of a contribution and its fields, every time a user creates a new or updates an existing contribution the data provided is validated against the field definition.

### Data groupings and user groups

Data groupings define a subset of all contributions in a project. For instance, you can create a data grouping for all restaurants that serve Italian cuisine or caf&eacute;s that are child-friendly. Using these data groupings you can specify who will be able to access what subset of the data in your project. You can do that by creating a user group and grant the group access to a data grouping.

Through user groups, you further assign roles to its members. In GeoKey there are four different levels of user roles:

1. **Administrators** can access all data of a project, they can moderate and contribute as well manage the project. They can create and edit categories and their fields, create and change user groups, including adding and removing users and granting permissions to user groups
2. **Moderators** can moderate all data they are allowed to access. This includes editing and deleting contributions, comments and attached media of other users as well as approving pending contributions. Moderators further can contribute to the project.
3. **Contributors** can contribute to a project and read all data they are allowed to access. They can edit and delete their own contributions, comments and attached media.
4. **Read only users** can only access data they are allowed to.

### Where next

<ul class="next-links tutorial-links">
    <li>
      <h6><a href="/help/how-to-create-project.html">Create your first project</a></h6>
      <p>Learn how to setup your first project.</p>
    </li>
    <li>
     <h6><a href="/developers/">Developers</a></h6>
      <p>Learn how to install GeoKey on your server or how to use the API to build apps.</p>
    </li>
</ul>
