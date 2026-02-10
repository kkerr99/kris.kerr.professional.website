---
title: File upload methods
description: Explains the ways in which files can be uploaded to AML
keywords:
    - file
    - File Manager
---

## Uploading files to AML via the File Manager

The File Manager is located on the **Data Manager** page's **File Manager** tab.

You can manually upload a file once using the File Manager. If you want to upload a modified version of the file, you must repeat the process and upload a new file.

You can think of uploading a file through the File Manager as a static process. If you don't think the file contents will change over time, this is a convenient method to use.

## Uploading files to AML via the Connection Manager (creating a Data Connection)

The Connection Manager is located on the **Data Manager** page's **Connections** tab.

Instead of uploading a file once through the File Manager, you can define a Data Connection that can upload it automatically and replace the existing file.

A Data Connection stores the file location, the credentials, and the connection information necessary to access the file. Data Connections can be of the following types:
- FTP
- SQL

You can manually initiate a file upload using the Data Connection, or you can automate the process so that a file is uploaded at a set interval.

**Note:**

A Data Connection allows you to upload a file that has previously been placed in a specific location. For example, if you want to create a Data Connection to a file on an FTP site, that file must already be copied to a specific folder on the FTP server.

You must link AML with a DM instance during the AML installation in order to enable DM-based Data Connections. See [Deploying rgOne on a single Linux VM](deploying-rgone-on-single-linux-vm) for instructions.

## Uploading files to AML via DM automations

You can load data files directly to the AML environment via DM automations. The following links provide example DM automations that upload data into AML. There are other DM automation scripts provided in the ZIP file that support additional integrations with rgOne (see the included README files for more details).
- https://cdn.redpointglobal.com/aml/rpdm_examples_for_mercury-v6.2.0.1.zip
- https://cdn.redpointglobal.com/aml/rpdm_examples_for_mercury-v6.2.0.1.tgz