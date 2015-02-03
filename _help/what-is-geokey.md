---
layout: tutorial
title:  "What is GeoKey"
---

Geographic data is usually collected and provided by local authorities. However, official information quite often does not reflect the situation the same way local residents perceive it. The concept of participatory mapping addresses this problem by providing local communities with tools and methods to collect, visualise and analyse geographic data to get a better understanding of the processes happening in their community and to support work to change places.

![API](img/what-is-geokey-01.png)

GeoKey is a platform for participatory mapping. It provides communities with a web-based infrastructure to collect, share and discuss local knowledge. You can use it to set up your own mapping project via GeoKey's administration by creating custom data structures that support data collection and validation for specific use-cases. Different user roles (administrator, moderator, contributor and other users) along with a moderation workflow ensure the level of quality control that desired by the community. Detailed data filtering options allows project administrators to grant access to custom subsets of a project’s data to different user groups. GeoKey’s core features further include discussions of observations and their annotation with rich media, such as photos and videos.

![API](img/what-is-geokey-02.png)

However, GeoKey does not provide the user interfaces to add, edit visualise or analyse data. Its aim is to provide an infrastructure for a great variety of citizen science and participatory mapping projects. We therefore chose to only build the backend infrastructure to setup projects, manage access to data and to store and validate data.

Applications tied to specific use-cases can be build on top of the [REST API](/docs/). These apps can vary from smartphone apps for data collection over web maps for data visualisation and editing to GIS for data analysis.
