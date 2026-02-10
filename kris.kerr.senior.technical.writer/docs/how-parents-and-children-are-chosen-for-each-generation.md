---
title: How parents and children are chosen for each generation
description: A deep-diving discussion on how parents and children are chosen for each generation
keywords:
    - parent
    - parents
    - child
    - children
    - generation
---

In evolution simulations, parents (aka *parent solutions* or *parent models*) are the starting solutions for a generation. Each parent produces one or more offspring (aka *offspring solutions* or *offspring models*) that are variations of the parent.

When creating a project (model), the user sets the values for the number of parents (`x`) and number of children (`y`). These values are used for every generation, including the first.

For `x` parents and `y` offspring:

- There will be `x*(y+1)` solutions (children) for that generation to rank.
- Out of those children, the top `x` become the parents for the next generation.

In every generation, for each solution:

- The model is trained.
- A fitness score is calculated for each solution in that generation.
- A fitness score represents "goodness of fit", and is not a percentage. It measures how much error the model has when compared to known "truth".
- Fitness scores for Regression and Classification models (supervised learning) are normalized to the range [0.0, 1.0]. Cluster fitness models are not bounded to [0.0, 1.0]—scores can exceed 1.0 for certain measure types.
- The lower the value, the better the score. A fitness score close to zero indicates the model has a very low amount of error. A score of 0 indicates the model is perfectly accurate (across the set of known input values that were provided). This is normally not likely (except for certain deterministic models like decision trees).
- Additionally, fitness scores use different measures for Classification (cross-entropy) and Regression (mean-squared error). Multiple error measures are typically calculated (for example, area under the curve, ROC curves, Z scores, and P scores) that may be included in a final fitness score sometime in the future.

## Example

Every parent `x` has `y` number of children. A single generated solution is represented by `s`.

### Generation 1

If we start with `x=3` and `y=5`:

|x |x  | x|
--- | --- | ---
|yyyyy|yyyyy|yyyyy|
|ssssss|ssssss|ssssss|

In this example, for every parent there are five children, which means 1 parent + 5 children = 6 solutions to consider per parent. Since there are 3 parents, the total number of solutions for this generation is 3*(5+1) = 3*6 = 18.

### Generation 2

Out of 18 possible solutions, the top `x` (3) solutions become parents for the next generation.