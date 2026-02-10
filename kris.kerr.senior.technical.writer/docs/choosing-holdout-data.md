---
title: Choosing holdout data
description: A deep-diving discussion on choosing holdout data
keywords:
    - holdout
    - data
---

Normally, the best way to choose holdout data is:

1. Out of the records set aside for training (but never used for training), randomly select some of these records as potential holdout data.
2. Out of this group of random potential candidates, randomly select some of these records to actually be used as holdout data.

This "random of random" data selection means that a model scored twice using this method could produce different scores, because the two groups of data used for testing are randomly selected, and hence not the same data. (Scoring a model with different data can produce different scores.)

However, if you use this "random of random" scheme for holdout data, no matter how many times you train a model (that is, how many versions of the model you generate), you can directly compare the scores generated from these models (you are comparing apples to apples).