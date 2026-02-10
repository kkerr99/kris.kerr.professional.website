---
title: Analyzing a project's training results
description: Explains how to analyze a project's training results
keywords:
    - project
    - training
    - analyze
---

After training a project, you can view the project's fitness report and review details about the training process.

## To analyze a project's training results

1. On the **Project Manager** page, in your project section, hover over the project pulldown menu and select **Fitness Report**.  
    ![Project pulldown menu, Fitness Report option](/img/project-option-fitness-report.png "Project pulldown menu, Fitness Report option")
2. The project **Training Fitness over Time** report is displayed. This graph plots the fitness score of the highest-scoring solution of each generation vs. training generation (generation 1, 2, and so on). (Note that in AML, the lower a score value, the better it is).
    ![Project Training Fitness over Time report](/img/classification-fitness-report.png "Project Training Fitness over Time report")

    See [Graph options](graph-options) for a description of the options available from the **Graph Option** pulldown menu.

    You can hover over one of the graph points to display more information about the solution:

    - Generation value.
    - Fitness score of the best-scoring solution of that generation.
    - Generation timestamp (timestamp of when the solution score was calculated).

    ![Information displayed when hovering over a graph point](/img/classification-fitness-report-point-bubble.png "Information displayed when hovering over a graph point")

    The graph tells us:

    - For how many generations the project was trained.
    - The score of the highest-scoring solution for each generation.
    - How the solution scores vary over time. If the scores reach a plateau, for example, that score was the best that could be achieved, and additional training time did not discover a solution with a better score.
3. At the bottom of the graph dialog, click **Close**.