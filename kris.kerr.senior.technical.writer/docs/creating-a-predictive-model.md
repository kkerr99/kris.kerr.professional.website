---
title: Creating a predictive model
description: A deep-diving discussion on creating a predictive Classification model
keywords:
    - classification
    - predictive
---

A common need for marketing companies is to be able to predict customer retention based on historical behaviors. The modeling task becomes a retention/attrition classification problem where the model predicts whether or not a customer is expected to be retained. The model predicts probability of retention using the `Retention` data field as its output (prediction) feature. Results will be mapped to `yes` (indicating predicted retention) or `no` (predicted attrition) for each input row of customer data. For the input features (predictors), many of the other data fields are suitable candidates.

**Note:**

This predictive Classification model does not use the retention/attrition data field as an input feature since it has already been selected as the predicted output.

For this Classification model, we will use the following input features:

|Input Feature Name |Rationale|
|-----|--------|
|CustomerRating|Often correlated with repeat customers, makes for a good predictor. |
|LoyaltyMember|Often correlated with long-term customers (a good predictor). |
|DaysSinceLastPurchase|Indicates recency. Customers with recent purchases are likely to be repeat customers. **Note:** This may not be a good predictor for durable goods (cars, sofas, washing machines, and so on) although customers may eventually become long-term clients. |
|ImmediateRelatives|Households with close relatives, spouses, and so on tend to be correlated with long-term product/brand/merchant relationships |
|HouseholdChildren|Households with children tend to be correlated with long-term product/brand/merchant relationships. |
|LatestPurchasePrice|Potentially correlated with long-term merchant relationships. |
|LatestPurchaseItemID|Potentially correlated with long-term merchant relationships. |
|RegionCode|Potentially correlated with long-term merchant relationships. |
|CustomerCaptureMethod|Often correlated with long-term merchant relationships. |
|CustomerContactCode|Often correlated with long-term merchant relationships. |