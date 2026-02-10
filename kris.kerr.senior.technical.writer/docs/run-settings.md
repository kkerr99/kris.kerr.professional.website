---
title: Run settings
description: A deep-diving discussion on the project configuration page Run Settings section
keywords:
    - project
    - configuration
    - options
    - settings
    - run
---

## Non-Product Recommender projects

![Non-Product Recommender project Configure Run Settings page](/img/classification-configure-run-settings-page.png "Non-Product Recommender project Configure Run Settings page")

### Total Wall-Clock

The maximum training time limit.

### Fitness Goal

This is the solution fitness goal. If a solution's score meets or exceeds this value, the solution is considered "good enough". Since a project usually generates multiple solutions, it's handy to know which solutions are "keepers".

### Automatically Publish Best Solution

Select **Automatically publish best solution** if you want AML to automatically publish the best (highest-scoring) solution at the end of model training.

## Product Recommender projects

![Product Recommender project Configure Run Settings page](/img/PR-configure-run-settings-page.png "Product Recommender project Configure Run Settings page")

### Recommendations per customer

The number of product recommendations generated for each customer.

### How to Handle Customers with No History

Determines how you want to generate recommendations for customers with no history data in the model.

If the data set has no integer fields, there are no ranking choices other than **Use Random Choice** (generate customer recommendations randomly).

If the data set has integer fields, you can choose one of these fields from the pulldown menu to suggest a ranking of products/offers.

### Random Number Generator

Select **Use Fixed Seed** to ensure that the same sequence of random numbers is used every time the model is trained. This ensures that every model training (that uses the same starting parameters) produces the same results.

There is a lot of random number generation in ML. Using the same fixed seed for random number generation ensures that when comparing solutions from different training runs, you are comparing apples to apples.