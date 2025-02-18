"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RadialChart() {
  const [chartOptions, setChartOptions] = useState({
    series: [70, 55],
    options: {
      chart: {
        type: "radialBar",
        height: 350,
      },
      stroke: {
        lineCap: "round", // Makes the bars rounded
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function () {
                return 100;
              },
            },
          },
        },
      },
      
      colors: ["#00BFA6", "#3A7EA1"],
      labels: ["Active Users", "Inactive Users"],
    },
  });

  return (
    <div className="md:w-80 flex justify-center items-center">
      <Chart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={350} />
    </div>
  );
}
