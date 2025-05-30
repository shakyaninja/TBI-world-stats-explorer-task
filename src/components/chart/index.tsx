// @ts-nocheck
import React, { useEffect, useLayoutEffect, useState } from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import fs, { ReadStream } from 'fs';

const WorldChart = () => {

    const [data, setData] = useState<Array<WorldStatDataType>>([
        {
            "Country": "United States",
            "Region": "Alabama",
            "RandomValue": 1
        },
        {
            "Country": "United States",
            "Region": "Alaska",
            "RandomValue": 0
        },
        {
            "Country": "United States",
            "Region": "Arizona",
            "RandomValue": 2
        },
        {
            "Country": "United States",
            "Region": "California",
            "RandomValue": 1
        },
        {
            "Country": "United States",
            "Region": "Colorado",
            "RandomValue": 0
        },
        {
            "Country": "United States",
            "Region": "Florida",
            "RandomValue": 2
        },
        {
            "Country": "United States",
            "Region": "New York",
            "RandomValue": 1
        },
        {
            "Country": "United States",
            "Region": "Texas",
            "RandomValue": 0
        },
        {
            "Country": "United Kingdom",
            "Region": "England",
            "RandomValue": 2
        },
        {
            "Country": "United Kingdom",
            "Region": "Scotland",
            "RandomValue": 1
        },
        {
            "Country": "United Kingdom",
            "Region": "Wales",
            "RandomValue": 0
        },
        {
            "Country": "United Kingdom",
            "Region": "Northern Ireland",
            "RandomValue": 2
        },
        {
            "Country": "Canada",
            "Region": "Alberta",
            "RandomValue": 1
        },
        {
            "Country": "Canada",
            "Region": "British Columbia",
            "RandomValue": 0
        },
        {
            "Country": "Canada",
            "Region": "Ontario",
            "RandomValue": 2
        },
        {
            "Country": "Canada",
            "Region": "Quebec",
            "RandomValue": 1
        },
        {
            "Country": "Canada",
            "Region": "Nova Scotia",
            "RandomValue": 0
        },
        {
            "Country": "Australia",
            "Region": "New South Wales",
            "RandomValue": 2
        },
        {
            "Country": "Australia",
            "Region": "Queensland",
            "RandomValue": 1
        },
        {
            "Country": "Australia",
            "Region": "Victoria",
            "RandomValue": 0
        },
        {
            "Country": "Australia",
            "Region": "Western Australia",
            "RandomValue": 2
        },
        {
            "Country": "Australia",
            "Region": "South Australia",
            "RandomValue": 1
        },
        {
            "Country": "Germany",
            "Region": "Bavaria",
            "RandomValue": 0
        },
        {
            "Country": "Germany",
            "Region": "Berlin",
            "RandomValue": 2
        },
        {
            "Country": "Germany",
            "Region": "Hamburg",
            "RandomValue": 1
        },
        {
            "Country": "Germany",
            "Region": "Hesse",
            "RandomValue": 0
        },
        {
            "Country": "Germany",
            "Region": "North Rhine-Westphalia",
            "RandomValue": 2
        },
        {
            "Country": "France",
            "Region": "Brittany",
            "RandomValue": 1
        },
        {
            "Country": "France",
            "Region": "Grand Est",
            "RandomValue": 0
        },
        {
            "Country": "France",
            "Region": "Île-de-France",
            "RandomValue": 2
        },
        {
            "Country": "France",
            "Region": "Normandy",
            "RandomValue": 1
        },
        {
            "Country": "France",
            "Region": "Provence-Alpes-Côte d'Azur",
            "RandomValue": 0
        },
        {
            "Country": "Japan",
            "Region": "Hokkaido",
            "RandomValue": 2
        },
        {
            "Country": "Japan",
            "Region": "Tokyo",
            "RandomValue": 1
        },
        {
            "Country": "Japan",
            "Region": "Osaka",
            "RandomValue": 0
        },
        {
            "Country": "Japan",
            "Region": "Kyoto",
            "RandomValue": 2
        },
        {
            "Country": "Japan",
            "Region": "Okinawa",
            "RandomValue": 1
        },
        {
            "Country": "China",
            "Region": "Beijing",
            "RandomValue": 0
        },
        {
            "Country": "China",
            "Region": "Guangdong",
            "RandomValue": 2
        },
        {
            "Country": "China",
            "Region": "Shanghai",
            "RandomValue": 1
        },
        {
            "Country": "China",
            "Region": "Sichuan",
            "RandomValue": 0
        },
        {
            "Country": "China",
            "Region": "Zhejiang",
            "RandomValue": 2
        },
        {
            "Country": "India",
            "Region": "Maharashtra",
            "RandomValue": 1
        },
        {
            "Country": "India",
            "Region": "Uttar Pradesh",
            "RandomValue": 0
        },
        {
            "Country": "India",
            "Region": "Tamil Nadu",
            "RandomValue": 2
        },
        {
            "Country": "India",
            "Region": "Karnataka",
            "RandomValue": 1
        },
        {
            "Country": "India",
            "Region": "Gujarat",
            "RandomValue": 0
        },
        {
            "Country": "Brazil",
            "Region": "São Paulo",
            "RandomValue": 2
        },
        {
            "Country": "Brazil",
            "Region": "Rio de Janeiro",
            "RandomValue": 1
        },
        {
            "Country": "Brazil",
            "Region": "Minas Gerais",
            "RandomValue": 0
        },
        {
            "Country": "Brazil",
            "Region": "Bahia",
            "RandomValue": 2
        },
        {
            "Country": "Brazil",
            "Region": "Rio Grande do Sul",
            "RandomValue": 1
        },
        {
            "Country": "Mexico",
            "Region": "Mexico City",
            "RandomValue": 0
        },
        {
            "Country": "Mexico",
            "Region": "Jalisco",
            "RandomValue": 2
        },
        {
            "Country": "Mexico",
            "Region": "Nuevo León",
            "RandomValue": 1
        },
        {
            "Country": "Mexico",
            "Region": "Veracruz",
            "RandomValue": 0
        },
        {
            "Country": "Mexico",
            "Region": "Puebla",
            "RandomValue": 2
        },
        {
            "Country": "Russia",
            "Region": "Moscow",
            "RandomValue": 1
        },
        {
            "Country": "Russia",
            "Region": "Saint Petersburg",
            "RandomValue": 0
        },
        {
            "Country": "Russia",
            "Region": "Novosibirsk",
            "RandomValue": 2
        },
        {
            "Country": "Russia",
            "Region": "Yekaterinburg",
            "RandomValue": 1
        },
        {
            "Country": "Russia",
            "Region": "Kazan",
            "RandomValue": 0
        },
        {
            "Country": "Italy",
            "Region": "Lombardy",
            "RandomValue": 2
        },
        {
            "Country": "Italy",
            "Region": "Lazio",
            "RandomValue": 1
        },
        {
            "Country": "Italy",
            "Region": "Campania",
            "RandomValue": 0
        },
        {
            "Country": "Italy",
            "Region": "Sicily",
            "RandomValue": 2
        },
        {
            "Country": "Italy",
            "Region": "Veneto",
            "RandomValue": 1
        },
        {
            "Country": "Spain",
            "Region": "Andalusia",
            "RandomValue": 0
        },
        {
            "Country": "Spain",
            "Region": "Catalonia",
            "RandomValue": 2
        },
        {
            "Country": "Spain",
            "Region": "Madrid",
            "RandomValue": 1
        },
        {
            "Country": "Spain",
            "Region": "Valencia",
            "RandomValue": 0
        },
        {
            "Country": "Spain",
            "Region": "Galicia",
            "RandomValue": 2
        },
        {
            "Country": "South Korea",
            "Region": "Seoul",
            "RandomValue": 1
        },
        {
            "Country": "South Korea",
            "Region": "Busan",
            "RandomValue": 0
        },
        {
            "Country": "South Korea",
            "Region": "Incheon",
            "RandomValue": 2
        },
        {
            "Country": "South Korea",
            "Region": "Daegu",
            "RandomValue": 1
        },
        {
            "Country": "South Korea",
            "Region": "Gwangju",
            "RandomValue": 0
        },
        {
            "Country": "Netherlands",
            "Region": "North Holland",
            "RandomValue": 2
        },
        {
            "Country": "Netherlands",
            "Region": "South Holland",
            "RandomValue": 1
        },
        {
            "Country": "Netherlands",
            "Region": "Utrecht",
            "RandomValue": 0
        },
        {
            "Country": "Netherlands",
            "Region": "North Brabant",
            "RandomValue": 2
        },
        {
            "Country": "Netherlands",
            "Region": "Gelderland",
            "RandomValue": 1
        },
        {
            "Country": "Saudi Arabia",
            "Region": "Riyadh",
            "RandomValue": 0
        },
        {
            "Country": "Saudi Arabia",
            "Region": "Makkah",
            "RandomValue": 2
        },
        {
            "Country": "Saudi Arabia",
            "Region": "Eastern Province",
            "RandomValue": 1
        },
        {
            "Country": "Saudi Arabia",
            "Region": "Madinah",
            "RandomValue": 0
        },
        {
            "Country": "Saudi Arabia",
            "Region": "Asir",
            "RandomValue": 2
        },
        {
            "Country": "South Africa",
            "Region": "Gauteng",
            "RandomValue": 1
        },
        {
            "Country": "South Africa",
            "Region": "Western Cape",
            "RandomValue": 0
        },
        {
            "Country": "South Africa",
            "Region": "KwaZulu-Natal",
            "RandomValue": 2
        },
        {
            "Country": "South Africa",
            "Region": "Eastern Cape",
            "RandomValue": 1
        },
        {
            "Country": "South Africa",
            "Region": "Free State",
            "RandomValue": 0
        },
        {
            "Country": "Turkey",
            "Region": "Istanbul",
            "RandomValue": 2
        },
        {
            "Country": "Turkey",
            "Region": "Ankara",
            "RandomValue": 1
        },
        {
            "Country": "Turkey",
            "Region": "Izmir",
            "RandomValue": 0
        },
        {
            "Country": "Turkey",
            "Region": "Antalya",
            "RandomValue": 2
        },
        {
            "Country": "Turkey",
            "Region": "Bursa",
            "RandomValue": 1
        }
    ]);
    type WorldStatDataType = {
        Country: string;
        Region: string;
        RandomValue: number;
    };

    useEffect(() => {
        // const filePath: string = '../../../data/geo_sentiments.csv';
        // const csv = fs.readFileSync(filePath, 'utf8');
        // const rows = csv.split('\n');

        // rows.forEach((row) => {
        // const columns: Array<string> = row.split(',');
        // setData([...data,{
        //     Country: columns[0],
        //     Region: columns[1],
        //     RandomValue: Number(columns[2]),
        // }]);
        // });



    }, [])

    useLayoutEffect(() => {
        
        let root = am5.Root.new("chartdiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "translateX",
                projection: am5map.geoNaturalEarth1()
            })
        );

        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"]
            })
        );

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            interactive: true
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x677935)
        });

        let pointSeries = chart.series.push(
            am5map.MapPointSeries.new(root, {
                polygonIdField: "Country",
                valueField: "RandomValue",
                calculateAggregates: true,
                autoScale: true
            })
            );

        pointSeries.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationX: 0.5,
                locationY: 0.5,
                sprite: am5.Circle.new(root, {
                    radius: 5,
                    fill: am5.color(0x000000)
                })
            });
        });
            polygonSeries.appear(1000, 100);

        


        polygonSeries.mapPolygons.template.events.on("click", function (ev) {
            console.log(ev?.target?.dataItem?.dataContext);
           
            //TODO: try to set active country here and zoom in and replace entire chart with coutry
            goToMapPolygon(ev?.target?.dataItem?.dataContext);

        });


        const goToMapPolygon = (_dataContext: any) => {
            polygonSeries =  chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_region_usa_congressional2022_worldLow,            })
        );
        }

        return () => {
            root.dispose();
        };
    }, []);


    return (
        <div id="chartdiv" className='w-full h-full m-8'></div>
    )
}

export default WorldChart


