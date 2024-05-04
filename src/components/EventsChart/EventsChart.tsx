import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Event } from '@/store/eventStore/types';

interface MonthlyEventData {
  month: number;
  totalPrice: number;
  eventCount: number;
}

const EventChart: React.FC<{ events: Event[] }> = ({ events }) => {
  const [monthlyData, setMonthlyData] = useState<MonthlyEventData[]>([]);

  useEffect(() => {
    const data: MonthlyEventData[] = [];

    events.forEach((event) => {
      const eventDate = new Date(event.date);
      const eventMonth = eventDate.getMonth(); // Get the month index (0-indexed)
      const existingMonthData = data.find((item) => item.month === eventMonth);

      if (existingMonthData) {
        existingMonthData.totalPrice += event.price;
        existingMonthData.eventCount += 1;
      } else {
        data.push({
          month: eventMonth,
          totalPrice: event.price,
          eventCount: 1,
        });
      }
    });

    setMonthlyData(data);
  }, [events]);

  useEffect(() => {
    if (monthlyData.length > 0) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const labels = monthlyData.map((data) => monthNames[data.month]);
      const totalPrices = monthlyData.map((data) => data.totalPrice);
      const eventCounts = monthlyData.map((data) => data.eventCount);

      const ctx = document.getElementById('eventChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Total Price',
              data: totalPrices,
              backgroundColor: 'rgba(94, 133, 234)',
              borderColor: 'rgba(84, 119, 210)',
              borderWidth: 1,
              yAxisID: 'price',
            },
            {
              label: 'Event Count',
              data: eventCounts,
              backgroundColor: 'rgba(235, 171, 245)',
              borderColor: 'rgba(235, 171, 245, 1)',
              borderWidth: 1,
              yAxisID: 'count',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            price: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Total Price',
              },
            },
            count: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Event Count',
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [monthlyData]);

  return <canvas id="eventChart" className="w-full h-auto"></canvas>;
};

export default EventChart;
