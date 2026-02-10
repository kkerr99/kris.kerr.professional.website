---
title: Publish
description: A deep-diving discussion on the solution action Publish
keywords:
    - publish
---

A trained project produces a set of solutions, each with an assigned score. You can publish one of the solutions (the best-scoring one is a good choice) to make it available to the prediction engine. A published solution is called a *model*.

Another way to think of this is publishing a solution makes the solution "live"—puts it in production. Published solutions (models) can be called through the [AML API](accessing-rgone-api-docs) in order to predict expected outputs based on a set of inputs. AML also tracks model metrics (number of API calls and throughput).

![Solution action Publish](/img/solution-action-publish.png "Solution action Publish")

After a solution is published, the icon turns green.

![After a solution is published, the icon turns green](/img/solution-action-publish-green.png "After a solution is published, the icon turns green")

Once a solution is published, you can click the icon again to unpublish it.

Note that after you publish a solution, another icon appears on the left side.

![Solution action Copy Published Model ID](/img/solution-action-copy-published-model-id.png "Solution action Copy Published Model ID")

Clicking this icon copies the ID of the published solution (model) to the copy/paste buffer.

You will need the ID of a model when using it in the AML API.

**Note:** A model ID number is not generated until a solution is published.