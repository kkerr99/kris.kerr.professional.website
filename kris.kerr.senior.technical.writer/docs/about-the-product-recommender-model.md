---
title: About the Product Recommender model
description: A deep-diving discussion on the Product Recommender model
keywords:
    - recommender
---

PR utilizes only a customer's history (that is, a customer's preferences) to recommend other products. It does not use other people's preferences to generate product recommendations (as with Amazon).

For the other model types in AML, training a model generates many possible solutions. However, in the PR model, all the necessary work (training and output creation) is done in one step, so only one solution is generated.

Also (unlike other AML model types) in a PR model, the end results are the same for every customer, no matter how many times the model is trained. Therefore, (unlike other AML model types) the best way to use the PR model is to train it once and create one recommendation file.

Though the PR model works differently from the other AML models, you can call a published solution using the same APIs as with the other models.

Note that customer preference information is optional (customer buying history for the products is all that is absolutely necessary).