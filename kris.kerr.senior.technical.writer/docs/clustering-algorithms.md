---
title: Clustering algorithms
description: A deep-diving discussion on Clustering algorithms
keywords:
    - clustering
    - algorithm
    - algorithms
---

Clustering/segmentation (aka *model*) algorithms utilize distance measures to assign records to clusters/segments. The distances are measured, then records are (typically iteratively) assigned to clusters. The "goodness" of a clustering/segmentation solution is assessed using the *cluster measure* option.

![Clustering/segmentation with statistics slide](/img/clustering-segmentation-with-statistics-slide.png "Clustering/segmentation with statistics slide")

For a list of publications that describe the cluster model algorithms in detail, see <font color="red">@@Clustering model algorithms reference publications@@</font>.

*Cluster measure* is the function used to evaluate cluster quality.

For a list of publications that describe the cluster measure functions in detail, see <font color="red">@@Clustering measure functions reference publications@@</font>.

**Note:**

Some cluster measure functions are semi-supervised, and require the user to specify an output "truth" feature. See <font color="red">@@Semi-supervised Clustering measure functions@@</font> for a list of these functions.

*Cluster range* sets the minimum and maximum number of clusters to generate. See <font color="red">@@Thoughts on cluster size@@</font> for a discussion of this topic.