---
title: Attaching a file uploaded by a Data Connection to a project
description: Explains how to attach a file uploaded by a Data Connection to a project
keywords:
    - data
    - connection
---

## To attach a file uploaded by a Data Connection to a project

1. On the **Project Configuration** page, In the **Data File** section, click the **Get Started** link. The File Manager is displayed.
    ![Project Configuration page, Data File section, Get Started link](/img/classification-configure-project-page-data-file-section.png "Project Configuration page, Data File section, Get Started link")
2. The files published by previously-created Data Connections are displayed in the file list (they have a **Type** value of `FTP` or `SQL`), and you can click a file's radio button to select it as your input data file. 
    
    Note that the files displayed are restricted to the type that can be attached to the project type. See [Data set types used by AML](data-set-types-used-by-aml) for more information.
    ![Files published by previously-created Data Connections are displayed in the file list](/img/file-manager-data-connection-files.png "Files published by previously-created Data Connections are displayed in the file list")
    You can display information about a file's associated Data Connection by clicking the **Type** field (which displays either the value `FTP` or `SQL`):
    ![You can display information about a file's associated Data Connection by clicking the Type field](/img/file-manager-file-data-type-expanded.png "You can display information about a file's associated Data Connection by clicking the Type field")
3. At the top right of the page, click **Save** to save your file choice.
4. At the top left of the page, click **Back**.
5. On the **Project Configuration** page, the **Data File** section now displays the Data Connection file you just selected. If the section indicator light is green, the selected data file(s) are valid.
    ![The Project Configuration page's Data File section now displays the Data Connection file you just selected](/img/classification-configure-project-page-data-file-section-file-selected.png "The Project Configuration page's Data File section now displays the Data Connection file you just selected")