---
title: Regression model example
description: Explains how to build a Regression model
keywords:
    - regression
    - model
    - build
---

## Overview

This sample project creates a Regression model that predicts the city MPG value for a given vehicle, based on input features such as number of engine cylinders, engine size, and engine horsepower.

## To build an example Regression model

### Download the example project data file to your machine

1. Download this `.zip` file to your local machine:
    https://rpgcdnfiles.blob.core.windows.net/aml/aml-model-example-data-files.zip
2. Open the `.zip` file and save `regression-example-data-file.csv` to your local machine.

### Create a new project

[Create a new Regression model project](steps-for-building-a-project) with the following values:
- Project name: "ExampleRegressionModel".
- Project description: "Basic Regression model" (optional).
- Use the default category value **General**.

### Upload your data

[Upload the file](file-upload-methods) `regression-example-data-file.csv` to AML and add it as your project input data file.

### [Select the output feature](choosing-output-features) 

The purpose of this project is to predict (using input features such as a vehicle’s number of engine cylinders, engine size, and engine horsepower) a vehicle’s city MPG fuel consumption.

For this project, the output feature is:

- `cityMPG`

### [Select the input features](choosing-input-features-for-most-model-types)

For this project, the input features are:

- `engineCylinders`
- `engineSize`
- `engineType`
- `horsepower`
- `peakRPM`
- `weight`

### Train the project

[Train the project](training-a-project) using the default values for the other project sections.

### Analyze the project results

You can view the project's [Fitness report](analyzing-a-projects-training-results) and [Solutions page](publishing-a-solution).