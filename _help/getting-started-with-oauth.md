---
layout: tutorial
title:  "Getting started with OAuth"
---

OAuth is an open standard to authorise third-party applications to access information in [the platform]. OAuth is an open protocol that employs exchanging randomly generated access tokens to identify and authorise users instead of exposing user name and passwords. To authenticate users, client applications have to simply sign the requests to the API with the exchange token obtained beforehand.

In order to obtain OAuth tokens with your client application, you need to register your application before getting started. Each registered application is assigned a unique Client ID and Client Secret.

### Web Application Flow

#### Redirect the browser to request authorisation from the user

The user using your application needs to authorise your application to make requests on their behalf. In order to get the authorisation, redirect the browser to the authorisation page.

{% highlight http %}
GET http://[your_host]/oauth2/authorize/
{% endhighlight %}

##### Parameters

Name            | Type     | Description
----------------|----------|-----------------------------------
`client_id`     | `string` | **Required** The Client ID that has been issued when you registered your application.
`redirect_url`  | `string` | **Required** The URL the user is being redirected to after authorisation.
`response_type` | `string` | **Required** Must be `token`

### Community Maps redirects back to your site

If the user authorises the application Community Maps redirects back to your site with a temporary token in the `code` parameter. Use the temporary token to request the actual access token from Community Maps. 

{% highlight http %}
POST http://[your_host]/oauth2/access_token
{% endhighlight %}

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

Using the access token your application can make requests to Community Maps on behalf of the user.

Sign the request by setting the `Authorization` header in the request.

{% highlight http %}
Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
{% endhighlight %}