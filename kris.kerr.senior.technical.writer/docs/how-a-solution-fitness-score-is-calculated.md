---
title: How a solution fitness score is calculated
description: A deep-diving discussion on how a solution fitness score is calculated
keywords:
    - solution
    - fitness
    - score
    - calculation
    - calculated
---

In general, a good model performs well with data it has never seen before (aka *naive data* or *testing data*). Assessing fitness with the training data really only shows how well the data does with "known" data (which it should, since it was trained with it). Therefore, the statistically valid way to assess fitness is by testing using previously unseen (naive) data.

A solution fitness score is calculated with this equation:

`overallFitness = weight * F(trainingData) + (1-weight)* F(testingData)`

`F(trainingData)` = Partial score for training data. This score is calculated using the portion of data used for training (for example, 30%, 50%, or 75% of the data set). The portion percentage is set by the `Sample` value.

`F(testingData)` = Partial score for testing data. This score is calculated using the portion of data used for testing (for example, 30%, 50%, or 75% of the data set). The portion percentage is set by the `Sample` value.

`weight` = value from 0 to 1. This is the `Fitness Portion` value.