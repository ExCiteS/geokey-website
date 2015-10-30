---
layout: tutorial
title:  "Register your app"
---

GeoKey uses OAuth to authenticate users via the API. To use GeoKey's API with your app, you need to register the app with GeoKey first.

This guide explains how to can register an app.

1. To register your new application, head to the application section by clicking on _Your applications_ on top of the page.

    ![Click “Your applications”](img/register-your-app-01.png)

2. Then click on “Register a new application”; you will be redirected to a form to register a new app.

3. Fill in the following fields:
    - **Name:** The name of your app.
    - **Description:** Here you can provide a meaningful description with details about the app your registering.
    - **Download / welcome page URL:** A website where users will find more information about your app or where they can download the app.
    - **Redirect URL:** Provide a link to a page the client will be redirected to after a user authorises your app. It should be the page that evaluates and stores the OAuth token.

4. Click _Save_ to register the application.

After saving your app, you will be redirected to the app’s settings page. Here you can find the app’s client ID and client secret on the left hand side. You will need both tokens to [obtain a user token](getting-started-with-oauth.html) for your application.

![Obtain client ID and secret](img/register-your-app-02.png)

<div class="info-box alert alert-info">
    <i class="fa fa-info-circle"></i>
    <div>
        <ul class="tutorial-links">
            <li>
                <h3><a href="getting-started-with-oauth.html">Gettings started with OAuth</a></h3>
                <p>Learn how to obtain OAuth tokens and how to sign your request to authenticate and authorise users.</p>
            </li>
            <li>
                <h3><a href="/docs/">Read the API docs</a></h3>
                <p>Find out which API endpoints to use to get information on projects and how to add, read and update contributions.</p>
            </li>
        </ul>
    </div>
</div>
