---
title: Optimizer
description: A deep-diving discussion on the project configuration page optimizer section
keywords:
    - project
    - configuration
    - options
    - settings
    - optimizer
---

![Classification project Configure Optimizer Settings page](/img/classification-configure-optimizer-settings-page.png "Classification project Configure Optimizer Settings page")

AML includes an optimizer component that automatically attempts to refine and tweak your model during each iteration of training. The optimizer normally works autonomously, but you can influence the direction of the optimizer refinements by changing the settings in this section.

## Random Number Generator

Select **Use Fixed Seed** to ensure that the same sequence of random numbers is used every time the model is trained. This ensures that every model training (that uses the same starting parameters) produces the same results. In addition, you can change the **Default Fixed Seed** value.

There is a lot of random number generation in ML. Using the same fixed seed for random number generation ensures that when comparing solutions from different training runs, you are comparing apples to apples.

## Parents

How many parents are used. (That is, the number of starting solutions used to base offspring on during each iteration.)

## Offspring Ratio

How many offspring per parent. That is, the number of variant solutions (aka *offspring*) created per parent during each iterative cycle.

Explicitly choosing the number of parents and offspring, or changing the values, won't change the result. It just optimizes how quickly you get the answer. These values should be as large as possible without maxing out the machine's resources.

## Mean Mutations

Index of how much mutation you want to occur.

## Adapt Mutations

Select **Adapt Mutations** to enable automated meta-level, self-adaptive mutation to speed the evolutionary search.

## Selection Strategy

Select **Elitist** to simply pick the top *n* models.

In **Tournament** selection, the best of the best will always win the tournament, but who comes in second, third, fourth (and so on) is dependent on how each pairing competition plays out.

A parent may have a desirable feature, but depending upon how it fares against specific competitors, this desirable feature may not be passed on to offspring.

## Mutation Distribution

How is the number of mutations chosen (fixed or random value).

## Max Generations

The desired maximum number of evolutionary search iterations.