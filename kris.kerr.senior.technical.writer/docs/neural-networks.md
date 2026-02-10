---
title: Neural Networks
description: A deep-diving discussion on the Neural Networks algorithm
keywords:
    - neural
    - network
    - networks
    - algorithm
    - algorithms
---

The *Neural Networks* algorithm passes input features forward through a sequence of layers before turning them into outputs. In each layer, inputs are weighted in various combinations, summed, and passed on to the next layer.

![Nonlinear models slide](/img/nonlinear-models-slide.png "Nonlinear models slide")

Note that selecting the Neural Networks algorithm displays additional algorithm parameters that control and/or constrain the modeling process.

## Nodes and layers

A *node* is a model of a single neuron in the brain (which sums up all the inputs and triggers the output if a given threshold is reached). A *layer* is a group of nodes at the same "level".

Per proven theory, two layers is enough to map any regression prediction task. However, theory doesn't specify how to do it (just that it can be done). The number of nodes in a layer, node functions, and weights need to be discovered through training.

A good rule of thumb is that the number of nodes in a layer should usually be proportional to the number of input features. In most cases, 2-3 layers should be sufficient for most prediction problems. The default **layer** and **node** values should work for most situations. Note that using larger numbers of nodes and layers facilitates learning at the expense of training time and increases the risk of overtraining (that is, learning the unwanted "noise").