---
title: Classification model example
description: Explains how to build a Classification model
keywords:
    - classification
    - model
    - build
---

## Overview

In AML, one or more data models are wrapped in a *project*. Let’s build a simple project, consisting of a single data model.

In this example, we will build a Classification model that trains with the `classification-example-data-file.csv` data set. Classification models use existing data points and variables to classify future outcomes based on the existing training data. Both defined inputs and (correlated) outputs are used to train the model.

Classification models are typically used to predict discrete-value outputs (for example, whether a record belongs in class 1, class 2, or class 3).

## To build an example Classification model

### Download the example project data file to your machine
1. Download this `.zip` file to your local machine:
    https://rpgcdnfiles.blob.core.windows.net/aml/aml-model-example-data-files.zip
2. Open the `.zip` file and save `classification-example-data-file.csv` to your local machine.

### Create a new project
[Create a new Classification model project](steps-for-building-a-project) with the following values:

- Project name: "ExampleClassificationModel".
- Project description: "Basic retention/attrition model" (optional).
- Use the default category value **General**.

### Upload your data

[Upload the file](file-upload-methods) `classification-example-data-file.csv` to AML and add it as your project input data file.

### [Select the output feature](choosing-output-features) 
    
The purpose of this project is to predict (based on things we already know about a customer) whether the customer will be retained or not (`0 = no`, `1 = yes`). So the output feature is:

- `Retention`

### [Select the input features](choosing-input-features-for-most-model-types) 

For this project, the input features are:

- `CustomerCaptureMethod`
- `CustomerContactCode`
- `CustomerRating`
- `DaysSinceLastPurchase`
- `HouseholdChildren`
- `ImmediateRelatives`
- `LatestPurchaseItemID`
- `LatestPurchasePrice`
- `LoyaltyMember`
- `RegionCode`

### Train the project

[Train the project](training-a-project) using the default values for the other project sections.

### Analyze the project results

You can view the project's [Fitness report](analyzing-a-projects-training-results) and [Solutions page](publishing-a-solution).