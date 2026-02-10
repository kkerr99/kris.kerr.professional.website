---
title: Chart widget
description: Describes the Chart widget

---

Use the Chart widget to display a chart using data from a database. Data-controlled charting allows external data sources to not only submit data for reporting but control exactly how the data will be displayed using a standard JSON format. Both push and pull data submission are supported.

More information on acceptable JSON formats is available [here](https://www.amcharts.com/docs/v4/concepts/json-config/).

## Chart widget selection dialog

![Chart widget selection dialog](/img/chart-overview-widget-selection-dialog.png "Chart widget selection dialog")

## Chart widget configuration dialog

![Chart widget Configuration dialog](/img/chart-configuration-dialog.png "Chart widget Configuration dialog")

### Data Source

On the **Data Source** pulldown menu, you can select the source of the chart JSON code:

**URL**--You must enter an associated external **URL** from which the JSON code is pulled.

**Data Key**--You must provide **Data Store Name** and **Data Key** values. An external service must first push data to the data store (at the data store's associated data key value) using rgOne's data store API. The chart can then use the data source's key to retrieve the JSON code.

### Test JSON

If **Test Mode** is selected, enter JSON code into the associated code box. The widget will use this test code to render the chart. 

If **Test Mode** is not selected, the widget uses code from the given data source to render the chart.

## Chart widget rendering

![Chart widget rendering](/img/chart-widget-rendering.png "Chart widget rendering")

For the previous chart, the **Test Mode** option was selected and the following JSON code was entered into the **Test Mode** code box:

```
{ 
  "colors" : { 
    "list" : [ 
      "#F6AF76",
      "#E87146",
      "#BA2C33",
      "#57403D",
      "#755D4D",
      "#9F7E62",
      "#CFA988",
      "#A34334"
    ]
  },
  "data" : [ 
    { 
      "country" : "Lithuania",
      "pie" : [ 
        { 
          "title" : "Cat #1",
          "value" : 305
        },
        { 
          "title" : "Cat #2",
          "value" : 208
        },
        { 
          "title" : "Cat #3",
          "value" : 166
        }
      ],
      "units" : 679
    },
    { 
      "country" : "Czechia",
      "pie" : [ 
        { 
          "title" : "Cat #1",
          "value" : 411
        },
        { 
          "title" : "Cat #2",
          "value" : 218
        },
        { 
          "title" : "Cat #3",
          "value" : 106
        }
      ],
      "units" : 735
    },
    { 
      "country" : "Ireland",
      "pie" : [ 
        { 
          "title" : "Cat #1",
          "value" : 131
        },
        { 
          "title" : "Cat #2",
          "value" : 450
        },
        { 
          "title" : "Cat #3",
          "value" : 364
        }
      ],
      "units" : 945
    }
  ],
  "hiddenState" : { 
    "properties" : { 
      "opacity" : 0
    }
  },
  "series" : [ 
    { 
      "columns" : { 
        "children" : [ 
          { 
            "align" : "center",
            "dataFields" : { 
              "data" : "pie"
            },
            "forceCreate" : "true",
            "height" : "80%",
            "series" : [ 
              { 
                "colors" : { 
                  "list" : [ 
                    "#CF618A",
                    "#9CB759",
                    "#8D7B68",
                    "#D8C854",
                    "#D87EAE",
                    "#77A563",
                    "#998F90",
                    "#D3A2A8"
                  ]
                },
                "dataFields" : { 
                  "category" : "title",
                  "value" : "value"
                },
                "hiddenState" : { 
                  "properties" : { 
                    "endAngle" : 270,
                    "startAngle" : -90
                  }
                },
                "labels" : { 
                  "disabled" : "true"
                },
                "slices" : { 
                  "stroke" : "#ffffff",
                  "strokeOpacity" : 0,
                  "strokeWidth" : 1
                },
                "ticks" : { 
                  "disabled" : "true"
                },
                "type" : "PieSeries"
              }
            ],
            "type" : "PieChart",
            "valign" : "middle",
            "width" : "80%"
          }
        ],
        "column" : { 
          "cornerRadiusTopLeft" : 20,
          "cornerRadiusTopRight" : 20,
          "tooltipText" : "Series: {name}\nCategory: {categoryX}\nValue: {valueY}",
          "tooltipY" : 0
        },
        "strokeOpacity" : 0
      },
      "dataFields" : { 
        "categoryX" : "country",
        "valueY" : "units"
      },
      "tooltip" : { 
        "pointerOrientation" : "vertical"
      },
      "type" : "ColumnSeries"
    }
  ],
  "xAxes" : [ 
    { 
      "dataFields" : { 
        "category" : "country"
      },
      "renderer" : { 
        "grid" : { 
          "disabled" : "true"
        }
      },
      "type" : "CategoryAxis"
    }
  ],
  "yAxes" : [ 
    { 
      "min" : 0,
      "renderer" : { 
        "baseGrid" : { 
          "disabled" : "true"
        },
        "grid" : { 
          "strokeOpacity" : 0.0700
        }
      },
      "title" : { 
        "text" : "Units sold (M)"
      },
      "type" : "ValueAxis"
    }
  ]
}
```