---
title: Solutions page
description: A deep-diving discussion on the Solutions page
keywords:
    - solution
    - solutions
---

## Rank

See [How a model rank value is calculated](how-a-model-rank-value-is-calculated) for a detailed discussion of this value.

## Fitness Score

See [How parents and children are chosen for each generation](how-parents-and-children-are-chosen-for-each-generation) a detailed discussion of this value.

## Duration

The total overall time allocated to optimize (through some number of generations) a final "best" solution (that is, continue the optimization process until you run out of allocated time). The best solution in the population at that time becomes the "final best" solution.

## Generation

The training generation to which the solution belongs. This value gives you a sense of how far along in the training process it took to calculate the solution.

## Number of solutions

The number of solutions displayed is based on the number of parents you set in the project **Optimizer** section. For example, if you change the **Parents** value to `4`, the four highest-scoring solutions are displayed on the **Solutions** page.

## Project Version

Some notes on project versions:

- A new project version is created:
    - When you create a new project.
    - The first time you start making edits to a previously-trained project.
- This version does not change with subsequent edits you may make. You can save, close, and return to the project and continue making edits without a version change.
- When you start training a project, the version of the configuration at that point is locked and that version can no longer be changed.
- The configuration for each locked version is kept for historical reference.
- Any project edits that occur after a version is locked trigger the creation of a new version of the project.
- When viewing a project, you can select a specific version using the **Version** menu.