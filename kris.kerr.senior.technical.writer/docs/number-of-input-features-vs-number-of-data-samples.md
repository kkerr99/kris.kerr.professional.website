---
title: Number of input features vs. number of data samples
description: A deep-diving discussion on the number of input features vs. the number of data samples
keywords:
    - features
    - feature
    - input
    - sample
    - samples
    - data
---

A basic rule of thumb is to restrict input features to the lowest number that can reasonably describe the underlying process being modeled. This reduces the noise that can degrade prediction accuracy.

In most real-world marketing applications, there is little need to utilize hundreds of input features to model a process. In most cases, up to a few dozen input features (if chosen sensibly) are sufficient to obtain good results.

As with all modeling tasks, the amount of data used to train the models must contain sufficient information to describe the underlying system. Thus, the number of data samples (data rows) needs to cover the space of possible input-output mappings

Another general rule of thumb is to allocate at least 30 (randomly selected) data samples per each input feature to get reasonable coverage of the mapping. Since the number of required data samples rises exponentially with the number of features, this provides another reason to constrain the number of input features (instead of just pouring all the input features into the model).

A large number of data records also takes longer to train models, which can be important if you need to create and publish a model quickly. In practice, up to 500,000 training samples may be necessary to create accurate models, but often a few thousand may suffice if the number of input features is kept reasonably small.