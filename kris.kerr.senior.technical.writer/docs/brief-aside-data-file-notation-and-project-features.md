---
title: A brief aside about data file notation and project features
description: A brief discussion about data file notation and project features
keywords:
    - data
    - file
    - notation
    - project
    - feature
---

Data files using the `.csv` format (the kind of data files that AML uses) contain one or more records, with each record containing one or more fields. If you look at such a data file in a text editor, each row corresponds to an individual record, and the columns correspond to fields within the records.

For an AML project, we add a data file that provides:

- Input (independent) values. In ML/AI, these fields are known as *input features*. You can define one or more input features.
- Predicted  output (dependent) values. In ML/AI, these fields are known as *output features*. For a given record, this is the output value(s) based upon the given input value(s). You can define zero or more output features (zero, if the project type does not generate output features, one in the case of a Classification project).

    During training, the values in the output fields are used for supervised learning. That is, the project predicts the output value(s) based upon the input value(s), and the file output value(s) are used to determine if the project's output prediction(s) are correct.

    After training, a user selects one of the project solutions and publishes it (turns it into a model). When a user calls the model, the user submits only the input field(s), and the model returns the predicted output(s) for the given set of input(s).

When thinking about a project's features, we recommend that you first decide which field(s) to use as the output feature(s). This is the most important decision you will make during the project configuration process because this decision ultimately decides what the model will be used for.

Once the output feature(s) are set, you will generally not change this mapping between different versions of the model. However, you may significantly change the mapping of file fields to input features between versions of a model as you see which inputs have the most influence on the output.

For more guidance on selecting output and input features, refer to [Features overview](features-overview).