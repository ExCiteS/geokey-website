---
layout: internal-docs
title:  "User"
---

A registered user.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies the user in the data base.
`email`                  | Email                    | User's email address. Must be unique.
`display_name`           | string                   | User's display name. Must be unique.
`is_active`              | boolean                  | Indicates if the user is active.
`is_superuser`           | boolean                  | Indicates if the user is super user.

### Methods

#### `reset_password(password)`

Resets the user's password.

##### Parameters

<dl class="parameters">
    <dt>password: <span class="type">string</span></dt>
        <dd>The new password.</dd>
</dl>

### Creating a user instance

#### `create_user(email, display_name, password=None, is_active=True)`

Creates a user.

##### Parameters

<dl class="parameters">
    <dt>email: <span class="type">email</span></dt>
        <dd>User's email. Must be a valid email address.</dd>
    <dt>display_name: <span class="type">string</span></dt>
        <dd>User's display name.</dd>
    <dt>password: <span class="type">string</span></dt>
        <dd>User's password.</dd>
</dl>

##### Returns

<span class="type">User</span>

#### `create_superuser(email, display_name, password)`

Creates a super user.

##### Parameters

<dl class="parameters">
    <dt>email: <span class="type">email</span></dt>
        <dd>User's email. Must be a valid email address.</dd>
    <dt>display_name: <span class="type">string</span></dt>
        <dd>User's display name.</dd>
    <dt>password: <span class="type">string</span></dt>
        <dd>User's password.</dd>
</dl>

##### Returns

<span class="type">User</span>
