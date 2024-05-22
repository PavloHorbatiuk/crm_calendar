import { daysNames, monthNames } from '@/common/const/fullDateNames';
import { getLastDay } from '@/utils/date';
import { type Event } from '@/store/eventStore/types';
import GridItem from './GridItem';

interface GridProps {
  success: boolean;
  monthEvents: Event[];
  onUpdate: (data: Event) => Promise<void>;
}

const gray = 'bg-gray';

function Grid({ monthEvents, onUpdate, success }: GridProps) {
  const daysOfMonth = getArrayOfDays(getLastDay(new Date()));
  const daysOfWeek = getWeekStartingMonday();
  const daysWithEvents = getDaysWithEvents(monthEvents);
  const month = monthNames[new Date().getMonth()];

  return (
    <div className="h-1/2 mt-1 w-full p-4 bg-white rounded-3xl shadow">
      <div className="flex justify-center items-center text-md mb-1">
        {month}
      </div>
      <div className="flex gap-28 px-20">
        {daysOfWeek.map((day, dayIndex) => (
          <div key={dayIndex}>{day.slice(0, 3)}</div>
        ))}
      </div>
      <div className="h-full bg-slate-400 grid grid-cols-7 p-2 gap-1">
        {daysOfMonth.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className={`${gray} ${day && 'flex-col justify-center bg-white text-sm p-1 min-h-8 overflow-y-visible'} `}
          >
            {daysWithEvents[day] &&
              daysWithEvents[day].map((event) => (
                <GridItem
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

export default Grid;

function getWeekStartingMonday() {
  const days = [...daysNames];
  days.push(daysNames[0]);
  days.shift();

  return days;
}

function getArrayOfDays(amountOfDays: number) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const dayOfWeek = new Date(year, month, 1).getDay() - 2;

  const lastDaysOfMonth = new Array(dayOfWeek).fill(0);
  const currentDaysOfMonth = [...Array(amountOfDays).keys()];
  currentDaysOfMonth.push(amountOfDays);

  return [...lastDaysOfMonth, ...currentDaysOfMonth];
}

function getDaysWithEvents(events: Event[]) {
  const dayEvents: Record<number, Event[]> = {};

  events.forEach((event) => {
    const day = new Date(event.date).getDate();
    dayEvents[day] ? dayEvents[day].push(event) : (dayEvents[day] = [event]);
  });

  return dayEvents;
}
