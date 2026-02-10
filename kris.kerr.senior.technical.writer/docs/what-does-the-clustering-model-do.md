---
title: What does the Clustering model do?
description: A deep-diving discussion on what the Clustering model does
keywords:
    - clustering
    - model
---

*Cluster/segment analysis* (aka *clustering/segmentation*) is the task of grouping a set of objects in such a way that objects in the same group (called a cluster or segment) are more similar (in some sense) to each other than to those in other groups (clusters/segments).

Clustering/segmentation is done by using *dimensional* data. A data dimension is a set of data attributes pertaining to something of interest. Dimensions are things like customers, products, stores, or preferred color. AML assigns records to clusters based on dimensional data. In AML, a data dimension is also known as an input *feature*.

![Clustering/Segmentation diagram](/img/clustering-segmentation-slide.png "Clustering/Segmentation diagram")

Cluster/segment analysis itself is not one specific algorithm, but the general task to be solved. It can be achieved by various algorithms that differ significantly in their understanding of what constitutes a cluster/segment and how to efficiently find them. Popular notions of clusters/segments include groups with small distances between cluster/segment members, dense areas of the data space, intervals or particular statistical distributions.

The appropriate clustering/segmentation algorithm and parameter settings (including parameters such as the distance function to use, a density threshold, or the number of expected clusters/segments) depend on the individual data set and intended use of the results. Cluster/segment analysis as such is not an automatic task, but an iterative process of knowledge discovery or interactive multi-objective optimization that involves trial and failure. It is often necessary to modify data preprocessing and model parameters until the result achieves the desired properties.

A common use of clustering/segmentation is dividing users, customers, or subscribers into clusters/segments of individuals based on similarities that may be relevant to your marketing. While traditional clustering/segmentation groups individuals simply by age, gender, income, and so on, cluster/segment analysis can identify clusters/segments using many more dimensions. One can perform cluster/segment analysis on customer attributes to answer questions such as:

- What are the demographic characteristics of my best customers?
- How do customers behave while purchasing?
- What groupings of products do people buy from?
- How many clusters/segments best describe this data? (For example, three clusters/segments, five, six, ten?)

When doing clustering/segmentation without proper analysis (aka *manual clustering/segmentation*), a common mistake is to use inaccurate, invalid, or inappropriate assumptions about what should and shouldn't be clustered/segmented together. For example, a common demographic assumption is to create standardized age buckets (for example, 18-25, 26-35, 36-55, 55-80, and so on). These age groupings are decided without determining if the data supports them. Clustering/segmentation with machine learning algorithms creates appropriate clusters/segments suggested by the underlying data.

![Clustering/Segmentation similarity diagram](/img/clustering-segmentation-similarity-slide.png "Clustering/Segmentation similarity diagram")

In addition to answering specific questions about your customers, clustering/segmentation can also be used to analyze your customers and their behavior. By looking at the clustering/segmentation of customers based on different dimensions, you can discover underlying connections between customers that may not be immediately obvious.

For example, in marketing standardized age levels such as 20-30 years, 30-40 years, and so on are often used by default. By training a cluster model, you can find more effective age groupings that are suggested by your customer data.

As another example, in sales standardized purchase levels are often used:

- Time—For example, 3, 6, or 9 months
- Money—For example, 0-49 dollars, 50-99 dollars, 100-499 dollars

By training a cluster model, you can find more effective time and money groupings that are suggested by your customer data.

Instead of a model suggesting the number of output clusters, you may want to define the number of output clusters. For example, if your company has only four products, you may want only four clusters. In this case, training a cluster model may make a better decision about what goes in each of the four clusters than a human can.

Automation is a useful tool to use with clustering/segmentation. For example, you can set AML to be triggered when a new customer is added to the data set and to immediately calculate what cluster/segment to which the new customer is assigned.