---
title: Logging on to rgOne
description: How to log on to rgOne 
keywords:
    - admin
    - log
    - admin
---

## Overview

For a Docker Swarm installation, every instance of rgOne has a unique URL:

    user/app admin: https://server:8983/#/Login
    system admin: https://server:8993/#/Login

`/#/Login` is the server path to the login page, and is optional. If not provided, the browser will redirect you to your instance server path after logging on.

The person that installs rgOne will provide you with URLs and username/password pairs for user/app admins and system admins. See [installation and configuration](deploying-rgone-on-single-linux-vm) for this procedure, as well as the default installation username/password pairs.

**Note:** rgOne is initially configured with two users: an app admin and a system admin. To [add a general user account](adding-a-user-account), you must do so as an [app admin](user-types#app-admin).

## To log on to rgOne

1. Enter the appropriate user URL into your browser. The Redpoint sign-in page is displayed.
    ![rgOne log in page](/img/log-in-page.png "rgOne log in page")
    - Use the user/app admin URL if logging on for the first time or if you are logging on as a regular user.
    - If you are logging on as a system admin, use the system admin URL.
2. Enter your username and password.
    - If you select **Remember me**, the **Username** box will be auto-populated with your username when you log on in the future.
    - If you click **Forgot password?**, a dialog is displayed that allows you to enter your email address so that your password will be reset, and you will be sent a new temporary password. Once you receive your new temporary password, we recommend that you immediately change it.
3. Click **Sign In**.
4. After logging on, the rgOne dashboard page is displayed.
    ![rgOne dashboard with added widgets](/img/rgone-dashboard-with-defined-widgets.png "rgOne dashboard with added widgets")