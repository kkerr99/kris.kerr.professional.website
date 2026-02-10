---
title: Training algorithms
description: A deep-diving discussion on training algorithms
keywords:
    - training
    - algorithm
    - algorithms
---

The following topics explain the algorithms AML uses to train a model.

Each algorithm has its strengths and weaknesses. Selecting more than one model algorithm for the project gives the optimizer the freedom to find the "best" algorithm (and parameterizations thereof) for the data. (That is, selecting more than one model algorithm gives the optimizer more degrees of freedom to find something that works well.) Selecting a single model algorithm potentially constrains the search to only sub-optimal model algorithms.

The Linear Least Squares and Partial Least Squares algorithms allow only one output feature at a time to be predicted. However, the Neural Networks algorithm can generate predictions for more than one output feature at a time.