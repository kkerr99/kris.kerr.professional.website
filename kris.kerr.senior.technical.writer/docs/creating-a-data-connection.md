---
title: Creating a Data Connection
description: Explains create a Data Connection
keywords:
    - data
    - connection
---

To enable Data Connection functionality, see [Deploying rgOne on a single Linux VM](deploying-rgone-on-single-linux-vm) for instructions.

1. Navigate to the **Data Manager** page.
2. Click the **Connections** tab.
3. Click the **New Connection** link.
    ![Connection Manager, New Connection link](/img/connection-manager-new-connection.png "Connection Manager, New Connection link")
4. On the **Choose New Connection** dialog, click a connection method (**FTP** or **SQL**) and click **Next**.
    ![Choose New Connection dialog](/img/connection-manager-choose-new-connection-dialog.png "Choose New Connection dialog")
5. If creating an FTP Data Connection:
    - Select a **File Type** (every data file attached to a project must be associated with a file type). See [Data set types used by AML](data-set-types-used-by-aml) for more information.
    - Enter a **Connection Name**.
    - Enter the file's **Connection Information** and **Authentication Information**.
    ![Configure FTP Connection dialog](/img/connection-manager-configure-ftp-connection-dialog.png "Configure FTP Connection dialog")
    If creating a SQL Data Connection:
    - Instead of selecting a **Protocol** and **File Path**, enter a **Database Name** and a **View Name**.
    ![Configure SQL Connection dialog](/img/connection-manager-configure-sql-connection-dialog.png "Configure SQL Connection dialog")
6. Before moving off of the dialog you can make sure the file information is valid by clicking **Test Connection**. If the connection information is valid, a green check mark is displayed:
    ![Test connection valid status](/img/configure-data-connection-dialog-test-connection-link-check-mark.png "Test connection valid status")
7. The newly-created Data Connection is added to the list.
    ![Connection Manager, the newly-created Data Connection is added to the list](/img/connection-manager-data-connection-added.png "Connection Manager, the newly-created Data Connection is added to the list")