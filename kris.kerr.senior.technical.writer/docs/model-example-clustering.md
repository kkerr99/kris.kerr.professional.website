---
title: Clustering model example
description: Explains how to build a Clustering model
keywords:
    - clustering
    - model
    - build
---

## Overview

*Cluster/segment analysis* (aka *clustering/segmentation*) is the task of grouping a set of objects in such a way that objects in the same group (called a cluster or segment) are more similar (in some sense) to each other than to those in other groups (clusters/segments).

In this example, we will use as input a file of vehicle metrics and insurance loss/risk data. We will then create a Clustering project using a subset of this data as input features, and train the model to see how the vehicles are clustered/segmented. The project output assigns a cluster/segment number to each vehicle. The generated solutions can be used to do things such as derive insurance pricing, create offers to present to existing and potential customers, and so on.

## To build an example Clustering model

### Download the example project data file to your machine

1. Download this `.zip` file to your local machine:
    https://rpgcdnfiles.blob.core.windows.net/aml/aml-model-example-data-files.zip
2. Open the `.zip` file and save `clustering-example-data-file.csv` to your local machine.

### Create a new project

[Create a new Clustering model project](steps-for-building-a-project) with the following values:
- Project name: "ExampleClusteringModel".
- Project description: "Basic Clustering model" (optional).
- Use the default category value **General**.

### Upload your data

[Upload the file](file-upload-methods) `clustering-example-data-file.csv` to AML and add it as your project input data file.

### [Select the input features](choosing-input-features-for-most-model-types)

**Note:** Some cluster measure functions are semi-supervised, which means they require the user to specify an output "truth" feature. See <font color="red">@@Reference > Semi-supervised Clustering measure functions@@</font> for a list of these functions.

The cluster measure function that we are using for this example (Davies-Bouldin) is unsupervised, so it does not require an output "truth" feature. See <font color="red">@@Unsupervised Clustering measure functions@@</font> for a list of all the cluster measure functions that are unsupervised.

For this project, the input features are:
- `doors`
- `driveWheels`
- `engineCylinders`
- `highwayMPG`
- `horsepower`
- `symbolingRisk`
- `weight`
- `wheelBase`

**Note:** If in the future you do choose a semi-supervised cluster measure function, make sure to add an output "truth" feature. If you neglect to do so, the following error will be displayed:

![Error displayed when a semi-supervised cluster measure function is chosen, but an output truth feature is not added](/img/clustering-model-truth-feature-omission-error-message.png "Error displayed when a semi-supervised cluster measure function is chosen, but an output truth feature is not added")

### Train the project

[Train the project](training-a-project) using the default values for the other project sections.

### Analyze the project results

In addition to viewing the project's [Fitness report](analyzing-a-projects-training-results) and [Solutions page](publishing-a-solution), you can view the calculated data clusters.

The calculated data cluster information is contained in the generated solutions. Let’s take a look at the data cluster information for the highest-scoring solution.

1. Navigate to the project **Solutions page**. In the solution 1 row, click the **Download Data** icon:
    ![Solution action, Download Data](/img/solution-action-download-data.png "Solution action, Download Data")
2. Open or save the output data file.
3. Open the file in a text editor:
    ![Clustering solution, downloaded as a file and viewed in a text editor](/img/clustering-data-cluster-file.png "Clustering solution, downloaded as a file and viewed in a text editor")

#### Clustering solution downloaded file fields

##### `clusterModel` field

This field contains a number of sub-fields of interest:

- `algorithmType`—The algorithm that was selected as “best”.
- `numClusters`—The number of generated clusters.

##### `clusterCentroids` field

This field contains a list of the generated clusters. Each cluster begins with the `dataSampleIndex` and `uniqueID` fields, which contain the cluster ID.

##### `dataSampleIndex` (cluster) field

This field contains a number of sub-fields that describe an individual cluster:

- `centroidDistances`—Distances from the centroid point to the boundary in each dimension.
- `centroidPts`—Describes the N-dimensional center points for the cluster. For example, assuming three dimensions (X,Y, and Z), a center point (centroid) might be `{3.95, 1, 424.7}` where the centroid center is located at `x = 3.95, y = 1, z = 424.7`. You can substitute descriptive field names for X, Y, and Z for clarity. Note that since some features are not numeric (for example, `text`, `enumerated`, `T/F`) the "center" points in those dimensions represent mapped values (for example, `0 = "red", 1 = "blue", 2 = "yellow"`). For user clarity, these should be remapped back to their original features.
- `dataIndices`—The record numbers (indices) assigned to the cluster.