import { useState } from 'react';
import { type Event } from '@/store/eventStore/types';
import { type Periods } from '@/utils/Date/getChartPeriod';

import EventChart from '@/components/EventsChart/EventsChart';
import DashboardSelect from './Select';

const SelectContainer: React.FC<{ events: Event[] }> = ({ events }) => {
  const completedEvents = events.filter((event) => event.isDone === true);
  const [period, setPeriod] = useState<Periods>('Two weeks');

  return (
    <div className="h-48">
      <DashboardSelect setPeriod={setPeriod} />
      <EventChart events={completedEvents} period={period} />
    </div>
  );
};

export default SelectContainer;
