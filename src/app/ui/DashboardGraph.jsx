"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Decimation } from 'chart.js';


// Register necessary chart elements
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Decimation);

// Dynamically import the Line chart from react-chartjs-2
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false, // Disable server-side rendering
  loading: () => <p>Loading chart...</p>, // Show loading indicator
});

// Function to generate a reasonable number of random data points
const generateRandomData = (firstPoint, range, count = 100) => {
    return [firstPoint, ...Array.from({ length: count - 1 }, () => firstPoint + Math.floor(Math.random() * range))];
  };
   
export default function LineChart() {
  const labels = Array.from({ length: 100 }, (_, i) => `Point ${i + 1}`); // 100 labels

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Revenue',
        backgroundColor: 'rgba(58, 126, 161, 0.2)', // Semi-transparent blue
        borderColor: '#168DBC',
        pointRadius: 0, 
        pointHoverRadius: 0,
        data: generateRandomData(600, 50, 100), // Limited to 100 points
        fill: true,
      },
      {
        label: 'Monthly Subscription',
        backgroundColor: 'rgba(3, 252, 102, 0.2)', 
        borderColor: '#00BFA6',
        pointRadius: 0, 
        pointHoverRadius: 0,
        data: generateRandomData(400, 60, 100),
        fill: true,
      },
      {
        label: 'Yearly Subscription',
        backgroundColor: 'rgba(22, 141, 188, 0.2)', 
        borderColor: '#3A7EA1',
        pointRadius: 0, 
        pointHoverRadius: 0,
        data: generateRandomData(0, 100, 100),
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
            position: 'top',
            labels: {
              color: 'black',
              usePointStyle: true, 
              pointStyle: 'circle',
              padding: 20,
             
            },
          },
          
      
      decimation: {
        enabled: true, // Enable automatic data optimization
        algorithm: 'lttb', // Largest-Triangle-Three-Buckets
      },
    },
    scales: {
      x: {
        grid: { display: false },
        title: {
          display: true,
          text: "Months", // X-axis label
          color: "black",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        ticks: { 
            stepSize: 200,
        },
        grid: { color: '#f4f4f4' },
        min: 0, 
        max: 1000, 
        title: {
          display: true,
          text: "Revenue", // X-axis label
          color: "black",
          font: {
            size: 14,
            weight: "bold",
          },
        },
    },
    },
  };

  return (
    <div className=" m-2 p-6 border-2 rounded ">
      <div className="relative w-[450px] md:w-full h-[350px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
