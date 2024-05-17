import { useState } from 'react';
import DashboardSelect from './Select';
import { type Event } from '@/store/eventStore/types';
import EventChart from '@/components/EventsChart/EventsChart';

const SelectContainer: React.FC<{ events: Event[] }> = ({ events }) => {
  const completedEvents = events.filter((event) => event.isDone === true);
  const [period, setPeriod] = useState('Two weeks');

  return (
    <div className="h-[15.625rem]">
      <DashboardSelect setPeriod={setPeriod} />
      <EventChart events={completedEvents} period={period} />
    </div>
  );
};

export default SelectContainer;
