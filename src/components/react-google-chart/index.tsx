import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

type WorldStatDataType = {
        Country: string;
        Region: string;
        RandomValue: number;
    };
export default function WorldCustomChart() {

    const [data, SetData] = useState<(string | number)[][]>([["Country", "Region", "RandomValue"]]);

    let regionalData = [
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
    ]
    
    const options = {
      sizeAxis: { minValue: 0, maxValue: 2 },
      colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
      backgroundColor: "#81d4fa",
      datalessRegionColor: "#f5f5f5",
      defaultColor: "#f5f5f5",
      animation: {
          duration: 1000,
          easing: "out",
        },
    };

    useEffect(() => {
        SetData([
            ["Country", "Region", "RandomValue"],
        ])
        regionalData.forEach((data: WorldStatDataType) => {
            SetData((prevData) => [...prevData, [data.Country, data.Region, data.RandomValue]])
        })
        
    },[])
  return (
    <Chart
     chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper?.getChart();
            const selection = chart?.getSelection();
            if (selection?.length === 0) return;
          },
        },
      ]}
      chartType="GeoChart"
      className="w-full h-screen"
      data={data}
      options={options}
    />
  );
}
