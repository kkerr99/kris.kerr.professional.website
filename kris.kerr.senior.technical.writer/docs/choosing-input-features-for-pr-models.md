---
title: Choosing input feature(s) for PR models
description: Explains how to choose input feature(s) for PR models
keywords:
    - input
    - feature
    - features
    - PR
---

## To choose input feature(s) for PR models

The process for choosing input feature(s) for PR models is a bit different than for other model types. Specifically, for PR models, you need to set the `Product ID` and `Customer ID` fields, and at least one product and one customer field.

1. On the **Set Inputs** page, the **Product/Offer Data** tab is selected by default.
    ![On the Set Inputs page, the Product/Offer Data tab is selected by default](/img/PR-set-inputs-page.png "On the Set Inputs page, the Product/Offer Data tab is selected by default")
    Select the column in which the product ID is stored by clicking the **Product ID** dropdown menu and selecting the appropriate column.
2. One of the columns may contain product rank values (the product rank is optional). These are product ranking values used when there is no customer information available for the model. That is, if the model has no information about this customer, products/offers are suggested in order of this ranking, rather than by random choice.

    All the other columns contain preference data, so we want to include the product rank column and all the preference data columns.

    Click **Manage Columns**. A table showing all the file columns is displayed:
    ![Table showing all the file columns](/img/PR-set-inputs-page-manage-columns-table.png "Table showing all the file columns")

    Notice that in this case, the **PROD_ID** column is greyed out (non-selectable). Since we have already designated that column as our product ID field, we cannot also add it as regular product information.

    Select each column we want to include as product information:
    ![Select each column we want to include as product information](/img/PR-set-inputs-page-manage-columns-table-columns-selected.png "Select each column we want to include as product information")

    Click **Done**.
3. The **Product/Offer Data** table changes a bit:
    ![The Product/Offer Data table changes a bit](/img/PR-set-inputs-page-manage-columns-table-columns-saved.png "The Product/Offer Data table changes a bit")

    Each column has a weight value assigned to it. The weight value (which can range from 1 to 10) determines the weight of a column when calculating product recommendations. Assigning higher weights to keywords and attributes prioritizes certain criteria (such as latest purchase, most often purchased product, and highest ranking survey response). You can change a column weight by clicking the column’s weight value and moving the popup slider.
4. Click the **Customer History/Preference** tab.
    ![Click the Customer History/Preference tab](/img/PR-set-inputs-page-customer-history-preference-tab.png "Click the Customer History/Preference tab")
5. We need to figure out which column stores the customer ID value, so view the customer history/preference file’s contents by clicking the center of the **Inputs/Data** switch (so that the switch is halfway between **Inputs** and **Data**).
    ![Click the center of the Inputs/Data switch so that it is halfway between Inputs and Data](/img/PR-set-inputs-page-customer-history-preference-tab-data-switch.png "Click the center of the Inputs/Data switch so that it is halfway between Inputs and Data")
6. In this case, we see that the customer ID value is stored in the `CUSTOMER_CODE` column, so you would click the **Customer ID** menu and select **CUSTOMER_CODE**.
7. Click **Manage Columns**. All the columns (except `CUSTOMER_CODE`) are customer purchase history or customer preference, so we want to include all the columns as model input (except for `CUSTOMER_CODE`, which is unselectable) and click **Done**.
8. All of our file inputs have been added.
    ![All of our file inputs have been added](/img/PR-set-inputs-page-inputs-added.png "All of our file inputs have been added")
9. Click **Save**, then click **Back**.
10. On the **Project Configuration** page, the **Inputs** section displays the selected product and customer attributes.
    ![The Inputs section displays the selected product and customer attributes](/img/PR-configure-project-page-inputs-section-inputs-selected.png "The Inputs section displays the selected product and customer attributes")

    The section indicator light is now green, which means the section settings are valid.

**Note:** When you create a new PR project, you are required to change the settings only in the **Project Configuration** page **Data File**, **Customer Data File**, and **Inputs** sections. The settings in the other sections are optional. For an explanation of the settings in the optional sections, see [Project settings and UI overview](project-settings-and-ui-overview).
