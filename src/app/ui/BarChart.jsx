"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function BarChart() {
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Track window width for responsive adjustments
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Add resize listener
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full">
      <div className="text-gray-500">Loading chart...</div>
    </div>,
  });

  // Determine visible months based on screen size
  const getVisibleMonths = () => {
    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (windowWidth < 480) return allMonths.filter((_, i) => i % 2 === 0); // Show every other month on small screens
    return allMonths;
  };

  // Determine bar thickness based on screen size
  const getBarThickness = () => {
    if (windowWidth < 480) return 20;
    if (windowWidth < 768) return 24;
    return 28;
  };

  const labels = getVisibleMonths();
  const allData = [800, 1000, 600, 820, 600, 980, 800, 830, 800, 840, 1000, 780];
  
  const visibleData = windowWidth < 480 
    ? allData.filter((_, i) => i % 2 === 0) 
    : allData;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Installations',
        data: visibleData,
        backgroundColor: '#00BFA6',
        borderRadius: windowWidth < 480 ? 6 : 10,
        barThickness: getBarThickness(),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: windowWidth < 768 ? 'bottom' : 'top',
        labels: {
          boxWidth: windowWidth < 480 ? 10 : 12,
          font: {
            size: windowWidth < 480 ? 10 : 12,
          }
        }
      },
      tooltip: {
        titleFont: {
          size: windowWidth < 480 ? 10 : 14,
        },
        bodyFont: {
          size: windowWidth < 480 ? 10 : 14,
        },
        padding: windowWidth < 480 ? 6 : 10,
      }
    },
    scales: {
      x: {
        title: {
          display: windowWidth >= 480,
          text: 'Months',
          font: { 
            size: windowWidth < 768 ? 12 : 14,
            weight: 'bold' 
          },
        },
        ticks: {
          font: {
            size: windowWidth < 480 ? 10 : 12,
          },
          maxRotation: windowWidth < 640 ? 45 : 0, // Rotate labels on small screens
        },
        grid: {
          display: false,
        }
      },
      y: {
        title: {
          display: windowWidth >= 480,
          text: 'Installations',
          font: { 
            size: windowWidth < 768 ? 12 : 14,
            weight: 'bold' 
          },
        },
        ticks: {
          stepSize: windowWidth < 480 ? 400 : 200,
          beginAtZero: true,
          font: {
            size: windowWidth < 480 ? 10 : 12,
          }
        },
        grid: {
          color: '#f0f0f0',
        }
      },
    },
  };

  return (
    <div className="w-full bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-sm">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center">Monthly Installations</h2>
      <div className="h-[250px] sm:h-[280px] md:h-[300px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}