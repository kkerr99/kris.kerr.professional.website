---
title: The test data set
description: A deep-diving discussion on the Classification example data file
keywords:
    - classification
    - test
    - data
---

The file `classification-example-data-file.csv` contains a number of data fields commonly found in client marketing databases. As with any data set, the amount of data (number of records) is usually less important than the information contained within these records. Good information content leads to higher accuracy and reliability.

Some of the records contain missing data elements (missing data is a common problem with real-world data sets). Modeling with missing data is possible, though most machine learning (ML) algorithms require substitution or estimation of these missing data elements to prevent errors in the learning process. There are multiple user-controlled options within AML to perform missing data substitution, and general default values have been established for each data type.

The following table describes the `classification-example-data-file.csv` fields:

|Field Name |Type| Comments|
|-----|--------|--------|
|RowNum|integer |Row number of the table. Not useful as either an input or output feature.|
|CustomerRating  |integer |Useful as both an input or output feature. |
|Retention  |integer |Particularly useful as an output feature. Possibly could be used as an input feature. |
|LoyaltyMember  |boolean (yes/no) |Useful as an input or output feature. |
|DaysSinceLastPurchase  |float |Useful as an input or output feature. |
|ImmediateRelatives  |integer |Useful as an input or output feature. |
|HouseholdChildren  |integer |Useful as an input or output feature. |
|CustomerID  |alphanumeric text |Useful as a key, not as an input/output feature. |
|LatestPurchasePrice  |float |Useful as an input or output feature. |
|LatestPurchaseItemID  |text |Useful as an input feature. |
|RegionCode  |text |Useful as an input feature. |
|CustomerCaptureMethod  |alphanumeric text |Useful as an input feature. |
|CustomerContactCode  |integer |Useful as an input feature. |
|Domicile  |text |Generally not useful as an input or output feature, though state, city, or county might be used as input features. |