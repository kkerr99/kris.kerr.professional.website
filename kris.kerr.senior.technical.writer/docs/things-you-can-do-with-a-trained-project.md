---
title: Things you can do with a trained project
description: Explains the things you can do with a trained project
keywords:
    - project
    - train
    - trained
---

**Note:** Redpoint’s AML software allows you to create trained models, but you own the models you train.

## Publish a project solution

A trained project produces a set of solutions, each with an assigned score. You can publish one of the solutions (the best-scoring one is a good choice) to make it available to the prediction engine. A published solution is called a *model*.

Another way to think of this is publishing a solution makes the solution *live*—puts it in production. Published solutions (models) can be called through the [AML API](accessing-rgone-api-docs) in order to predict expected outputs based on a set of inputs. AML also tracks model metrics (number of API calls and throughput).

## Retrain the project

If you get more or different data, you can use that data to retrain an existing project to achieve better correlation. You can even set up a project to auto-retrain itself, without needing the supervision of a data scientist.

## Call the model through the AML API

After you’ve deployed a model, you can call it directly through its prediction [API](accessing-rgone-api-docs).

## Use the model in other Redpoint products

You can use a deployed model in Redpoint RPI. See the RPI documentation for more information.