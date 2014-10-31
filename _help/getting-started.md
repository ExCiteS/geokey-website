---
layout: tutorial
title:  "Getting started — An overview of GeoKey"
---

Geographic data is usually collected and provided by local authorities. However, official information quite often does not reflect the situation the same way local residents perceive it. The concept of [participatory mapping](http://www.mappingforrights.org/participatory_mapping) addresses this problem by providing local communities with tools and methods to collect, visualise and analyse geographic data to get a better understanding of the processes happening in their community and to support work to change places.

GeoKey is a platform for participatory mapping. Consider it a data-centre for community-based mapping activities of different kinds. It provides communities with a web-based infrastructure to collect, share and discuss local knowledge. You can use it to set up your own mapping project via GeoKey's administration interfaces and to collect and visualise the data with the tools of your choice using the public API.

We agree, that this all sounds very technical, so let's have a look at this simple example: Let’s say, you want to create a map of your neighbourhood’s finest restaurants, pubs and local shops. Because you want to keep your maps tidy, only members of your communities that are trusted connoisseurs should be able to contribute data to your project. You also live in a small and trusted community, so not everyone should be able to read data from your project and, of course, you don’t want children to have access to information on local pubs.

Now, let’s see how this example translates in a project run with GeoKey.

### Categories, data groupings and user groups — what is it all about?

Community mapping ventures are organised into distinct projects. For each project you define a set of categories; in our case this would be one for each restaurants, pubs and local shops. Using categories you can define, which data you want your contributors to collect. For the category restaurants, this could be a name, its address, the number of available seats and cuisine being served at that place. These would be the fields of your category.

In order to allow a selected set of users to contribute data to your new project, you create a user group “Contributors” and grant its members permission to contribute.

Now your contributors add data to the project, a few places for each category, but so far nobody can actually access your data. You provide access to your data using data groupings. Data groupings are assigned with a set of filters that define, which data will be accessible through that respective grouping. As you want to provide access to all of your data, but restrict access for children to local stores and restaurants only, you create three data grouping — one for each category.

Finally, you grant permissions to access these data groupings to your users. Your contributors are all adults, so you simply permit access to all three data groupings to that user groups.

You also create two additional user groups: Community Members and Children. You grant both groups read-only permissions as you don’t want their members to contribute. The group Community Members will be granted access to all three data groupings whereas Children will be granted access to the data groupings restaurants and local shops.

Now you should be all set up and ready to go.

### So… How can I contribute and view my data?

As we pointed out earlier, GeoKey is just the data hub for your maps data. And that's why we need your help. If you are a developer feel free to build an app using the [API]({{site.url}}docs).

We are currently developing mobile and browser-based applications for GeoKey — get in touch with us to find out more.

### Where next

<ul class="next-links tutorial-links">
    <li>
      <h6><a href="{{site.url}}help/how-to-create-project.html">Create your first project</a></h6>
      <p>Learn how to setup your first project.</p>
    </li>
    <li>
     <h6><a href="../developers/">Developers</a></h6>
      <p>Learn how to install GeoKey on your server or how to use the API to build apps.</p>
    </li>
</ul>
