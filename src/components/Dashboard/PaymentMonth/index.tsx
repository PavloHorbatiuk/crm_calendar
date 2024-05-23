import { useState } from 'react';
import { daysNames, monthNames } from '@/common/const/fullDateNames';
import { getArrayOfDays } from '@/utils/getArrayOfDays';
import { type Event } from '@/store/eventStore/types';

import PaymentMonthEvent from './Item';

interface PaymentMonthProps {
  success: boolean;
  monthEvents: Event[];
  onUpdate: (data: Event) => Promise<void>;
}

const gray = 'bg-gray';
const getPrevMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() - 1);
const getNextMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1);

function PaymentMonth({ monthEvents, onUpdate, success }: PaymentMonthProps) {
  const [month, setMonth] = useState(new Date());

  const daysOfMonth = getArrayOfDays(month);
  const daysOfWeek = getWeekStartingMonday();
  const daysWithEvents = getDaysWithEvents(monthEvents);

  const onClick = (event: any) => {
    const prev = event.target.dataset['prev'];
    prev ? setMonth(getPrevMonth(month)) : setMonth(getNextMonth(month));
  };

  return (
    <div className="h-1/2 mt-1 w-full p-4 bg-white rounded-3xl shadow">
      <div className="flex justify-center items-center text-md mb-1">
        <div className="flex w-40">
          <button
            className="mr-2 bg-slate-400"
            data-prev="prev"
            onClick={onClick}
          >
            left
          </button>
          <button
            className="ml-2 bg-slate-400"
            data-next="next"
            onClick={onClick}
          >
            right
          </button>
          <div>
            <div className="w-22 ml-4">{monthNames[month.getMonth()]}</div>
          </div>
        </div>
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
