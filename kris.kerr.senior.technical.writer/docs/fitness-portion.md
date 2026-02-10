---
title: Fitness portion
description: A deep-diving discussion on the fitness portion in a solution fitness score
keywords:
    - portion
    - fitness
---

As explained previously, this is a value from 0 to 1. It sets the percentages of the partial scores used for calculating the overall fitness score, and is represented in the fitness score equation by the variable `weight`.

If `weight` (fitness portion) is set to 0.0, `overallFitness` is simply equal to `F(testingData)`. (That is, `overallFitness` is calculated using only the testing data.)

If `weight` is set to 1.0, `overallFitness` is simply equal to `F(trainingData)`. (That is, `overallFitness` is calculated using only the training data.)

If `weight` is set to 0.4 (40%), then the overall fitness score is calculated using 40% of the training fitness score and 60% of the testing fitness score.