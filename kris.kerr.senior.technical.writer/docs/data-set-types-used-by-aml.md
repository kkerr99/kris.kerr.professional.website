---
title: Data set types used by AML
description: Describes how data files used by AML must be tagged
keywords:
    - data
    - set
    - type
    - tag
    - file
---

A data file used by AML must be tagged as one of the following types. You assign a file type tag when you upload the file.

## Generic training

This file type can contain almost any kind of data useful for machine learning, and is generally used for a non-PR model. However, any file can be tagged as `Generic Training`.

## Product/Offer data

This file type contains product attributes, which are keywords associated with each product ID. It is usually used for a PR model.

Only a file tagged as `Product/Offer data` can be used as the product file in a PR model.

## Customer data

This file type contains customer history and/or customer preference data. It is usually used for a PR model.

*Customer history data* are product IDs associated with a customer ID. Generally, this is a list of transactions showing products the customer has purchased.

*Customer preference data* are keywords or product IDs associated with each customer ID. Generally, this is a list of preferences or products associated with a customer, often assumptions based on the customer's behavior or self-identified traits.

Only a file tagged as `Customer data` can be used as the customer file in a PR model.