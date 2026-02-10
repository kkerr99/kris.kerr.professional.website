---
title: How a model rank value is calculated
description: A deep-diving discussion on how a model rank value is calculated
keywords:
    - model
    - rank
    - value
    - calculation
    - calculated
---

In every generation, after solution fitness scores are calculated, each solution is ranked by fitness score using one of two methods.

## Elitist method
- aka *survival of the fittest*.
- Rank scores from worst to best.
- The top *X* solutions become the parents of the next generation.
- This method is structured and repeatable (the ranking is always the ranking). However, this method lacks variation, which may lead to a plateau in which you lock yourself away from a better solution.
- Basically, this ranking is across all generations but the hope is that the best scoring models are in the latest generation (though this is not always true).

## Tournament method
- Think of this as a medieval tournament of knights (each knight competes to be retained based on competition with *N* other knights).
- A knight is ranked by combat (fitness score) against *N* randomly-selected knights within the population of that generation.
- A knight fights *N* other knights and gets so many wins.
- The two knights are picked at random (except you can’t fight yourself).
- If there is a tie between two knights, the winner is chosen at random.
- A knight fights other knights, gets so many wins, until it reaches the limit of the number of knights it's permitted to fight (*N*). At the end, the knights are ranked by number of wins. (For now, *N* is a constant, but in the future it can be modified in the UI).
- Tournament method is not *survival of the fittest*; think of it as *culling of the least fit*.
- Tournament method allows for more variance than the Elitist method, which provides opportunity for finding a better solution.
- In Tournament method, the top-ranking solution slot is always guaranteed, but after that solution ranking could be different.

The ranking method is chosen when setting up the model project. For this Classification model example, we are using an elitist ranking method.

At the end of a generation (cycle), solutions are sorted based on their ranking, and only the top *X* solutions are retained as starting points (parents) for the next generation.

The evolutionary process continues until one of the two user-selectable criteria are met:

- Total wall-clock time has expired to create a finished best model.  
OR
- The desired model fitness score goal is attained.