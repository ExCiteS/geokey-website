---
layout: tutorial
title:  "Getting started with OAuth"
---

OAuth is an open standard to authorise third-party applications to access information in GeoKey. OAuth is an open protocol that employs exchanging randomly generated access tokens to identify and authorise users instead of exposing user name and passwords. To authenticate users, client applications have to simply sign the requests to the API with the exchange token obtained beforehand.

In order to obtain OAuth tokens with your client application, you need to register your application before getting started. Each registered application is assigned a unique Client ID and Client Secret.

### Web Application Flow

#### Redirect the browser to request authorisation from the user

The user using your application needs to authorise your application to make requests on their behalf. In order to get the authorisation, redirect the browser to the authorisation page.

````
GET /oauth2/authorize/
````

##### Parameters

Name            | Type     | Description
----------------|----------|-----------------------------------
`client_id`     | `string` | **Required** The Client ID that has been issued when you registered your application.
`redirect_url`  | `string` | **Required** The URL the user is being redirected to after authorisation.
`response_type` | `string` | **Required** Must be `token`

### GeoKey redirects back to your site

If the user authorises the application, GeoKey redirects back to your site with a temporary token in the `code` parameter. Use the temporary token to request the actual access token from GeoKey.

````
POST /oauth2/token/
````

#### Parameters

Name              | Type     | Description
------------------|----------|-----------------------------------
`grant_type`      | `string` | Must be `authorization_code`
`code`            | `string` | **Required.** The temporary `code` that has been sent to the client in the previous step.
`redirect_uri`    | `string` | **Required.** The URL in your app where the users are redirected to after authorisation.
`client_id`       | `string` | **Required.** The Client ID that has been issued when you registered your application.
`client_secret`   | `string` | **Required.** The Client Secret that has been issued when you registered your application.

#### Example response

{% highlight json %}
{
    "access_token": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "token_type": "Bearer",
    "expires_in": 2591999,
    "scope": "read"
}
{% endhighlight %}


### Sign the request to the API

Using the access token your application can make requests to GeoKey on behalf of the user.

Sign the request by setting the `Authorization` header in the request.

```
Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

<div class="info-box alert alert-info"><i class="fa fa-info-circle"></i><div><ul class="tutorial-links"><li><h6><a href="register-your-app.html">Register your app</a></h6><p>Before you can use our API you need to register your app.</p></li><li><h6><a href="/docs/">Read the API docs</a></h6><p>Find out which API endpoints to use to get information on projects and how to add, read and update contributions.</p></li></ul></div></div></div>
