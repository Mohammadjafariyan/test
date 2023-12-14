import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  useEffect(() => {
    // Dummy data for demonstration
    const data = {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'شهریور', 'مهر' , 'آبان' ,'آذر' ,'دی' ,'بهمن' ,'اسفند'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56,65, 59, 41, 14, 56,14, 16],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create the chart
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
    });
  }, []);

  return <canvas id="myChart" width="400" height="400"></canvas>;
};

export default ChartComponent;
