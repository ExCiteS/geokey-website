---
layout: tutorial
title:  "How users can access the data in your project"
---

You have [setup your project](how-to-create-project.html) and users started contributing data. Now you want people to view your data on the map.

Users can access their data through data groupings. Data groupings are a subset of all data contributed to your project. You create filters to define what data should be available in a data grouping. By assigning user groups to a data grouping, who can set which users can access the data grouping. 

We'll walk you through the process by following a simple example. You have set up a category _Pubs_ and want adults to access it, but no children.

### Create a data grouping

Let's start by creating a data grouping. Head to data groupings first. Then click _Create new data grouping_.

![Click Create data grouping](img/how-users-access-data-01.png)

The provide a name and an optional description and click save.

![Provide name and description](img/how-users-access-data-02.png)

### Adding filters

The grouping has now been created. Now we add filters to decide, what contributions will belong to the data grouping. 

Click on _Create new filter_. In the form on the following page, select _Pubs_ from the drop-down list below _Select category_.

![Select the category](img/how-users-access-data-03.png)

You could now set more detailed filter rules, but for the sake of simplicity we leave it at that. 

Click _Save_ at the bottom of the form. Now all Pubs are added to the data grouping.

### Creating user groups

To assign user groups to you data grouping, you first have to create them. 

Head to _User groups_ and click _Create new user group. 

![Click create user group](img/how-users-access-data-04.png)

Provide a name and an optional description and click _save_.

![Provide name and description](img/how-users-access-data-05.png)

You can now [add users](add-remove-users.html) to the group. To grant the members permission to your the data grouping _Pubs_, click _Permissions_ in the left-hand side menu.

![Click permissions](img/how-users-access-data-06.png)

On the next page, you can set the [role of the user group](granting-permissions-to-usergroups.html) and grant access to data groupings. 

In the data groupings list, click on _Grant access_ to all data groupings for that user group.

![Grant access to data groupings](img/how-users-access-data-07.png)

For the case you children, who should not be able to access the data grouping _Pubs_, you would create a separate user group and grant access to _Local shops_ and _Restaurants_ only.

### One more thing about public projects

If you chose to make your project public, all data groupings will be public as well. Any individual settings for user groups will be ignored. In order, to hide them from the public, you need to head to that data grouping permissions and hide it from the public. 

![Grant access to data groupings](img/how-users-access-data-08.png)



