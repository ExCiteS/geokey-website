---
layout: tutorial
title:  "Granting permissions to user groups"
---

There are two aspects you should consider when granting permissions to members of user groups. First, there is the general a user has in a project and second, you can decide which contributions the users should be able to access.

### Defining the role within the project

There are three different roles you can assign to members of a user group.

- **Read-only:** Members can only read data. They are not able contribute data. However, members of a read-only user group can comment on contributions they can view.
- **Contributor:** Members of the user group will be able to view, contribute and comment on data. They are able to edit and delete data they contributed themselves.
- **Moderator:** Moderators are able to view contribute and comment on data. In addition they can approve pending contributions for display on the map as well as edit and delete any data in the project. Administrators of a project are moderators by default.

#### Everyone contributes

If you have set up your project so that every user, who has access to the project, can contribute data, it will affect the roles you have given to individual user groups. Even if you set a user group to read-only, their members will still be able to contribute data. If you wish to restrict who can contribute, you have the change the general project settings first.

### Defining the data a user can access in the project.

By default, members of a user group can access all data in a project.

You can, however, restrict access to contributions of certain categories and and even further to contributions that have certain values.

![Go to data](img/usergroup-data-01.png)

To restrict access to data subsets, select "Members can access a subset of the project data only."

![Select subset](img/usergroup-data-02.png)

Now you can select the categories that should be accessible by members of this group. To enable a category, activate the select box next to the category name. (Note, if you do not select any categories at this stage, members of the user group will not have access to any data.)

![Select category](img/usergroup-data-03.png)

To restrict access to contributions with certain field values, click on "Restrict further" next to the category name. Then, select the field, you want to restrict for, form the drop-down.

![Select field](img/usergroup-data-04.png)

Enter accepted values for the field in the form.

![Select value](img/usergroup-data-05.png)

To add more filters, click "Add another filter".

![Add another filter](img/usergroup-data-06.png)

To save the settings click "Save" on the bottom of the page.
