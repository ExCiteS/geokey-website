---
layout: tutorial
title:  "Getting started with OAuth"
---

OAuth is an open standard to authorise third-party applications to access information in GeoKey. OAuth employs exchanging randomly generated access tokens to identify and authorise users instead of exposing user name and password. To authenticate users, client applications have to sign requests to the API with the access token obtained.

In order to obtain OAuth tokens with your client application, you need to [register your application](/help/register-your-app.html) before getting started. Each registered application is assigned a unique Client ID and Client Secret.

### OAuth Grant Types

GeoKey supports three OAuth grant types to obtain a token; it depends on the type of your application which grant type you should choose.

- **Implicit:** Used for applications that run on the user's device, such as mobile phone apps or web sites.
- **Authorization Code:** Used with server-side applications.
- **Password:** Typically only used with trusted applications, such as apps owned by the service itself.

The following sections explain the OAuth flows for these three grant types.

### Implicit Flow

1. The user of your application needs to authorise your application to make requests on their behalf. In order to get the authorisation, redirect the browser to the authorisation page.

    ````
    GET /oauth2/authorize/
    ````

    ##### Parameters

    Name            | Type     | Description
    ----------------|----------|-----------------------------------
    `client_id`     | `string` | **Required.** The Client ID that has been issued when you registered your application.
    `redirect_uri`  | `string` | **Required.** The URL the user is being redirected to after authorisation.
    `response_type` | `string` | **Required.** Must be `token`


2. If the user authorises the application, GeoKey redirects back to your site with a URL fragment that contains the access token:

    ```
    http://example.com/#token=ACCESS_TOKEN
    ```

    You can extract the token from the URL and [sign your calls](#sign-the-request-to-the-api) with that token.

### Authorization Code Flow

1. The user of your application needs to authorise your application to make requests on their behalf. In order to get the authorisation, redirect the browser to the authorisation page.

    ````
    GET /oauth2/authorize/
    ````

    ##### Parameters

    Name            | Type     | Description
    ----------------|----------|-----------------------------------
    `client_id`     | `string` | **Required.** The Client ID that has been issued when you registered your application.
    `redirect_uri`  | `string` | **Required.** The URL the user is being redirected to after authorisation.
    `response_type` | `string` | **Required.** Must be `code`.

2. If the user authorises the application GeoKey redirects back to your site with a temporary token in the `code` parameter.

    ```
    http://example.com/#code=TEMP_TOKEN
    ```

3. Use the temporary token to request the actual access token from GeoKey.

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

The following response contains the OAuth token to [sign API requests](#sign-the-request-to-the-api).

{% highlight json %}
{
    "access_token": "iohdiu89YXHSusa9diushd89AYKDHdskfj8B8hd7",
    "token_type": "Bearer",
    "expires_in": 2591999,
    "scope": "read"
}
{% endhighlight %}

### Password grant

The user enters their username and password in a form provided in your application. Your application then posts the information to the OAuth server.

````
POST /oauth2/token/
````

#### Parameters

Name            | Type     | Description
----------------|----------|-----------------------------------
`client_id`     | `string` | **Required.** The Client ID that has been issued when you registered your application.
`grant_type`    | `string` | **Required.** Must be `password`
`username`      | `string` | **Required.** The user's user name.
`password`      | `string` | **Required.** The user's password.

The following response contains the OAuth token to [sign API requests](#sign-the-request-to-the-api).

{% highlight json %}
{
    "access_token": "iohdiu89YXHSusa9diushd89AYKDHdskfj8B8hd7",
    "token_type": "Bearer",
    "expires_in": 36000,
    "refresh_token": "67hEirrE1NVg7FjVH35HOPHWpSY7nP",
    "scope": "read write"
}
{% endhighlight %}


### Sign the request to the API

Using the access token your application can make requests to GeoKey on behalf of the user.

Sign the request by setting the `Authorization` header in the request.

```
Authorization: Bearer iohdiu89YXHSusa9diushd89AYKDHdskfj8B8hd7
```

<div class="info-box alert alert-info"><i class="fa fa-info-circle"></i><div><ul class="tutorial-links"><li><h3><a href="register-your-app.html">Register your app</a></h3><p>Before you can use our API you need to register your app.</p></li><li><h3><a href="/docs/">Read the API docs</a></h3><p>Find out which API endpoints to use to get information on projects and how to add, read and update contributions.</p></li></ul></div></div></div>
