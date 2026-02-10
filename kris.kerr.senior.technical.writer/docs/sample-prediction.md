---
title: Sample Prediction
description: A deep-diving discussion on the solution action Sample Prediction
keywords:
    - sample
    - prediction
---

![Solution action Sample Prediction](/img/solution-action-sample-prediction.png "Solution action Sample Prediction")

This is an easier version of the "sample using holdout data" functionality, and answers the same question ("am I getting the output I expected?"). This is a quick way to test if a model is predicting output that looks correct.

This functionality uses data you've already uploaded for training, and does not require uploading a separate file. It basically takes the first 20 rows of input data that was used for training the model and calls the predictor service for each row.

1. Click the **Sample Prediction** icon for a solution.
2. The **Prediction Sample** dialog is displayed.
    ![Prediction Sample dialog](/img/prediction-sample-dialog.png "Prediction Sample dialog")
3. Click **x** on the upper-right-hand part of the dialog to close it.

The blue column(s) are input features from your data set, and the green column(s) are calculated output features.

In this example, `Retention_Prob_Class_0` is the output feature calculated using the model trained from the entire data set, and `Retention_Prob_Class_1` is the output feature calculated using the model trained from the beginning records of the data set.