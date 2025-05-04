"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Decimation } from 'chart.js';

// Register necessary chart elements
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Decimation);

// Dynamically import the Line chart from react-chartjs-2
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false, // Disable server-side rendering
  loading: () => <p className="text-center py-8">Loading chart...</p>, // Improved loading indicator
});

// Function to generate a reasonable number of random data points
const generateRandomData = (firstPoint, range, count = 100) => {
  return [firstPoint, ...Array.from({ length: count - 1 }, () => firstPoint + Math.floor(Math.random() * range))];
};

export default function LineChart() {
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Track window resize for responsive adjustments
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Add resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically adjust data points based on screen size
  const getDataPointCount = () => {
    if (windowWidth < 480) return 6;  // Mobile: show fewer points
    if (windowWidth < 768) return 12; // Tablet: show standard 12 months
    return 12;                        // Desktop: show all months
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dataPointCount = getDataPointCount();
  const visibleMonths = months.slice(0, dataPointCount);

  const data = {
    labels: visibleMonths,
    datasets: [
      {
        label: 'Total Revenue',
        backgroundColor: 'rgba(58, 126, 161, 0.2)',
        borderColor: '#168DBC',
        pointRadius: windowWidth < 768 ? 2 : 0,
        pointHoverRadius: 4,
        data: generateRandomData(600, 50, dataPointCount),
        fill: true,
      },
      {
        label: 'Monthly Subscription',
        backgroundColor: 'rgba(3, 252, 102, 0.2)',
        borderColor: '#00BFA6',
        pointRadius: windowWidth < 768 ? 2 : 0,
        pointHoverRadius: 4,
        data: generateRandomData(400, 60, dataPointCount),
        fill: true,
      },
      {
        label: 'Yearly Subscription',
        backgroundColor: 'rgba(22, 141, 188, 0.2)',
        borderColor: '#3A7EA1',
        pointRadius: windowWidth < 768 ? 2 : 0,
        pointHoverRadius: 4,
        data: generateRandomData(0, 100, dataPointCount),
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: windowWidth < 640 ? 'bottom' : 'top',
        align: windowWidth < 640 ? 'start' : 'center',
        labels: {
          color: 'black',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: windowWidth < 640 ? 10 : 20,
          boxWidth: windowWidth < 640 ? 8 : 10,
          font: {
            size: windowWidth < 640 ? 10 : 12,
          }
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        bodyFont: {
          size: windowWidth < 640 ? 10 : 12,
        },
        titleFont: {
          size: windowWidth < 640 ? 12 : 14,
        },
      },
      decimation: {
        enabled: true,
        algorithm: 'lttb',
      },
    },
    scales: {
      x: {
        grid: { display: false },
        title: {
          display: windowWidth > 480, // Hide title on small mobile
          text: "Months",
          color: "black",
          font: {
            size: windowWidth < 768 ? 12 : 14,
            weight: "bold",
          },
        },
        ticks: {
          font: {
            size: windowWidth < 640 ? 10 : 12,
          },
          maxRotation: windowWidth < 480 ? 45 : 0, // Rotate labels on small screens
        }
      },
      y: {
        ticks: {
          stepSize: windowWidth < 480 ? 250 : 200,
          font: {
            size: windowWidth < 640 ? 10 : 12,
          },
        },
        grid: { color: '#f4f4f4' },
        min: 0,
        max: 1000,
        title: {
          display: windowWidth > 480, // Hide title on small mobile
          text: "Revenue",
          color: "black",
          font: {
            size: windowWidth < 768 ? 12 : 14,
            weight: "bold",
          },
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
  };

  return (
    <div className="w-full m-2 p-2 sm:p-4 md:p-6 border-2 rounded shadow-sm">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center mb-2 md:mb-4">Revenue Breakdown</h2>
      <div className="relative w-auto h-[250px] md:w-[565px] sm:h-[300px] md:h-[350px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}