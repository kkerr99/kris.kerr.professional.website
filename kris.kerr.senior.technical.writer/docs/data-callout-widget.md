---
title: Data Callout widget
description: Describes the Data Callout widget

---

**Note:** This widget is used only on the SCV dashboard.

Use the Data Callout widget to filter user records from one or more data sources and display record field values (in the form of a single customer profile). The Data Callout widget gives you a wide latitude in how the field data is arranged and rendered.

## Data Callout widget selection dialog

![Data Callout widget selection dialog](/img/data-callout-widget-selection-dialog.png "Data Callout widget selection dialog")

## Data Callout widget configuration dialog (Data Sources tab)

![Data Callout widget Configuration dialog (Data Sources tab)](/img/data-callout-widget-configuration-dialog-data-sources-tab.png "Data Callout widget Configuration dialog (Data Sources tab)")

<font color="red">@@This tab will be heavily reworked, or dropped altogether@@</font>

### Test Mode

If **Test Mode** is selected, test data is used to render the widget.

If **Test Mode** is not selected, code from the selected data source(s) is used to render the widget.

## Data Callout widget configuration dialog (Field Configuration tab)

![Data Callout widget Configuration dialog (Field Configuration tab, add field or group)](/img/data-callout-widget-configuration-dialog-field-configuration-tab-add-field-add-group.png "Data Callout widget Configuration dialog (Field Configuration tab, add field or group)")

![Data Callout widget Configuration dialog (Field Configuration tab, fields and groups)](/img/data-callout-widget-configuration-dialog-field-configuration-tab.png "Data Callout widget Configuration dialog (Field Configuration tab, fields and groups)")

This tab lets you select data source fields to be displayed on the widget. It also gives you options for how you want to display each field.

### Add Field

Click **Add Field** to add a field that stands by itself.

### Add Group

Click **Add Group** to add a field group. The fields in a group are displayed in close proximity to each other. By default, a group contains a label and one field. You can add additional fields by clicking the **Add Field** link inside the group.

You can delete a standalone field or a field inside the group by clicking the menu on the right side of a field and selecting **Remove**. If you remove a group label, the entire group is removed.

### Field options

A field has a number of display options. An option is either a pulldown menu selection or text entered in a box.

**Note**--An automatically-generated **Title** field in a group offers only a **Title** box and a **Text width constraint** field.

**Text width constraint**--Is the displayed value allowed to extend the **Full Width** of the widget, or is it constrained to be **Inline** with the other group values?

**Font size**--The value's rendered font size.

**Data Source**--Choose a specific data source field to display.

**Label** or **Icon**--Choose whether a field has an associated **Label** or **Icon** (you can also select **No Label**). If **Label** is selected, an additional **Label** field is provided. If **Icon** is selected, an additional **Icon** field is provided. Clicking on an **Icon** field displays a popup of icons that you can select.

## Data Callout widget rendering

Here are some examples of rendered Data Callout widgets:

![Data Callout widget examples](/img/data-callout-widget-examples.png "Data Callout widget examples")

This is how the fields are defined for the **Address/phone number/email** Data Callout widget:

![Address/phone number/email widget fields](/img/address-phone-number-email-fields.png "Address/phone number/email widget fields")

This is how the fields are defined for the **Data Callout** Data Callout widget:

![Data Callout widget fields](/img/data-callout-widget-fields.png "Data Callout widget fields")