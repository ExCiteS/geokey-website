---
layout: tutorial
title:  "Getting started — An overview of the platform"
---

Geographic data is usually collected and provided by local authorities. However, official information quite often does not reflect the situation the same way local residents perceive it. The concept of participatory mapping addresses this problem by providing local communities with tools and methods to collect, visualise and analyse geographic data to get a better understanding of the processes happening in their community and to support work to change places. 

[The platform] is a platform for participatory mapping. Consider it a data-centre for community-based mapping activities of different kinds. Use [the platform] to define what data you want to collect and define rules to validate contributions to your project. Connect all different kinds of external applications through our public API to provide end-users with means collect and store geographic data and to retrieve data for visualisation and analysis. 

### Categories, data groupings and user groups — what is it all about?

Let’s say, you want to create a map of your neighbourhood’s finest restaurants, pubs and local shops. Because you want to keep your maps tidy, only members of your communities that are trusted connoisseurs should be able to contribute data to your project. You also live in a small and trusted community not everyone should be able to read data from your project and, of course, you don’t children to have access to information on local pubs. 

Now, let’s have a look how you can set up a project that complies to these requisites. 

Community mapping ventures are organised into distinct projects. For each projects you define a set of categories; in our case this would be one for each restaurants, pubs and local shops. Using categories you can define, which data you want your contributors to collect. For the category restaurants, this could be a name, its address, the number of available seats and cuisine being served at that place. 

In order to allow a selected set of user to contribute data to your new project, your create a user group “Contributors” and grant its members permission to contribute. 

Now your contributors add data to the project, a few places for each category, but so far nobody can actually access your data. You provide access to your data using data groupings. Data groupings are assigned with a set of filters that define, which data will be accessible through that grouping. As you want to provide access to all of your data, but restrict access for children to local stores and restaurants only, you create three data grouping — one for each category.

Finally, you grant permissions to access these data groupings to your users. Your contributors are all adults, so you simple permit access to all three data groupings to that user groups. 

You also create two additional user groups: Community Members and Children. You grant both groups read-only permissions as you don’t want their members to contribute. The group Community Members will be granted access to all three data groupings whereas Children will be granted access to the data groupings restaurants and local shops. 

Now you should be all set up and ready to go.

### Now really… how can I contribute and view my data?

As we pointed out earlier, [the platform] is just the data hub for your maps data. There is a couple of third-party applications that were build on top of [the platform] that you can use for contributing and viewing data.

[Mapping for Change](http://mappingforchange.org.uk/) has developed a sophisticated client called [Community Maps](http://communitymaps.org.uk), which you can use for free. 

You can also run your own instance and build the app you want on top of our API. Head to the [developer section](../developers/) to get started.
