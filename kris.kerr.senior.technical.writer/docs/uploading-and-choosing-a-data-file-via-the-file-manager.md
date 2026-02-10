---
title: Uploading and choosing a data file via the File Manager
description: Explains how to upload and choose a data file via the File Manager
keywords:
    - file
    - manager
---

## To upload and choose a data file via the File Manager

**Note:** Some project types may use more than one data file. See [Data set types used by AML](data-set-types-used-by-aml) for more information.

1. On the **Project Configuration** page, In the **Data File** section, click the **Get Started link**. The File Manager is displayed.
    ![Project Configuration page, Data File section, Get Started link](/img/classification-configure-project-page-data-file-section.png "Project Configuration page, Data File section, Get Started link")
2. Click the **Upload Files** link.
    The file type you can upload is determined by the type of project you are creating. See [Data set types used by AML](data-set-types-used-by-aml) for more information.
    ![File Manager, Upload Files link](/img/file-manager-upload-generic-training-files.png "File Manager, Upload Files link")
3. Browse for the file on the file selection dialog.
    Once a data file is uploaded, AML:
    - Automatically determines the data schema.
    - Profiles the data to gather statistics about the internal content.
    - Finds missing data elements.
    - Looks for any problems that might affect the modeling process.
4. In the File Manager, the newly-uploaded file is displayed in the file list. Click the file radio button to select this file as your input data file.
    ![The newly-uploaded file is displayed in the File Manager's file list](/img/classification-data-file-page-file-selected.png "The newly-uploaded file is displayed in the File Manager's file list")
5. At the top right of the page, click **Save** to save your file choice.
6. At the top left of the page, click **Back**.
7. On the **Project Configuration** page, the **Data File** section now displays the file you just uploaded and selected. If the section indicator light is green, the selected data file(s) are valid.
    ![The Project Configuration page's Data File section now displays the file you just uploaded and selected](/img/classification-configure-project-page-data-file-section-file-selected.png "The Project Configuration page's Data File section now displays the file you just uploaded and selected")