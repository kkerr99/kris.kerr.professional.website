---
title: Data models
description: Describes AML data models
keywords:
    - model
    - classification
    - clustering
    - regression
    - recommender
    - pr
---

In AML, these are the basic (atomic) data model types. You can create a project based directly on one of these types. If you create a project using a template, the template will ultimately be based on one of the following model types.

## Model type: Classification

Classification models use existing data points and variables to classify future outcomes based on the existing training data. Both defined inputs and (correlated) outputs are used to train the model.

Classification models are typically used to predict discrete-value outputs (for example, whether a record belongs in class 1, class 2, or class 3).

You can read more about the Classification model <font color="red">@@here@@</font>.

## Model type: Clustering

*Cluster/segment analysis* (aka *clustering/segmentation*) is the task of grouping a set of objects in such a way that objects in the same group (called a *cluster* or *segment*) are more similar (in some sense) to each other than to those in other groups (clusters/segments).

A common use of clustering/segmentation is dividing users, customers, or subscribers into clusters/segments of individuals based on similarities that may be relevant to your marketing. One can perform cluster/segment analysis on customer attributes to answer questions such as:

- What are the demographic characteristics of my best customers?
- How do customers behave while purchasing?
- What groupings of products do people buy from?
- How many clusters/segments best describe this data? (For example, three clusters/segments, five, six, ten?)

You can read more about the Clustering model <font color="red">@@here@@</font>.

## Model type: Regression

The Regression model uses a set of input features to predict output features. Input features can be continuous (floating point), discrete (integer), text (turned into enumerated integer values), and binary (0/1).

The output features to predict are usually continuous values (like sales or cost). While Regression models can also be used to predict discrete values (like yes/no, categories, and so on), Classification models are generally better for discrete-value cases.

Regression models can be used to predict things like:

- profit
- potential sales
- transaction volume
- credit score

You can read more about the Regression model <font color="red">@@here@@</font>.

## Model type: Product Recommender

The Product Recommender (PR) model compares customer purchase history or other customer preference attributes to a set of product attributes, and generates one or more product recommendations for each customer.

You can read more about the PR model <font color="red">@@here@@</font>.