---
title: Automation run settings
description: A deep-diving discussion on the project configuration page Automation Run Settings section
keywords:
    - project
    - configuration
    - options
    - automation
    - settings
    - run
---

![Configure Automation Run Settings page](/img/classification-configure-automation-settings-page.png "Configure Automation Run Settings page")

This page allows you to automate project training. Instead of triggering a project training manually, you can configure any project to automatically retrain according to the parameters you set on this page.

If you want to automate this project's training, select **Automate Runs** and set the training **frequency**, **start time**, and **day**.

**Note:**

You cannot change any of the settings on this page until you first select **Automate Runs**.

Select **Check if file updated** if you want to check whether the data file has been updated since the last training. If this option is selected, the project will retrain at the specified time only if the data file has been updated.

If you want to publish the highest-scoring solution only if it is better than the previous high-scoring solution, select **Publish if fitness score is better**. Alternately, you can **Always publish** the highest-scoring solution at the end of every training.

## Automation Connection

This section allows you to add a predefined Data Connection, or displays the Data Connection already attached to the project. See [Creating a Data Connection](creating-a-data-connection) and [Automating file uploads via a Data Connection](automating-file-uploads-via-a-data-connection) for instructions.

Note that for Product Recommender projects, you can add two Data Connections (one for product data, another for customer data).

![Product Recommender project Configure Automation Run Settings page](/img/configure-automation-run-settings-page-PR.png "Product Recommender project Configure Automation Run Settings page")