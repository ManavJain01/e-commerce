import { ResponsivePie } from "@nivo/pie";

export default function pie() {
  const data = [
    {
      "id": "c",
      "label": "c",
      "value": 12,
      "color": "hsl(9, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 77,
      "color": "hsl(269, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 388,
      "color": "hsl(55, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 60,
      "color": "hsl(15, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 520,
      "color": "hsl(331, 70%, 50%)"
    }
  ]

  return (
    <ResponsivePie
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
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={"#777777"}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  )
}