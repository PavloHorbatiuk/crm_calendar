import { memo, useState } from 'react';
import { isSameDay } from 'date-fns';
import { type Event } from '@/store/eventStore/types';

interface PaymentMonthItemProps {
  event: Event;
  dayOfMonth: Date;
  success: boolean;
  onUpdate: (data: Event) => Promise<void>;
}

const PaymentItem = memo(function PaymentItem({
  event,
  onUpdate,
  success,
  dayOfMonth,
}: PaymentMonthItemProps) {
  const [isCheck, setIsCheck] = useState<boolean>(event.isDone);
  const dayWithEvents = isSameDay(new Date(event.date), dayOfMonth);

  const handleCheck = () => {
    onUpdate({ ...event, isDone: !isCheck });
    if (success) setIsCheck(!isCheck);
  };

  console.log('render PaymentItem');

  if (dayWithEvents) {
    return (
      <div
        className="flex justify-between bg-blueMoon rounded  li leading-6 mb-1 px-2"
        key={event.id}
      >
        <span>{event.name}</span>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={handleCheck}
          className="w-1 h-1 bg-white shadow mr-0"
        />
      </div>
    );
  }
});

export default PaymentItem;
