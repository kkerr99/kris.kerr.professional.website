---
title: How automated, optimized machine learning works
description: Explains how machine learning works.
keywords:
    - ML
    - model
    - solution
    - parent
    - offspring
    - fitness
    - score
    - fit
    - training
    - generation
---

Machine learning algorithms build a mathematical model based on sample data (known as *training data*) in order to make predictions or decisions without being explicitly programmed to perform the task.

To start, you provide training data (which includes input and sometimes output data) to a machine learning program.

The machine learning program generates a set of *models* (mathematical functions that take input data and generate output data). You can use these models to make predictions based on input data. You can also think of a model as a potential solution, one of many.

Model changes use a genetic mutation evolutionary model, in which multiple generations of models are created and the best models of a generation are retained as parent models for the next generation. 

For every generation:
1. Parents (aka parent solutions or parent models) are created, and are the starting solutions for a generation.
2. Each parent produces one or more offspring (aka offspring solutions or offspring models) that are variations of the parent.
3. For all the parents and offspring of a generation:
    1. Each model is trained.
    2. A fitness score is calculated for each solution.
        - A fitness score represents "goodness of fit", and is not a percentage. It measures how much error the model has when compared to known "truth".
        - The lower the value, the better the score. A fitness score close to zero indicates the model has a very low amount of error.
4. Out of all the generated possible solutions, the top solutions (the ones with the best scores) become parents for the next generation.

The training process ends when either a model reaches a predetermined score (measure of how accurately the model predicts results), or a calculation time period expires or a predefined number of training iterations is reached.

In a nutshell, this is a process of creating multiple generations of models. In each generation the bad models are discarded and the good models are retained and their traits passed on to their children. By feeding models back into the machine learning loop, successive models become more accurate. Eventually, the training process bottoms out (scores do not improve over time), and the best (top-scoring) solutions reveal themselves.