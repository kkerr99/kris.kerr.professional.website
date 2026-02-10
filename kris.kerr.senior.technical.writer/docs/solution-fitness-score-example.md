---
title: Solution fitness score example
description: An example of how a solution fitness score is calcuated
keywords:
    - solution
    - fitness
    - score
    - example
---

Let's assume:

- That we're using a data set of 1,000 records.
- We set `Sample` to 0.4.
- We set `Fitness Portion` to 0.7.

Using the fitness score equation:

`overallFitness = weight * F(trainingData) + (1-weight)* F(testingData)`

% data set used for training = 40% of all records, so (0.4 * 1000) = 400 records

% data set used for testing = 60% of all records, so (0.6 * 1000) = 600 records

Then `overallFitness = 0.7 * F(trainingData) + 0.3 * F(testingData)`

Which is to say, `overallFitness` is 70% of the fitness score using training data (400 records out of the data set) + 30% of the fitness score using testing data (600 records out of the data set).