"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function BarChart() {
  const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
  });

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Installations',
        data: [800, 1000, 600, 820, 600,980, 800,830,800,840,1000,780],
        backgroundColor: '#00BFA6',
        borderRadius: 10, 
        barThickness: 28, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
          font: { size: 14 },
        
        },
       
      },
      y: {
        title: {
          display: true,
          text: 'Installations',
          font: { size: 14 },
        },
        ticks: {
          stepSize: 200,
          beginAtZero: true,
        },
      },
      
    },
  };

  return (
    <div className="md:w-full  h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
}
