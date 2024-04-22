import AddIcon from '@/assets/add.svg';
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from 'date-fns';
import leftIcon from '@/assets/Left.svg';
import rightIcon from '@/assets/Arrow--right.svg';
import { useState } from 'react';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const dateFormat = 'MMM yyyy';

  const renderDays = () => {
    const dateFormat = 'EEE dd';
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center" key={i}>
          <p>{format(addDays(startDate, i), dateFormat)}</p>
        </div>
      );
    }
    return <div className="grid grid-cols-7 gap-7">{days}</div>;
  };
  return (
    <div className="flex gap-2  h-full ">
      <div className="max-w-[15.5rem] p-6 w-full gap-4 rounded-3xl bg-blueMoon h-full">
        sidebar
      </div>
      <div className=" flex p-2 flex-col flex-1 rounded-3xl bg-blueMoon">
        <div className="flex justify-between p-6">
          <h4>Calendar</h4>
          <button className="btn-black bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <img src={AddIcon} />
          </button>
        </div>
        <div className="bg-white p-6 h-full rounded-3xl">
          <div className="flex justify-between items-center">
            <h4>{format(currentMonth, dateFormat)}</h4>
            <div className="flex gap-2">
              <button className="btn-gray">Today</button>
              <button className="btn-gray">Week</button>
            </div>
          </div>
          <div className="mt-3.5">
            <div className="bg-blueMoon flex py-2  rounded-lg">
              <div className="max-w-[4.5rem] w-full px-2 flex justify-between">
                <button className="flex items-center">
                  <img className="fill-black" src={leftIcon} />
                </button>
                <button>
                  <img src={rightIcon} />
                </button>
              </div>
              <div className="col-span-7  w-full">{renderDays()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
