---
title: Feature actions
description: A deep-diving discussion on actions you can take while adding input and (possibly) output features to a project
keywords:
    - feature
    - action
    - actions
---

While adding input and (possibly) output features to a project, there are a number of actions you can take to view feature data, manipulate how feature data is interpreted, and delete a feature.

## View and change column enumerated type

**Note:** Changing an input feature's enumerated type is an advanced option. In most cases, AML automatically chooses enumerated types that do not need to be changed.

In order for AML to map a relationship between input and output values, these values must be numeric. For input values that are not numbers (for example, a text state abbreviation such as "AL" or "AK"), AML must convert these text values to enumerations.

To continue with the previous example, for state abbreviations "AL" could be assigned a value of 1, "AK"  a value of 2, "AZ" a value of 3, and so on. This is an example of *standard enumeration*.

Input features that use numeric values are not converted to enumerations, and the corresponding value in the **Enum** menu is **None**.

![Classification project input feature enumeration](/img/classification-input-feature-enumeration.png "Classification project input feature enumeration")

If you want to train using an input feature that uses data that may not be representative of the whole world of possible choices, you can choose the **Enum** menu value **Add Unmapped**.

For example, you might have a training data set that contains only the text values "apple", "banana", and "orange", but you know that "lemon" and "grapefruit" are also possible values. In this case, for this input feature you would choose the **Enum** menu value **Add Unmapped**. This setting allows for an optional *other* category (a place to hold something that was not seen in training).

Another use of enumeration is to control the weighting of values. For example, if a feature contains numbers of vastly different size and you want to give all the values equal weight, you would choose the **Enum** menu value **Standard**.

## View and change action taken when column data is missing

Sadly, it is not uncommon that data is missing from a data set. However, you can decide what action AML should take when it does find missing data.

If no data is missing from a data column, the **Missing Data Handler** value is greyed out, and hovering over the value displays the message "Data has no missing values".

![Classification project input feature message "data has no missing values"](/img/classification-input-feature-data-has-no-missing-values.png "Classification project input feature message "data has no missing values")

If a column does having missing values, you can change the value of the **Missing Data Handler** column (that is, you can change the action AML takes for missing data).

![Classification project input feature missing data handler column](/img/classification-input-feature-missing-data-handler.png "Classification project input feature missing data handler column")

The **Missing Data Handler** values are:

- **Use Mean**
- **Use Median**
- **Use Mode**
- **Skip Row**
- **Report Error**—If you select **Report Error** for a feature, when AML discovers that data is missing for that feature during project training, the project stops training and on the **Project Manager** page, the project's status bar turns red and displays the status **Error**.

    ![Project status Error](/img/project-section-status-error.png "Project status Error")

The default **Missing Data Handler** value is **Use Mean**.

## View statistical information about a column

When evaluating whether to include a table column in the project, you can view a summary of the column data.

1. At the right side of a column row, hover over the pulldown menu and select **Column Summary**.
    ![Classification project input feature Column Summary](/img/classification-input-feature-column-summary.png "Classification project input feature Column Summary")
2. A popup dialog of statistics about the column data is displayed.
   ![Classification project input feature Column Summary dialog](/img/classification-input-feature-column-summary-dialog.png "Classification project input feature Column Summary dialog")

## Delete a feature

After adding a feature to a project, you can later delete it if you change your mind.

At the right side of a column row, hover over the pulldown menu and select **Delete Column**.

![Classification project input feature Delete Column](/img/classification-input-feature-delete-column.png "Classification project input feature Delete Column")

## View sample data

Sometimes it's useful to look at the actual data in a data set you’re working with. For example, a data modeler may want to fine-tune which input or output columns to include in a project.

**Note:** This feature displays the first 200 rows of a data set.

1. On a project's **Project Configuration** page, click **Edit** on the **Inputs/Outputs** section.
2. On either the **Inputs** or **Outputs** tab, click the **Inputs/Data** toggle away from **Inputs**.
    - If you click the toggle halfway between **Inputs** and **Data**, both the (Input or Output) **Feature** table and the **Data Sample** table (a sample of records from the data file) are displayed.
    ![Classification project Feature and Data Sample tables](/img/classification-input-feature-and-data-sample-tables.png "Classification project Feature and Data Sample tables")
    - If you click the toggle next to **Data**, only the **Data Sample** table (a sample of records from the data file) is displayed.
    ![Classification project Data Sample table](/img/classification-input-feature-data-sample-table.png "Classification project Data Sample table")
3. In the **Data Sample** table, you can horizontally scroll to view all record columns, or vertically scroll to view different records.
4. To filter columns in the **Feature** table, enter text in the **Filter Columns** box. Columns with names that match the entered text are displayed.
5. To jump to a specific column in the **Data Sample** table, click inside the **Jump to Column** box and either select a column from the popup menu or enter text and select one of the displayed columns whose name matches the text.
6. In the **Data Sample** table you can sort any column according to its data by hovering over the pulldown menu to the right of the column name and selecting **Sort Ascending** or **Sort Descending**.  
![Classification project Data Sample table sort column options](/img/classification-input-feature-data-sample-table-sort-column.png "Classification project Data Sample table sort column options")
7. To view a statistical summary of column data, hover over the pulldown menu to the right of a column name and select **Column Summary**.
8. To add a column as an input or output feature, hover over the pulldown menu to the right of a column name and select **Add as Input** or **Add as Output**.

**Note:** The ability to add a column as an input or output feature is disabled if AML determines the column is ineligible to be considered for inclusion. This usually happens because the column contains text fields and AML enforces a rule in which text columns that contain 25 or more unique values cannot be used as input or output to a project.