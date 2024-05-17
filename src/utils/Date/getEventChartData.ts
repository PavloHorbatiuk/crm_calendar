import { type MonthlyEventData } from '@/components/EventsChart/EventsChart';

type ChartDate = {
  labels: string[];
  totalPrices: number[];
  eventCounts: number[];
};

export function getEventChartData(monthlyData: MonthlyEventData[]) {
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

  const chartDate: ChartDate = {
    labels: [],
    totalPrices: [],
    eventCounts: [],
  };

  monthlyData.forEach((event) => {
    chartDate.labels.push(monthNames[event.month]);
    chartDate.totalPrices.push(event.totalPrice);
    chartDate.eventCounts.push(event.eventCount);
  });

  return chartDate;
}
