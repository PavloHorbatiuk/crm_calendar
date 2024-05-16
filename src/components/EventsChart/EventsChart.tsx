import { FC, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { type Event } from '@/store/eventStore/types';
import { getEventChartData } from '@/utils/getEventChartData';

export interface MonthlyEventData {
  month: number;
  totalPrice: number;
  eventCount: number;
}

type POP = {
  events: Event[];
  coc: number;
};

const EventChart: FC<POP> = ({ events }) => {
  const [monthlyData, setMonthlyData] = useState<MonthlyEventData[]>([]);

  useEffect(() => {
    const data: MonthlyEventData[] = [];

    events.forEach((event) => {
      if (event.isDone) {
        const eventMonth = new Date(event.date).getMonth();
        const existingMonthData = data.find(
          (item) => item.month === eventMonth
        );

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
      }
    });

    data.sort((a, b) => a.month - b.month);
    setMonthlyData(data);
  }, [events]);

  useEffect(() => {
    if (monthlyData.length > 0) {
      const { totalPrices, eventCounts, labels } =
        getEventChartData(monthlyData);

      const ctx = document.getElementById('eventChart') as HTMLCanvasElement;

      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
        existingChart.destroy();
      }

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
