---
title: Adding an app admin account
description: How to add an app admin account
keywords:
    - API
    - admin
    - system
---

## Prerequisites

Before starting this procedure, deploy (successfully) all of the DCC containers.

## To add an app admin user account

1. Access DCC service APIs to configure user accounts with your local web browser.
    - Navigate to the rgOne API docs using a web browser:
        ```
        https://LINUX_HOSTNAME:8983/docs/index.html
        ```
        or
        ```
        http://LINUX_HOSTNAME:8980/docs/index.html
        ```
    - When you drill in to a specific API endpoint, a "Try Me" option (in which you can manually exercise the API) is displayed.
2. Log in to the rgOne app.
    - Log in as the user `system` and use the password `system`:
        ```    
        POST /api/v1/auth/signon-admin
            {
                "username": "system",
                "password": "system"
            }
        ```
3. Copy returned authorization token.
    An authorization token is returned. Copy this token for use in the next two endpoint calls.
4. Create a new user account.
    - Use the following JSON payload to create the user `testuser`.
    - Use the authorization token that was previously returned.
        ```
            POST /api/v1/auth/users
                {
                    "username": "testuser",
                    "password": "testuser!",
                    "email": "testuser@nomail.com",
                    "description": "",
                    "firstname": "Test",
                    "lastname": "User",
                    "authType": "Default"
                }
        ```
5. Assign the new user to a group.
    - Assign the user `testuser` as an app admin for the rgOne app.
    - The general call is:
        ```
        POST /api/v1/auth/clients/CLIENT_ID/apps/APP_NAME/add-admin/USER_NAME
        ```
    - For this step, use the following values:
        ```
        POST /api/v1/PREVIOUSLY_GRANTED_TOKEN/clients/dcc_client_id_global/apps/machine_learning/add-admin/testuser
        ```