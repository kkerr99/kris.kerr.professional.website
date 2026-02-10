---
title: Choosing output features
description: Explains how to choose output features
keywords:
    - output
    - feature
    - features
---

## To choose output feature(s)

**Note:** Regression models are supervised, which means they require the user to specify an output "truth" feature.

1. On the Project Configuration page's **Inputs/Outputs** section, click the **Get Started** link. The **Set Inputs/Outputs** page is displayed.
    ![Project Configuration page's Inputs/Outputs section, Get Started link](/img/configure-project-page-input-output-section-get-started.png "Project Configuration page's Inputs/Outputs section, Get Started link")
2. Click the **Outputs** tab.
    ![Set Inputs/Outputs section, Outputs tab](/img/inputs-outputs-section-set-inputs-page-outputs-tab.png "Set Inputs/Outputs section, Outputs tab")
3. Click **Manage Columns**. A table of the file's columns is displayed. Click the radio button or checkbox next to the column(s) you want to designate as output features.
    ![A table of the file's columns is displayed](/img/inputs-outputs-section-set-inputs-page-outputs-selected.png "A table of the file's columns is displayed")
    While selecting column(s), you can hover over a column menu on the right side of the table and select **Column Summary**, which displays a dialog of statistics about that column.

    ![Column menu, Column Summary option](/img/column-summary-option.png "Column menu, Column Summary option")
    
    ![Column Summary dialog](/img/column-summary-dialog.png "Column Summary dialog")
    
    **Note:** If a model can have only one output field, the UI enforces this by allowing selection via a radio button (which allows only one column of many to be selected). For model types that can have zero or more outputs, the UI allows the fields to be selected via toggles (none, one, or many columns can be selected).
4. Click **Done**. The newly-selected output column is displayed, along with additional information.
    ![Newly-selected output column](/img/inputs-outputs-section-set-inputs-page-output-selected-displayed-in-table.png "Newly-selected output column")