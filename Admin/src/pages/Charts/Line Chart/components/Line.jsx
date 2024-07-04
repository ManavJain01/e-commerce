import { ResponsiveLine } from "@nivo/line";

export default function Line({ isCustomLineColors = false, isDashboard = false }) {
  const data = [
    {
      "id": "japan",
      "color": "hsl(91, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 216
        },
        {
          "x": "helicopter",
          "y": 155
        },
        {
          "x": "boat",
          "y": 59
        },
        {
          "x": "train",
          "y": 168
        },
        {
          "x": "subway",
          "y": 272
        },
        {
          "x": "bus",
          "y": 184
        },
        {
          "x": "car",
          "y": 78
        },
        {
          "x": "moto",
          "y": 207
        },
        {
          "x": "bicycle",
          "y": 19
        },
        {
          "x": "horse",
          "y": 184
        },
        {
          "x": "skateboard",
          "y": 97
        },
        {
          "x": "others",
          "y": 39
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(333, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 164
        },
        {
          "x": "helicopter",
          "y": 222
        },
        {
          "x": "boat",
          "y": 252
        },
        {
          "x": "train",
          "y": 297
        },
        {
          "x": "subway",
          "y": 9
        },
        {
          "x": "bus",
          "y": 139
        },
        {
          "x": "car",
          "y": 202
        },
        {
          "x": "moto",
          "y": 300
        },
        {
          "x": "bicycle",
          "y": 40
        },
        {
          "x": "horse",
          "y": 0
        },
        {
          "x": "skateboard",
          "y": 121
        },
        {
          "x": "others",
          "y": 123
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(113, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 300
        },
        {
          "x": "helicopter",
          "y": 244
        },
        {
          "x": "boat",
          "y": 11
        },
        {
          "x": "train",
          "y": 14
        },
        {
          "x": "subway",
          "y": 64
        },
        {
          "x": "bus",
          "y": 23
        },
        {
          "x": "car",
          "y": 143
        },
        {
          "x": "moto",
          "y": 142
        },
        {
          "x": "bicycle",
          "y": 48
        },
        {
          "x": "horse",
          "y": 3
        },
        {
          "x": "skateboard",
          "y": 72
        },
        {
          "x": "others",
          "y": 52
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(169, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 166
        },
        {
          "x": "helicopter",
          "y": 8
        },
        {
          "x": "boat",
          "y": 7
        },
        {
          "x": "train",
          "y": 168
        },
        {
          "x": "subway",
          "y": 53
        },
        {
          "x": "bus",
          "y": 33
        },
        {
          "x": "car",
          "y": 87
        },
        {
          "x": "moto",
          "y": 117
        },
        {
          "x": "bicycle",
          "y": 184
        },
        {
          "x": "horse",
          "y": 273
        },
        {
          "x": "skateboard",
          "y": 103
        },
        {
          "x": "others",
          "y": 49
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(172, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 262
        },
        {
          "x": "helicopter",
          "y": 77
        },
        {
          "x": "boat",
          "y": 116
        },
        {
          "x": "train",
          "y": 299
        },
        {
          "x": "subway",
          "y": 124
        },
        {
          "x": "bus",
          "y": 58
        },
        {
          "x": "car",
          "y": 95
        },
        {
          "x": "moto",
          "y": 189
        },
        {
          "x": "bicycle",
          "y": 256
        },
        {
          "x": "horse",
          "y": 185
        },
        {
          "x": "skateboard",
          "y": 111
        },
        {
          "x": "others",
          "y": 161
        }
      ]
    }
  ]
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#777777",
            },
          },
          legend: {
            text: {
              fill: "#777777",
            },
          },
          ticks: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
            text: {
              fill: "#777777",
            },
          },
        },
        legends: {
          text: {
            fill: "#777777",
          },
        },
        tooltip: {
          container: {
            color: "#777777",
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}