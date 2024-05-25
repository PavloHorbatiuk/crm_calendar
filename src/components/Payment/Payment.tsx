import { useState } from 'react';
import { type Event } from '@/store/eventStore/types';
import { type ButtonType } from '@/common/const/ButtonType';
import { getArrayOfDays, getPrevMonth, getNextMonth } from '@/utils/date';
import { daysNames, monthNames } from '@/common/const/fullDateNames';

import { CardTitle } from '../ui/CardTitle/CardTitle';
import { CardWrapper } from '../ui/CardWrapper/CardWrapper';
import leftArrow from '@/assets/Left.svg';
import rightArrow from '@/assets/Arrow--right.svg';
import PaymentItem from './PaymentItem';

function getWeekStartingMonday() {
  const days = [...daysNames];
  days.push(daysNames[0]);
  days.shift();

  return days;
}

interface PaymentProps {
  success: boolean;
  monthEvents: Event[];
  onUpdate: (data: Event) => Promise<void>;
}

const gray = 'bg-gray';

function Payment({ monthEvents, onUpdate, success }: PaymentProps) {
  const [month, setMonth] = useState(new Date());

  const daysOfMonth = getArrayOfDays(month);
  const daysOfWeek = getWeekStartingMonday();

  const handeClick = (button: ButtonType) => {
    button === 'prev'
      ? setMonth(getPrevMonth(month))
      : setMonth(getNextMonth(month));
  };

  console.log('render');
  return (
    <>
      <CardTitle>
        <h4>Payment</h4>
      </CardTitle>
      <CardWrapper>
        <div className="h-1/2 mt-1 w-full p-4 bg-white rounded-3xl shadow">
          <div className="flex justify-center items-center text-md mb-1">
            <div className="flex w-40">
              <button
                className="mr-2"
                data-prev="prev"
                onClick={() => handeClick('prev')}
              >
                <img src={leftArrow} alt="leftArrow" />
              </button>
              <button
                className="ml-2"
                data-next="next"
                onClick={() => handeClick('next')}
              >
                <img src={rightArrow} alt="rightArrow" />
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
              ${day && 'flex-col justify-center bg-white text-sm p-1'} `}
              >
                {day !== 0 &&
                  monthEvents.map((event) => (
                    <PaymentItem
                      key={event.id}
                      dayOfMonth={day}
                      event={event}
                      success={success}
                      onUpdate={onUpdate}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

export default Payment;
