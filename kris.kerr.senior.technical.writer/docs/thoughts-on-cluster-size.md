---
title: Thoughts on cluster size
description: A deep-diving discussion on choosing the proper cluster size
keywords:
    - clustering
    - cluster
    - size
---

A cluster size of 1 means that everything is in the same cluster, which doesn’t tell you anything.

If the number of clusters of a solution is the same as the maximum number of clusters setting, here are some things to consider:

- The true number of clusters could be much higher than the max cluster setting.
- Increasing the max cluster setting and training the model again could give you a better result.
- The data set may not be a good fit for a Clustering model.