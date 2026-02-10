---
title: Adding user roles and user accounts
description: Explains how to add rgOne user roles and user accounts 
keywords:
    - admin
    - role
    - account
---

The rgOne installation process does not create general users or create preconfigured user roles. If you are logging on to an rgOne app for the first time as an app admin, you will need to:

- Create user roles
- Create new user accounts (and in the process, assign roles to each new user account)

For each rgOne app to which you have access, you will need to:

- Create roles for that app.
- Create a user account for every person to be given access to that app.
    - A normal user should be a given a general user account.
    - App admin and system admin accounts must be created through the API (one admin account with the default username `admin` is created during the installation process, and is given both app admin and system admin permissions).

For example, if a person is to be given access to both AML and Campaign Creation, you would:

- Create a general user account for that person in AML, and assign roles in AML to that user account.
- Create a general user account for that person in Campaign Creation, and assign roles in Campaign Creation to that user account.