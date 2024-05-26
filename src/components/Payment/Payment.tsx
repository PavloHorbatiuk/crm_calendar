import { useState } from 'react';
import { monthNames } from '@/common/const/';
import { type ButtonType } from '@/common/const';
import { type Event } from '@/store/eventStore/types';
import { getDaysWithEvents, getWeekStartingMonday } from './PaymentLogic';
import {
  getArrayOfDays,
  getPrevMonth,
  getNextMonth,
  getCurrentMonthEvents,
} from '@/utils/date';

import { CardTitle } from '../ui/CardTitle/CardTitle';
import { CardWrapper } from '../ui/CardWrapper/CardWrapper';
import PaymentItem from './PaymentItem';

import LeftArrow from '@/assets/Left.svg';
import RightArrow from '@/assets/Arrow--right.svg';

interface PaymentProps {
  events: Event[];
  onUpdate: (data: Event) => Promise<void>;
}

function Payment({ events, onUpdate }: PaymentProps) {
  const [month, setMonth] = useState(new Date());

  const daysOfWeek = getWeekStartingMonday();
  const daysOfMonth = getArrayOfDays(month);
  const monthEvents = getCurrentMonthEvents(events, month);
  const daysWithEvents = getDaysWithEvents(monthEvents);

  const handeClick = (button: ButtonType) => {
    button === 'prev'
      ? setMonth(getPrevMonth(month))
      : setMonth(getNextMonth(month));
  };

  return (
    <>
      <CardTitle>
        <h4>Payment</h4>
      </CardTitle>
      <CardWrapper>
        <div className="flex justify-center items-center text-md mb-1">
          <div className="flex w-40">
            <button
              className="mr-2"
              data-prev="prev"
              onClick={() => handeClick('prev')}
            >
              <img src={LeftArrow} alt="leftArrow" />
            </button>
            <div className="w-22 ml-4">{monthNames[month.getMonth()]}</div>
            <button
              className="ml-6"
              data-next="next"
              onClick={() => handeClick('next')}
            >
              <img src={RightArrow} alt="rightArrow" />
            </button>
          </div>
        </div>
        <div className="flex gap-28 px-20">
          {daysOfWeek.map((day, dayIndex) => (
            <div key={dayIndex}>{day.slice(0, 3)}</div>
          ))}
        </div>
        <div className="bg-slate-400 grid grid-cols-7 p-2 gap-1 auto-rows-[5rem] rounded-md">
          {daysOfMonth.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`${'bg-gray'} 
              ${day && 'flex-col justify-center bg-white text-sm p-1'} `}
            >
              {daysWithEvents[dayIndex] &&
                daysWithEvents[dayIndex].map((event) => (
                  <PaymentItem
                    key={event.id}
                    event={event}
                    onUpdate={onUpdate}
                  />
                ))}
            </div>
          ))}
        </div>
      </CardWrapper>
    </>
  );
}

export default Payment;
