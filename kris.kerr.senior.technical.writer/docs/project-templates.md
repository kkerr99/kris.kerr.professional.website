---
title: Project templates
description: Describes AML project templates
keywords:
    - template
---

You can configure an AML project by selecting from a list of business problems you want to solve. Each of these templates is optimized to solve a specific problem, such as "predict customer sales" or "predict yearly/monthly spend". When you select a business problem, AML automatically creates a project, chooses the best machine learning model, and chooses initial project settings to get you started quickly.

The project templates are:

## Anomaly Detection

Predict expected characteristics (sales quantity, data throughput times, network activity, and so on) and apply subsequent thresholds to the predicted results to detect significant deviations (for example, 2-sigma over/under prediction).

Input features typically may consist of process control parameters (for example, temperature, pressure, time of day, web page hits, DB hits) and other monitored operating environmental conditions.

## Predict Best Message Channel

Based on the historical behavior exhibited for each customer's interactivity with the company, predict the channel with the highest probability of response.

Input features typically consist of demographic info, previous purchases, purchase frequency, purchase prices (avg, median, min, max), message channel, discount, purchase recency, and so on.

The (discrete) message channel to predict should be contained in the set of known (previous) responses to messages on the set of channels used in the historical data, without inclusion of a "none-of-the-above" enumeration option.

## Predict Best Message Content

Based on the historical behavior exhibited for each customer's interactivity with the company, predict the message content with the highest probability of response.

Input features typically consist of demographic info, previous purchases, purchase frequency, purchase prices (avg, median, min, max), message channel, discount, purchase recency, and so on. The (discrete) message content to predict should be contained in the set of known (previous) responses to messages, without inclusion of a "none-of-the-above" enumeration option.

## Predict Customer Retention/Attrition

Based on historical behaviors, predict the probability of a customer being retained (that is, likely to repeat previous behaviors).

Input features typically consist of demographic info, previous purchases, purchase frequency, purchase prices (avg, median, min, max), message channel, discount, purchase recency, and so on.

**Note:** Likelihood for churn (attrition) can be easily predicted by inversely ranking the attrition candidates (that is, probability of attrition = 1 - probability of retention).

## Predict Customer Sales

Based on historical behavior (spending patterns, time differentials between purchases during a specified timeframe), predict the amount of money the customer will spend relative to an expected timeframe (for example, week, month, year).

Input features are typically similar to those used in predicting attrition/retention.

## Predict Likelihood to Rebook

Based on historical behaviors, predict the probability of a customer rebooking (for example, likely to repeat previous bookings to a hotel, residence, or other property).

Input features typically consist of demographic info, previous purchases, purchase frequency, purchase prices (avg, median, min, max), message channel, discount, purchase recency, and so on.

## Predict Time to Next Purchase

Based on historical behavior (differentials between purchases during a specified timeframe), predict time before the customer will purchase something (spend).

Input features are typically similar to those used in predicting attrition/retention.

## Predict Yearly/Monthly Spend

Based on historical behavior (amount spent during a specified timeframe), predict the customer spend for the next desired timeframe.

Input features are typically similar to those used in predicting attrition/retention.

## Segment Customer Behaviors

Assign groups/segments/clusters based on similarities within the data features.

Clusters represent membership within specific groupings based on these similarities.

Input features typically consist of demographic info, previous purchases, purchase frequency, purchase prices (avg, median, min, max), message channel, discount, purchase recency, and so on.

Predicted clusters can be used (post-analysis) to drive marketing messaging and offers, as well as derive insight into inter-segment and intra-segment differences.

## Segment Customer Demographics

Clusters represent membership within specific groupings based on these similarities.

Input features typically consist of demographic info, previous purchases, purchase frequency, purchase prices (avg, median, min, max), message channel, discount, purchase recency, and so on.

Predicted clusters can be used (post-analysis) to drive marketing messaging and offers, as well as derive insight into inter-segment and intra-segment differences.