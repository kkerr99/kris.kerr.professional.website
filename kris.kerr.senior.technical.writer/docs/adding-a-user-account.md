---
title: Adding a user account
description: Explains how to add an rgOne user account 
keywords:
    - admin
    - account
---

## Overview

You will probably want to give other people in your organization access to your rgOne apps, so you will need to create accounts for them. When creating a user account, you will also assign permissions to the user through assigning one or more predefined roles.

**Note:** Additional app admin and system admin users can be created only through the rgOne API. See [Adding app admin and system admin accounts](adding-app-admin-and-system-admin-accounts.md) for instructions.

## To add a user account

1. Log on to rgOne as an app admin.
2. On the left vertical navigation bar, click an rgOne app icon and click an app page. This action determines the selected app.
3. On the left vertical navigation bar, click the **User** icon:  
    ![Navigation bar User icon](/img/model-manager-page-user-icon.png "Navigation bar User icon")

    On the popup menu, select **User Management**.  
    ![User menu, User Management menu item](/img/user-menu-user-management.png "User menu, User Management menu item")

    The **User Management** page is displayed. If you have previously created user accounts, the users are listed on this page.
    ![User Management page](/img/aml-user-management-users-page.png "User Management page")
4. Click **Add User**. The **Add User** dialog is displayed.
    ![Add User dialog](/img/rgone-add-user-dialog.png "Add User dialog")
5. Select the **User RPI account information** box to add an app user account for one or more existing RPI users.
    1. The dialog displays a list of RPI users. You can search for existing RPI users by entering text in the **Find RPI User** search box.
    ![Add User dialog with search box](/img/rgone-add-user-dialog-with-search-box.png "Add User dialog with search box")
    2. Select one or more RPI users on the list.
    3. Click **Add User**. rgOne app accounts are created for the selected users. The new rgOne app accounts have the same usernames and passwords as the corresponding RPI accounts.
6. If you are not creating an app user account for one or more existing RPI users, enter the new user's:
    - **email** address
    - **first** name
    - **last** name
    - account **password**
7. Click **Add User**.
8. Select one or more previously-defined roles to assign to the user.
    ![Add User dialog select roles](/img/rgone-add-user-dialog-select-roles.png "Add User dialog select roles")
9. Click **Done**.