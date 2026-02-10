---
title: Channel Overview widget
description: Describes the Channel Overview widget

---

Use the Channel Overview widget to display collected metrics for any Campaign Creation delivery method.

## Channel Overview widget selection dialog

![Channel Overview widget selection dialog](/img/channel-overview-widget-selection-dialog.png "Channel Overview widget selection dialog")

## Channel Overview widget configuration dialog

![Channel Overview widget Configuration dialog](/img/channel-overview-widget-configuration.png "Channel Overview widget Configuration dialog")

### Channel
The Campaign Creation channel from which to display metrics.

### Filter on Interaction (OPTIONAL)
Filter the metrics based on a specific interaction.

### Filter on Offer (OPTIONAL)
Filter the metrics based on a specific offer.

### Display Results As
Choose to display a chart, an Insight Legend, or both.

### Show Last
The time period from which to display collected metrics. Enter a numeric value and select a time unit.

### Color Theme
Select a color palette for the rendered chart.

### Metric Configuration
Use this section to add, delete, and configure metrics for a given channel.

![Metric Configuration section](/img/channel-overview-widget-configuration-metric-configuration.png "Metric Configuration section")

Every metric has a **2nd Axis** checkbox. Selecting this option for a metric annotates a 2nd y-axis on the right side of the graph. The values chosen for that axis are scaled to the selected metric. This is a useful option if you have two metrics with values that are orders of magnitude apart, but you want to show both metrics in same chart.

For example, if one metric is emails **Sent** (with 10k+ values on left axis) and another is emails **Opened** (with only hundreds of values), it would make sense to select **2nd Axis** for the emails **Opened** metric, so you could easily compare values for both metrics.

The **Test Mode** option uses test data for the widget rendering and helps you evaluate visualization options before production data is available.


## Channel Overview widget rendering

![Channel Overview widget rendering](/img/channel-overview-widget-rendering.png "Channel Overview widget rendering")