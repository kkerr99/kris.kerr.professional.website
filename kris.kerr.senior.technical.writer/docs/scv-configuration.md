---
title: SCV Configuration
---
## Overview
![Example SCV dashboard](/img/scv-dashboard-example.png "Example SCV dashboard")

SCV is implemented as a single [widget dashboard](widget-dashboard-guide-overview.md) that is constrained to display only customer data (in the form of a customer profile). This page must be defined by a user with SCV administrator privileges. This user also configures the dashboard-associated data source selection page, the customer search page, and the customer search results page.

Although other rgOne widget dashboards use a collection of general widgets, the SCV dashboard uses only SCV-specific widgets (such as the Data Callout widget).

The following sections take you through the process of creating and publishing an SCV dashboard.

## Configure RPI to connect and expose SQL DB information

Before you can stream customer data into widgets, you must first configure RPI to connect and expose the SQL DBs that contain the data. This procedure is documented [here](https://redpoint.atlassian.net/wiki/spaces/DCC/pages/1167655160/How+To+Configure+RPI+for+Mercury+Deployment#Synchronize-the-database-Catalog).

## Select a data source and customer ID

1. Log on to rgOne.
2. On the left vertical navigation bar, click on the **SCV** icon. The **SCV Configuration** icon is displayed.
3. Click the **SCV Configuration** icon. The **SCV Configuration** page (**Data Source** tab) is displayed. ![SCV Configuration page, Data Source tab](/img/scv-configuration-page-data-source-tab.png "SCV Configuration page, Data Source tab")
4. Select a **Data Source** and a **Test Customer ID**.
    - The **Customer Unique ID** field holds a unique ID value for every customer in the data source. Every data source has the same field name `individual_id`, so you cannot change this value (it is displayed for informational purposes only).
    - The **Test Customer ID** value identifies a unique customer.
    - These fields will be given to all widgets added to the SCV dashboard for testing purposes. <font color="red">@@Retake screenshot when "setup" changed to "set up"@@</font>

## Configure search and search results pages

At this point you configure the dashboard customer search experience. You configure what customer fields are displayed on both the customer search and customer search results pages (the two pages can display different fields).

1. On the **SCV Configuration** page, click the **Search Setup** tab. The **Search and Results Configuration** page, **Search Configuration** tab is displayed.
![SCV Configuration page, Search Setup tab, Search and Results Configuration page, Search Configuration tab](/img/scv-configuration-page-search-setup-tab-search-and-results-configuration-page-search-configuration-tab.png "SCV Configuration page, Search Setup tab, Search and Results Configuration page, Search Configuration tab")
2. Define search columns on the **Search Configuration** page.
    - The **Search Configuration** tab has a number of search fields defined by default. Each search field corresponds to a search column on the Search page.
    1. To add another search column to the Search page, click **Add a search field**.
    2. To edit an added search field box:
        1. Hover the cursor over the box and click the menu icon.
            ![Search Configuration tab, search field menu](/img/search-configuration-search-field-popup-menu.png "Search Configuration tab, search field menu")
        2. On the popup menu, select **Edit Field**.
        3. You can enter a **name**, select a **field**, and select a **field type**.
            ![Search Configuration tab, search field menu, Edit field](/img/search-configuration-search-field-popup-menu-edit-field.png "Search Configuration tab, search field menu, Edit field")
        4. Click **Save**.
    3. To delete an added search field box:
        1. Hover the cursor over the box and click the menu icon.
        2. On the popup menu, select **Delete**.
    4. If all of the search fields are valid, the status **Configuration Valid** is displayed at the top right of the **Search and Results Configuration** page.
3. When you are finished configuring search fields, you can go to the next step if the page status is **Configuration Valid**.
4. Click the **Results Configuration** tab.
<font color="red">@@end of up-to-date-content@@</font>

4. Define columns and groups on the search page the same way as you did for the search results page. Here is an example of a rendered search page: ![Rendered search page](/img/scv-search-page.png "Rendered search page")

## Set up the Customer Profile dashboard

1. On the **SCV Configuration** page, click the **Customer Profile** tab. The **Customer Profile Dashboard Setup** page is displayed. ![SCV Configuration page, Customer Profile tab](/img/scv-configuration-page-customer-profile-tab.png "SCV Configuration page, Customer Profile tab")
2. Enter a specific customer's ID value in the text box at the top left of the page and click the right-arrow icon. This customer's data is used to populate the dashboard widgets for testing purposes.
3. Click **Add First Widget** or the **Add Widget** icon at the top-right of the page. The **Add Widget** dialog appears.
4. Click the **Add** button for the associated widget you want to add to the dashboard. **Note:** the [Data Callout widget](data-callout-widget.md) is the only widget allowed to be added to the SCV dashboard.
5. On the widget **Configuration** popup dialog, enter appropriate configuration values and select appropriate options.
6. Click **OK**.
7. The widget is added to the dashboard. After adding one widget, the **Publish** icon at the top right of the screen is enabled. ![SCV dashboard with one widget](/img/scv-configuration-page-customer-profile-tab-one-widget-added.png "SCV dashboard with one widget")
8. You can continue to add and configure widgets to the dashboard by clicking the **Add Widget** icon
9. When you are done adding widgets to the dashboard, click **Publish**. Here is an example of an SCV dashboard with multiple widgets: ![SCV dashboard with one multiple widgets](/img/scv-dashboard-example.png "SCV dashboard with one multiple widgets")