import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import { sorteByTime } from '@/utils/sortByTime';
import { type Event } from '@/store/eventStore/types';

import EventChart from '../EventsChart/EventsChart';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import DashboardItem from './DashboardItem';

function Dashboard() {
  const { events, updateEvent } = useEventStore(useShallow((state) => state));
  const [value, setValue] = useState<Event>();
  const sortedByTime = sorteByTime(events);

  useEffect(() => {
    if (value !== undefined) {
      (async () => await updateEvent(value))();
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
      </CardTitle>
      <div className="h-full">
        <div className="h-1/2 flex-auto flex gap-1 ">
          <div className="max-w-[18rem] shadow min-w-44 w-full p-4 bg-white rounded-3xl">
            {sortedByTime.map((event) => (
              <DashboardItem key={event.id} event={event} setValue={setValue} />
            ))}
          </div>
          <div className="h-full w-full p-4 bg-white rounded-3xl shadow">
            <EventChart events={events} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
