---
title: Training a project
description: Explains how to train a project
keywords:
    - project
    - train
    - training
---

At this point all of the project sections have valid settings, and the project status indicator at the top of the **Project Configuration** page displays the message `Valid`. This means the project is ready to train.

At the top of the **Project Configuration** page, click **Start Training**.
    ![Project Configuration page, Start Training button](/img/classification-configure-project-page-start-training-button.png "Project Configuration page, Start Training button")

When you start training a project, the **Project Manager** page is displayed.

While your project sits in the training queue, the displayed status is `In Queue`.

![Project status In Queue](/img/project-section-status-in-queue.png "Project status In Queue")

**Note:** Click the **Project Manager** page **Refresh** button to query the database for any state changes (using the current dashboard filters). It is especially useful when periodically checking the progress of projects in training. We recommend that you use the dashboard **Refresh** button because this updates the dashboard much faster than refreshing the entire page using the browser refresh button.

When your project moves to the head of the training queue, the displayed status is `Training`.

![Project status Training](/img/project-section-status-in-training.png "Project status Training")

When your project has finished training, the displayed status is `Completed`.

![Project status Completed](/img/project-section-status-completed.png "Project status Completed")

If there is an error encountered during training, the displayed status is `Error`.

![Project status Error](/img/project-section-status-error.png "Project status Error")

If you stop project training before completion, the displayed status is `Canceled`.

![Project status Canceled](/img/project-section-status-canceled-grey-bar.png "Project status Canceled")

After training a project, you can always return to the **Project Configuration** page and view or change the project's settings.