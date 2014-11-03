---
layout: tutorial
title:  "Register your app"
---

As a developer, you can build applications for GeoKey on top of our API. Your first need to register your new app to be able to obtain OAuth tokens to authenticate and authorise users.

Registered your app is straightforward. First, head to the application section by clicking on _Your applications_ on top of the page.

![Click “Your applications”](img/register-your-app-01.png)

Then click on “Register a new application”, which leads you to the form to register a new app.

Next provide the name of your application and an optional description of what your app is about.

In the field _Download / welcome page URL_ you should provide a website, where users can find more information on your app or where they can download the app.

Finally, if you create a web-app provide a redirect link for your app. After users have authorised your app, the client will be redirected to this URL with the required tokens.

After saving your app, you will be redirected to the app’s settings page. Here you can find the app’s client ID and client secret on the left hand side. You will need both tokens to [obtain a user token](getting-started-with-oauth.html) for your application.

![Click “Obtain client ID and secret”](img/register-your-app-02.png)

#### Where next?

<ul class="next-links tutorial-links">
    <li>
			<h6><a href="getting-started-with-oauth.html">Gettings started with OAuth</a></h6>
      <p>Learn how to obtain OAuth tokens and how to sign your request to authenticate and authorise users.</p>
    </li>
    <li>
      <h6><a href="/docs/">Read the API docs</a></h6>
      <p>Find out which API endpoints to use to get information on projects and how to add, read and update contributions.</p>
    </li>
</ul>
