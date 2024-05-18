import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import { type Event } from '@/store/eventStore/types';
import { sortByHours, sortByToday } from '@/utils/Date';

import { Alert } from '../ui/Alert/Alert';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import DashboardItem from './DashboardItem';
import SelectContainer from './Chart/SelectContainer';

function Dashboard() {
  const {
    events,
    updateEvent,
    success,
    error: responseError,
  } = useEventStore(useShallow((state) => state));

  const sortedByHours = sortByHours(events);
  const sortedByToday = sortByToday(sortedByHours);

  const onUpdate = useCallback(
    async (event: Event) => {
      await updateEvent(event);
    },
    [updateEvent]
  );

  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
      </CardTitle>
      <div className="h-full">
        <div className="h-1/2 flex-auto flex gap-1 ">
          <div className="max-w-[18rem] shadow min-w-44 w-full p-4 bg-white rounded-3xl">
            {responseError && <Alert status={'failed'} text={responseError} />}
            {sortedByToday.map((event) => (
              <DashboardItem
                key={event.id}
                event={event}
                onUpdate={onUpdate}
                success={success}
              />
            ))}
          </div>
          <div className="h-full w-full p-4 bg-white rounded-3xl shadow">
            <SelectContainer events={events} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
