---
title: Training options
description: A deep-diving discussion on project configuration page training options
keywords:
    - project
    - configuration
    - settings
    - training
    - algorithm
    - algorithms
---

Each model type has a set of associated algorithm options. The AML optimization engine uses each selected algorithm in its search for the best solution. By default, all available, applicable algorithms are selected. At least one algorithm must be selected in order for this project section to be valid, and you can select as many as you like.

Each algorithm has its strengths and weaknesses. Selecting more than one model algorithm for the project gives the optimizer the freedom to find the "best" algorithm (and parameterizations thereof) for the data. (That is, selecting more than one model algorithm gives the optimizer more degrees of freedom to find something that works well.) Selecting a single model algorithm potentially constrains the search to only sub-optimal model algorithms.

See <font color="red">@@Reference > Training algorithms@@</font> for more information on the algorithm options.