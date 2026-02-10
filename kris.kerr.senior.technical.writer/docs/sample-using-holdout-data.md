---
title: Sample Using Holdout Data
description: A deep-diving discussion on the solution action Sample Using Holdout Data
keywords:
    - sample
    - holdout
    - data
---

![Solution action Sample Using Holdout Data](/img/solution-action-sample-using-holdout-data.png "Solution action Sample Using Holdout Data")

This feature allows you to test a model with data the model has never seen before and answers the question "did the model do what I thought it should do?".

See [Model training and testing overview](model-training-and-testing-overview) for an explanation of how your data is used for model training and testing. 

See [Choosing holdout data](choosing-holdout-data) for tips on how to best choose your holdout data.

This functionality requires uploading a file.

1. Click the **Sample Using Holdout Data** icon for a solution.
2. Drag your holdout data file to the popup dialog, or browse for it.
3. The **Sample Prediction** dialog is displayed.
    ![Sample Prediction dialog](/img/sample-prediction-dialog.png "Sample Prediction dialog")
4. Click **x** on the upper-right-hand part of the dialog to close it.

The blue column(s) are input features from the holdout data set, and the green column(s) are calculated output features.

In this example, `Retention_Prob_Class_0` is the output feature calculated using the model trained from the original data set, and `Retention_Prob_Class_1` is the output feature calculated using the model trained from the holdout data set.