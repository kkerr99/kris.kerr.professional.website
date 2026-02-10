---
title: Model training and testing overview
description: A deep-diving discussion on model training and testing
keywords:
    - model
    - training
    - testing
---

Model creation is a two-part process, consisting of training and testing. Once you've trained your model on a data set, you need to answer the question "how good or bad is this model?" This question is answered by scoring a model against a set of data.

A model score in itself only tells you how well a model scored using a particular data set. Assessing fitness with the training data only shows how well the data scores with "known" data (answer: the model will score highly, since it is being scored against the data it was trained on). Therefore, the statistically valid way to assess fitness is by testing a model using previously unseen (*naive*) data. A good model will score highly using naive data. Naive data is sometimes referred to as *holdout* data (data that you’ve *held back* from training).

Testing a model with data the model has never seen before answers the question "did the model do what we thought it should do?". For example, if you created a model using stock market data from a certain decade, you could test the model using data from another decade.