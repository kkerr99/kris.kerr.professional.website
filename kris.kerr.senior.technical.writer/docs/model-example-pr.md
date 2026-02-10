---
title: Product Recommender model example
description: Explains how to build a PR model
keywords:
    - PR
    - recommender
    - model
    - build
---

## Overview

A Product Recommender (PR) model compares customer purchase history or other customer preference attributes to a set of product attributes, and generates one or more product recommendations for each customer.

Specifically, this project outputs a specified number of customer ID/product ID pairs for each unique customer ID, along with rank and match scores for each pair.

## To build an example PR model

### Download the example project data files to your machine

1. Download this `.zip` file to your local machine:  
    https://rpgcdnfiles.blob.core.windows.net/aml/aml-model-example-data-files.zip
2. Open the `.zip` file and save the following files to your local machine:
    - `por-example-product-data-file.csv` (product data file)  
        The product data file contains product attributes, which are keywords associated with each product ID. This file must contain a unique ID field and one or more attribute fields.
    - `por-example-customer-history-file.csv` (customer data file)   
        The customer data file contains customer history data, which are product IDs associated with a customer ID. Customer history and customer preference data can both be embedded in this file. This file must contain a unique ID field and one or more attribute fields.
    
### Create a new project

[Create a new PR model project](steps-for-building-a-project) with the following values:
- Project name: "ExamplePRModel".
- Project description: "Basic Product Recommender model" (optional).
- Use the default category value **General**.

### Upload your data

1. In the **Product Data File** section, [upload the file](file-upload-methods) `por-example-product-data-file.csv` to AML and add it as your project input data file.
2. In the **Customer Data File** section, [upload the file](file-upload-methods) `por-example-customer-history-file.csv` to AML and add it as your project customer data file.

### [Select the input features](choosing-input-features-for-pr-models)

For this project:

- The product ID column is `PROD_ID`.
- The product rank column is `PROD_RANK`.
- Product information columns:
    - `CHOCOLATE_TYPE`
    - `COLOR`
    - `FLAVOR`
    - `FRUIT_TYPE`
    - `PROD_RANK`
    - `SIZE`
    - `TEXTURE`
- The customer ID column is `CUSTOMER_CODE`.
- Customer purchase history or customer preference columns:
    - `ColorPreference`
    - `Order_Aug`
    - `Order_Dec`
    - `Order_July`
    - `Order_Nov`
    - `Order_Oct`
    - `Order_Sept`
    - `SizePreference`
    - `TexturePreference`

### Train the project

[Train the project](training-a-project) using the default values for the other project sections.

### Analyze the project results

In addition to viewing the project's [Fitness report](analyzing-a-projects-training-results) and [Solutions page](publishing-a-solution), you can view the customer recommendations.

1. On the **Project Manager** page, hover over your project section’s pulldown menu and select **Solutions**. Note that unlike other model types, a PR model creates only one solution.
2. Since this solution is a concrete list of product recommendations per customer, let’s look at the actual list. On the right side of the solution row, click the **Download Data** icon.
3. Open or save the output data file.
4. Open the file in a text editor:  
    ![PR solution, downloaded as a file and viewed in a text editor](/img/PR-solution-download-data.png "PR solution, downloaded as a file and viewed in a text editor")

    Each customer has ten product recommendations (because that was the default value, though we could have chosen another value). Each product recommendation is identified in the `PRODUCT_ID` field and ranked (you guessed it!) by the `RANK` field. Each product recommendation is accompanied by its calculated `SCORE`.

    For customer 1000000000001, product 9000000000006 is the first recommendation (with a score of 450), product 9000000000036 is the second recommendation (with a score of 375), and product 9000000000966 is the third recommendation (with a score of 300).

    Customer 100000000009 has score values of 0 for its recommendations because we had no preference or history data for that customer. Because we used default ranking data in the model, the product recommendations are given by the ranking data, and there is no associated score.

