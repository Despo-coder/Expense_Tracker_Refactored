'use client';

import { Card } from "@/components/ui/card";
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useIncomeExpenseData } from "@/assets/utility/useIncomeExpenseData";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = () => {
  const { categoryBreakdown, paymentTypeBreakdown } = useIncomeExpenseData();

  const donutData = {
    labels: Object.keys(categoryBreakdown),
    datasets: [{
      data: Object.values(categoryBreakdown),
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
      ]
    }]
  };

  const barData = {
    labels: Object.keys(paymentTypeBreakdown),
    datasets: [{
      label: 'Payment Type (%)',
      data: Object.values(paymentTypeBreakdown),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card className="container mt-8 p-6 shadow-lg rounded-lg">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='h-[300px]'>
          <Doughnut data={donutData} options={chartOptions} />
        </div>
        <div className='h-[300px]'>
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
    </Card>
  );
};

export default Charts;
