---
title: General thoughts on project data files and features
description: A deep-diving discussion on project data files and features
keywords:
    - features
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

A predictive model is simply a function that maps input features to some desired output feature(s). That’s it. Regardless of whether a model uses machine learning techniques, is constructed manually, or is merely a guess, it is only a data map.

In an ideal world, input features are always causally related to the outputs. For example, in a perfect world the action of "a customer buys bread, peanut butter, and jelly" always causes the creation (output result) of a peanut butter and jelly sandwich. However, there is a large gap between causation and correlation. In the real world, the best that can be typically done is to find input features that are correlated with predicted outputs. In the real world, the action of "a customer buys bread, peanut butter, and jelly" is strongly correlated with the output of a peanut butter sandwich, but some customers may make peanut butter toast, and eat jelly with a spoon (or some variation thereof). Various studies have indicated the presence of a full moon to be correlated with an increase in crime. This does not necessarily mean that a full moon causes more crime to happen. If they actually are correlated, moon phases could, however, be potentially useful as a predictive input feature when constructing a model to predict crime statistics.

In general, the best input features are descriptors of some underlying process or relationship. Descriptors include:

- colors
- weights
- sizes
- amounts
- memberships
- relationships
- product categories
- product types
- ...and so on

These values can be text, numeric, or boolean, but generally not date/time stamps unless they are converted to another numeric form (for example, number of days since a starting time).

Names, especially personal names (for example, Bruce Banner, Wanda Maximoff, or Peter Quill) are an example of personally identifiable information (PII). PII is generally understood as a collection of sensitive material which, taken together, would be sufficient to locate, contact, or otherwise identify a single person. PII data is subject to extensive regulation in the United States (which varies by state), the European Union (under the umbrella of the General Data Protection Regulation, or GDPR), and many other countries. Due to its sensitivity, PII should never be included in a model. Filter out all PII fields from a data set before you upload it to AML. Beyond that consideration, names are generally considered identifiers instead of descriptors. As such they have very limited use as input features for predictive models. To illustrate, it wouldn’t make sense to decide what marketing offer an individual gets based on their name. (All people named "Peggy" get a 25% discount, but all people named "Hank" only get a 15% discount).

Since at the lowest level computers process numbers, the relative relationships between the values of these numbers is very important to the modeling process. As with personal names, addresses are also identifiers and generally not well-suited for use as input features. However, state names (for example, MA, NE, or AZ), region codes (for example, NW, SE, or SW), and 5-digit ZIP codes could be used as input features if they potentially contain relationship information to the desired output prediction.