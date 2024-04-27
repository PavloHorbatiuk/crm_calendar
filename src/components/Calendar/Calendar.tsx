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
  startOfDay,
} from 'date-fns';
import leftIcon from '@/assets/Left.svg';
import rightIcon from '@/assets/Arrow--right.svg';
import { useState } from 'react';

type ButtonType = 'prev' | 'next';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const dateFormat = 'EEE dd';
  const timeFormat = 'HH:mm';

  const changeWeekHandle = (btnType: ButtonType) => {
    if (btnType === 'prev') {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === 'next') {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const handleCellClick = (date: Date, time: string) => {
    // Handle click on cell with the selected date and time
    console.log('Selected date:', date);
    console.log('Selected time:', time);
  };

  function renderTimeline() {
    const hours = [];
    for (let i = 13; i <= 22; i++) {
      hours.push(
        <div key={i} className="flex items-end justify-center  min-h-14">
          <span className="flex items-center text-mm text-gray w-24">
            {i}:00 <hr className="w-full text-lightGray ml-4" />
          </span>
        </div>
      );
    }
    // return <div className="absolute left-6 top-[9px]">{hours}</div>;
    return <div className="max-w-[4.5rem]">{hours}</div>;
  }

  const renderDays = () => {
    const days = [];
    const weekDays = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const today = startOfDay(new Date());
    for (let i = 0; i < 7; i++) {
      const currentDate = addDays(startDate, i);
      const isCurrentDay = isSameDay(currentDate, today);
      const dayHeader = (
        <div
          className={`text-center uppercase items-center px-2 py-1 ${isCurrentDay && 'bg-white shadow-sm  rounded-full'}`}
          key={`header-${i}`}
        >
          <span className="text-mm">
            {format(addDays(startDate, i), dateFormat)}
          </span>
        </div>
      );

      const timeCells = [];
      const hours = [];
      for (let hour = 13; hour <= 22; hour++) {
        const time =
          format(currentDate, 'yyyy-MM-dd') +
          'T' +
          hour.toString().padStart(2, '0') +
          ':00';
        hours.push(
          <div key={i} className="flex items-end justify-between  min-h-14">
            <span className="flex items-center w-full">
              {i}:00 <hr className="w-full text-lightGray ml-2" />
            </span>
          </div>
        );
        timeCells.push(
          <div
            key={`${format(currentDate, 'yyyy-MM-dd')}-${hour}`}
            className=" min-h-14 border  border-lightGray"
            onClick={() =>
              handleCellClick(currentDate, format(new Date(time), timeFormat))
            }
          ></div>
        );
      }

      days.push(
        <div key={`day-${i}`} className="flex flex-col">
          {timeCells}
        </div>
      );
      weekDays.push(
        <div key={`day-${i}`} className="col-span-7 w-full">
          {dayHeader}
        </div>
      );
    }
    return (
      <>
        <div className="bg-blueMoon shadow-sm  flex py-2  rounded-lg">
          <div className="max-w-[4.5rem] w-full px-2 flex justify-between">
            <button
              onClick={() => changeWeekHandle('next')}
              className="flex items-center"
            >
              <img className="fill-black" src={leftIcon} />
            </button>
            <button onClick={() => changeWeekHandle('prev')}>
              <img src={rightIcon} />
            </button>
          </div>
          {weekDays}
        </div>
        <div className="grid grid-cols-[6.37%,93.63%]">
          <div>{renderTimeline()}</div>
          <div className="grid grid-cols-7 ">{days}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex justify-between p-6">
        <h4>Name of routing</h4>
        <button className="btn-black bg-black rounded-full w-10 h-10 flex items-center justify-center">
          <img src={AddIcon} />
        </button>
      </div>
      <div className="bg-white p-6 h-full rounded-3xl">
        <div className="flex justify-between items-center">
          <h4>{format(currentMonth, 'MMM yyyy')}</h4>
          <div className="flex gap-2">
            <button className="btn-gray">Today</button>
            <button className="btn-gray">Week</button>
          </div>
        </div>
        <div className="mt-3.5">
          {/* <div className="py-2"> */}
          <div className="col-span-7 w-full">{renderDays()}</div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Calendar;
