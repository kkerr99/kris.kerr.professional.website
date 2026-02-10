---
title: Publishing a solution
description: Explains how to publish a solution
keywords:
    - publish
    - publishing
    - solution
---

## Overview

A trained project produces a set of solutions, each with an assigned score. You can publish one of the solutions (the best-scoring one is a good choice) to make it available to the prediction engine. A published solution is called a *model*.

Another way to think of this is publishing a solution makes the solution *live*—puts it in production. Published solutions (models) can be called through the [AML API](accessing-rgone-api-docs) in order to predict expected outputs based on a set of inputs. AML also tracks model metrics (number of API calls and throughput).

## To publish a solution

1. On the **Project Manager** page, in your project section, hover over the project pulldown menu and select **Solutions**.  
    ![project pulldown menu, Solutions option](/img/project-option-solutions.png "project pulldown menu, Solutions option")
2. The **Solutions** page displays a table of the top-ranked solutions for a given project. You can use the information on this page to help you decide which solution is best for your needs.
    **Note:** Unlike other model types, a PR model creates only one solution.
    ![Project Solutions page](/img/project-solutions-page.png "Project Solutions page")
    In this context, solutions with a higher rank have lower error scores (as calculated per whatever metric/measure is used). That is, models with better fitness (lower error scores) have a higher ranking (1, 2, 3, ...) than those models with lower fitness (higher error scores). Some modeling tools define fitness in terms of another measure (for example, R-Squared) in which higher values are usually "better".

    You can sort the solutions by **Fitness Score**, whether or not the solution is **Published**, and calculated **Rank**.

    For a detailed explanation of this page, see <font color="red">@@Reference > Solutions page@@</font>.
3. In the row of the solution you want to publish, click the **Publish** icon:  
    ![Solution action, Publish icon](/img/solution-action-publish-icon.png "Solution action, Publish icon")
4. After a solution is published, the icon turns green.  
    ![Solution action, Publish icon after publishing](/img/solution-action-solution-published-green-icon.png "Solution action, Publish icon after publishing")

After you’ve published a solution, you can call it directly through its prediction [API](accessing-rgone-api-docs).

You can also use a published solution in Redpoint RPI. See the RPI documentation for more information.