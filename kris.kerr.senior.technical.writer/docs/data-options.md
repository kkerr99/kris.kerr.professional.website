---
title: Data options
description: A deep-diving discussion on project configuration page data options
keywords:
    - project
    - configuration
    - options
    - settings
    - data
---

![Classification project Configure Data Options page](/img/classification-configure-data-options-page.png "Classification project Configure Data Options page")

## Record Limit

If you want to use less than the full number of records in the data set for training and testing, enter the number of records to use in the **Record Limit** box.

## Sampling Method

The **Sampling Method** menu lets you choose how to use records from the data set. The values are:

- **Random**—Use records from the data set in a random order.
- **Nth Record**—Use every *nth* record from the data set. *N* is automatically calculated based on the total number of available data records and the number of records selected for use in the model.
- **Sequential**—Use the records from the data set in sequential order (the order the records appear in the file).

## Data Normalization

This section lets you decide if you want to auto-normalize data values in input and output features. By default, data normalization is turned on for input and output features.

Situations where you may not want to normalize your data include:

- Re-creating a (pre)existing model's functionality.
- For certain algorithms (such as decision trees and random forests) normalization is not always a good choice as it can seriously distort the resultant model performance.

## Training set vs. testing set distribution

This section lets you set the **Fitness Portion** and **Training Sample Percentage** values.

If you want to know the details of what these values are and how they are used, read [How a solution fitness score is calculated](how-a-solution-fitness-score-is-calculated).