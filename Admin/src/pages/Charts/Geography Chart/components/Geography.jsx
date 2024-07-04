import { ResponsiveChoropleth } from "@nivo/geo";

// Importing local files
import { geoFeatures } from './geoFeatures'

export default function Geography({ isDashboard = false }) {
  const data = [
    {
      "id": "AFG",
      "value": 873560
    },
    {
      "id": "AGO",
      "value": 184410
    },
    {
      "id": "ALB",
      "value": 615550
    },
    {
      "id": "ARE",
      "value": 604444
    },
    {
      "id": "ARG",
      "value": 316169
    },
    {
      "id": "ARM",
      "value": 439241
    },
    {
      "id": "ATA",
      "value": 743992
    },
    {
      "id": "ATF",
      "value": 925701
    },
    {
      "id": "AUT",
      "value": 463817
    },
    {
      "id": "AZE",
      "value": 78667
    },
    {
      "id": "BDI",
      "value": 286299
    },
    {
      "id": "BEL",
      "value": 798610
    },
    {
      "id": "BEN",
      "value": 981419
    },
    {
      "id": "BFA",
      "value": 906763
    },
    {
      "id": "BGD",
      "value": 616440
    },
    {
      "id": "BGR",
      "value": 753048
    },
    {
      "id": "BHS",
      "value": 353589
    },
    {
      "id": "BIH",
      "value": 319657
    },
    {
      "id": "BLR",
      "value": 444434
    },
    {
      "id": "BLZ",
      "value": 654996
    },
    {
      "id": "BOL",
      "value": 665700
    },
    {
      "id": "BRN",
      "value": 604101
    },
    {
      "id": "BTN",
      "value": 450561
    },
    {
      "id": "BWA",
      "value": 494535
    },
    {
      "id": "CAF",
      "value": 516819
    },
    {
      "id": "CAN",
      "value": 5472
    },
    {
      "id": "CHE",
      "value": 414818
    },
    {
      "id": "CHL",
      "value": 918728
    },
    {
      "id": "CHN",
      "value": 569840
    },
    {
      "id": "CIV",
      "value": 503523
    },
    {
      "id": "CMR",
      "value": 89319
    },
    {
      "id": "COG",
      "value": 411058
    },
    {
      "id": "COL",
      "value": 666192
    },
    {
      "id": "CRI",
      "value": 610237
    },
    {
      "id": "CUB",
      "value": 730089
    },
    {
      "id": "-99",
      "value": 149499
    },
    {
      "id": "CYP",
      "value": 607669
    },
    {
      "id": "CZE",
      "value": 625936
    },
    {
      "id": "DEU",
      "value": 779699
    },
    {
      "id": "DJI",
      "value": 213024
    },
    {
      "id": "DNK",
      "value": 204857
    },
    {
      "id": "DOM",
      "value": 819104
    },
    {
      "id": "DZA",
      "value": 424327
    },
    {
      "id": "ECU",
      "value": 101179
    },
    {
      "id": "EGY",
      "value": 200004
    },
    {
      "id": "ERI",
      "value": 374496
    },
    {
      "id": "ESP",
      "value": 399472
    },
    {
      "id": "EST",
      "value": 909110
    },
    {
      "id": "ETH",
      "value": 538667
    },
    {
      "id": "FIN",
      "value": 747043
    },
    {
      "id": "FJI",
      "value": 2210
    },
    {
      "id": "FLK",
      "value": 248943
    },
    {
      "id": "FRA",
      "value": 453146
    },
    {
      "id": "GAB",
      "value": 539732
    },
    {
      "id": "GBR",
      "value": 870270
    },
    {
      "id": "GEO",
      "value": 486930
    },
    {
      "id": "GHA",
      "value": 494549
    },
    {
      "id": "GIN",
      "value": 519348
    },
    {
      "id": "GMB",
      "value": 85037
    },
    {
      "id": "GNB",
      "value": 229865
    },
    {
      "id": "GNQ",
      "value": 751759
    },
    {
      "id": "GRC",
      "value": 930961
    },
    {
      "id": "GTM",
      "value": 683822
    },
    {
      "id": "GUY",
      "value": 391933
    },
    {
      "id": "HND",
      "value": 34838
    },
    {
      "id": "HRV",
      "value": 564501
    },
    {
      "id": "HTI",
      "value": 601966
    },
    {
      "id": "HUN",
      "value": 961293
    },
    {
      "id": "IDN",
      "value": 304271
    },
    {
      "id": "IND",
      "value": 556026
    },
    {
      "id": "IRL",
      "value": 640438
    },
    {
      "id": "IRN",
      "value": 851819
    },
    {
      "id": "IRQ",
      "value": 232873
    },
    {
      "id": "ISL",
      "value": 676137
    },
    {
      "id": "ISR",
      "value": 585135
    },
    {
      "id": "ITA",
      "value": 180721
    },
    {
      "id": "JAM",
      "value": 876025
    },
    {
      "id": "JOR",
      "value": 596181
    },
    {
      "id": "JPN",
      "value": 632429
    },
    {
      "id": "KAZ",
      "value": 673113
    },
    {
      "id": "KEN",
      "value": 445450
    },
    {
      "id": "KGZ",
      "value": 664347
    },
    {
      "id": "KHM",
      "value": 198531
    },
    {
      "id": "OSA",
      "value": 806457
    },
    {
      "id": "KWT",
      "value": 52843
    },
    {
      "id": "LAO",
      "value": 147557
    },
    {
      "id": "LBN",
      "value": 411521
    },
    {
      "id": "LBR",
      "value": 649129
    },
    {
      "id": "LBY",
      "value": 915375
    },
    {
      "id": "LKA",
      "value": 355590
    },
    {
      "id": "LSO",
      "value": 282955
    },
    {
      "id": "LTU",
      "value": 55159
    },
    {
      "id": "LUX",
      "value": 477015
    },
    {
      "id": "LVA",
      "value": 347853
    },
    {
      "id": "MAR",
      "value": 981332
    },
    {
      "id": "MDA",
      "value": 285421
    },
    {
      "id": "MDG",
      "value": 405370
    },
    {
      "id": "MEX",
      "value": 529211
    },
    {
      "id": "MKD",
      "value": 323686
    },
    {
      "id": "MLI",
      "value": 189242
    },
    {
      "id": "MMR",
      "value": 962461
    },
    {
      "id": "MNE",
      "value": 377243
    },
    {
      "id": "MNG",
      "value": 9911
    },
    {
      "id": "MOZ",
      "value": 882261
    },
    {
      "id": "MRT",
      "value": 798318
    },
    {
      "id": "MWI",
      "value": 616912
    },
    {
      "id": "MYS",
      "value": 316384
    },
    {
      "id": "NAM",
      "value": 533342
    },
    {
      "id": "NCL",
      "value": 806360
    },
    {
      "id": "NER",
      "value": 789272
    },
    {
      "id": "NGA",
      "value": 382963
    },
    {
      "id": "NIC",
      "value": 823001
    },
    {
      "id": "NLD",
      "value": 186896
    },
    {
      "id": "NOR",
      "value": 713852
    },
    {
      "id": "NPL",
      "value": 347553
    },
    {
      "id": "NZL",
      "value": 266860
    },
    {
      "id": "OMN",
      "value": 731856
    },
    {
      "id": "PAK",
      "value": 883671
    },
    {
      "id": "PAN",
      "value": 755296
    },
    {
      "id": "PER",
      "value": 299603
    },
    {
      "id": "PHL",
      "value": 811345
    },
    {
      "id": "PNG",
      "value": 502587
    },
    {
      "id": "POL",
      "value": 309300
    },
    {
      "id": "PRI",
      "value": 503228
    },
    {
      "id": "PRT",
      "value": 912012
    },
    {
      "id": "PRY",
      "value": 808252
    },
    {
      "id": "QAT",
      "value": 467298
    },
    {
      "id": "ROU",
      "value": 646881
    },
    {
      "id": "RUS",
      "value": 634082
    },
    {
      "id": "RWA",
      "value": 365505
    },
    {
      "id": "ESH",
      "value": 362608
    },
    {
      "id": "SAU",
      "value": 766642
    },
    {
      "id": "SDN",
      "value": 223219
    },
    {
      "id": "SDS",
      "value": 293463
    },
    {
      "id": "SEN",
      "value": 132797
    },
    {
      "id": "SLB",
      "value": 734986
    },
    {
      "id": "SLE",
      "value": 519872
    },
    {
      "id": "SLV",
      "value": 333149
    },
    {
      "id": "ABV",
      "value": 648816
    },
    {
      "id": "SOM",
      "value": 523731
    },
    {
      "id": "SRB",
      "value": 251762
    },
    {
      "id": "SUR",
      "value": 119726
    },
    {
      "id": "SVK",
      "value": 427534
    },
    {
      "id": "SVN",
      "value": 866867
    },
    {
      "id": "SWZ",
      "value": 592726
    },
    {
      "id": "SYR",
      "value": 988305
    },
    {
      "id": "TCD",
      "value": 137126
    },
    {
      "id": "TGO",
      "value": 795221
    },
    {
      "id": "THA",
      "value": 430765
    },
    {
      "id": "TJK",
      "value": 388538
    },
    {
      "id": "TKM",
      "value": 27
    },
    {
      "id": "TLS",
      "value": 359813
    },
    {
      "id": "TTO",
      "value": 386406
    },
    {
      "id": "TUN",
      "value": 429046
    },
    {
      "id": "TUR",
      "value": 604544
    },
    {
      "id": "TWN",
      "value": 513566
    },
    {
      "id": "TZA",
      "value": 811661
    },
    {
      "id": "UGA",
      "value": 592022
    },
    {
      "id": "UKR",
      "value": 600429
    },
    {
      "id": "URY",
      "value": 481792
    },
    {
      "id": "USA",
      "value": 95398
    },
    {
      "id": "UZB",
      "value": 225917
    },
    {
      "id": "VEN",
      "value": 938794
    },
    {
      "id": "VNM",
      "value": 204677
    },
    {
      "id": "VUT",
      "value": 990761
    },
    {
      "id": "PSE",
      "value": 463672
    },
    {
      "id": "YEM",
      "value": 785790
    },
    {
      "id": "ZAF",
      "value": 977810
    },
    {
      "id": "ZMB",
      "value": 372606
    },
    {
      "id": "ZWE",
      "value": 422065
    },
    {
      "id": "KOR",
      "value": 789184
    }
  ]

  return (
    <ResponsiveChoropleth
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
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#777777",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  )
}