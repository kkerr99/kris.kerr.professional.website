---
title: Training vs. testing data
description: A deep-diving discussion on training vs. testing data
keywords:
    - training
    - data
    - testing
---

*Training data* is the data you use initially to train the model.

After you train the model, you score the model using *testing data* to assess model fitness. One way to look at this is out of all the data you have, you will use some of it to train with, and you will hold some of it back (the *holdout data*) to test with.

In AML, the default model’s initial training session includes a testing component. After a model’s initial training session (that includes some testing), you can do additional testing for further statistical assessment of the model.

There are a number of ways you can split up the data you have into training and testing components:

- Use a single file that contains both your training and testing data.
    - Withhold testing data from one part of the file:
        - Use some part of the file for training.
        - Use another part of the file for testing.
        - For example, you could use 40% of the data file records for training, and use the other 60% for testing.
        - This is the default training and testing process in AML (an initial training session with some testing at the end).
    - Withhold testing data from two parts of the file:
        - Use some part of the file for initial training and testing (the AML default process).
        - Use another part of the file for further statistical performance assessment of the model.
        - For example, if you have 10 million rows of data in a file, you could use 5 million rows to create the model. Some of these 5 million rows would be used for training, and some for testing for initial fitness assessment. The remaining 5 million rows in the file that have never been used for training or fitness assessment could be used for further statistical performance assessment of the model.
        - This process is done with the <font color="red">@@Reference > Sample Prediction@@</font> option.
    - Use two data files. One data file contains your training data, and the other contains your holdout data.
        - This process is done with the <font color="red">@@Reference > Sample Using Holdout Data@@</font> option.