import { ResponsiveBar } from "@nivo/bar";

export default function Bar({ isDashboard = false }) {
  const data = [
    {
      "country": "AD",
      "hot dog": 16,
      "hot dogColor": "hsl(315, 70%, 50%)",
      "burger": 39,
      "burgerColor": "hsl(137, 70%, 50%)",
      "sandwich": 89,
      "sandwichColor": "hsl(283, 70%, 50%)",
      "kebab": 82,
      "kebabColor": "hsl(357, 70%, 50%)",
      "fries": 90,
      "friesColor": "hsl(235, 70%, 50%)",
      "donut": 143,
      "donutColor": "hsl(27, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 88,
      "hot dogColor": "hsl(328, 70%, 50%)",
      "burger": 58,
      "burgerColor": "hsl(30, 70%, 50%)",
      "sandwich": 67,
      "sandwichColor": "hsl(109, 70%, 50%)",
      "kebab": 130,
      "kebabColor": "hsl(120, 70%, 50%)",
      "fries": 113,
      "friesColor": "hsl(116, 70%, 50%)",
      "donut": 160,
      "donutColor": "hsl(211, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 105,
      "hot dogColor": "hsl(207, 70%, 50%)",
      "burger": 159,
      "burgerColor": "hsl(76, 70%, 50%)",
      "sandwich": 198,
      "sandwichColor": "hsl(170, 70%, 50%)",
      "kebab": 161,
      "kebabColor": "hsl(342, 70%, 50%)",
      "fries": 65,
      "friesColor": "hsl(105, 70%, 50%)",
      "donut": 95,
      "donutColor": "hsl(197, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 188,
      "hot dogColor": "hsl(171, 70%, 50%)",
      "burger": 48,
      "burgerColor": "hsl(145, 70%, 50%)",
      "sandwich": 96,
      "sandwichColor": "hsl(298, 70%, 50%)",
      "kebab": 170,
      "kebabColor": "hsl(208, 70%, 50%)",
      "fries": 73,
      "friesColor": "hsl(281, 70%, 50%)",
      "donut": 5,
      "donutColor": "hsl(96, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 109,
      "hot dogColor": "hsl(146, 70%, 50%)",
      "burger": 101,
      "burgerColor": "hsl(97, 70%, 50%)",
      "sandwich": 177,
      "sandwichColor": "hsl(296, 70%, 50%)",
      "kebab": 51,
      "kebabColor": "hsl(74, 70%, 50%)",
      "fries": 128,
      "friesColor": "hsl(121, 70%, 50%)",
      "donut": 137,
      "donutColor": "hsl(44, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 182,
      "hot dogColor": "hsl(315, 70%, 50%)",
      "burger": 94,
      "burgerColor": "hsl(118, 70%, 50%)",
      "sandwich": 86,
      "sandwichColor": "hsl(353, 70%, 50%)",
      "kebab": 173,
      "kebabColor": "hsl(228, 70%, 50%)",
      "fries": 199,
      "friesColor": "hsl(120, 70%, 50%)",
      "donut": 175,
      "donutColor": "hsl(65, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 52,
      "hot dogColor": "hsl(147, 70%, 50%)",
      "burger": 96,
      "burgerColor": "hsl(131, 70%, 50%)",
      "sandwich": 42,
      "sandwichColor": "hsl(152, 70%, 50%)",
      "kebab": 136,
      "kebabColor": "hsl(26, 70%, 50%)",
      "fries": 173,
      "friesColor": "hsl(2, 70%, 50%)",
      "donut": 23,
      "donutColor": "hsl(263, 70%, 50%)"
    }
  ];

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: "orange",
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
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  )
}