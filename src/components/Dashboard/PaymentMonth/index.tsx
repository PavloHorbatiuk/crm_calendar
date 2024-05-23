import { daysNames } from '@/common/const/fullDateNames';
import { getDaysInMonth } from 'date-fns';
import { getArrayOfDays } from '@/utils/getArrayOfDays';
import { type Event } from '@/store/eventStore/types';

import PaymentMonthEvent from './Item';
import Month from './Month';

interface PaymentMonthProps {
  success: boolean;
  monthEvents: Event[];
  onUpdate: (data: Event) => Promise<void>;
}

const gray = 'bg-gray';

function PaymentMonth({ monthEvents, onUpdate, success }: PaymentMonthProps) {
  const daysOfMonth = getArrayOfDays(getDaysInMonth(new Date()));
  const daysOfWeek = getWeekStartingMonday();
  const daysWithEvents = getDaysWithEvents(monthEvents);

  return (
    <div className="h-1/2 mt-1 w-full p-4 bg-white rounded-3xl shadow">
      <div className="flex justify-center items-center text-md mb-1">
        <Month />
      </div>
      <div className="flex gap-28 px-20">
        {daysOfWeek.map((day, dayIndex) => (
          <div key={dayIndex}>{day.slice(0, 3)}</div>
        ))}
      </div>
      <div className="bg-slate-400 grid grid-cols-7 p-2 gap-1 auto-rows-[3.75rem] rounded-md">
        {daysOfMonth.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className={`${gray} 
              ${day && 'flex-col justify-center bg-white text-sm p-1'}
              ${daysWithEvents[day]?.length > 2 && 'overflow-y-scroll'}`}
          >
            {daysWithEvents[day] &&
              daysWithEvents[day].map((event) => (
                <PaymentMonthEvent
                  key={event.id}
                  event={event}
                  onUpdate={onUpdate}
                  success={success}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMonth;

function getWeekStartingMonday() {
  const days = [...daysNames];
  days.push(daysNames[0]);
  days.shift();

  return days;
}

function getDaysWithEvents(events: Event[]) {
  const dayEvents: Record<number, Event[]> = {};

  events.forEach((event) => {
    const day = new Date(event.date).getDate();
    dayEvents[day] ? dayEvents[day].push(event) : (dayEvents[day] = [event]);
  });

  return dayEvents;
}
