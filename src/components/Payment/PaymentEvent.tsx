import { type Event } from '@/store/eventStore/types';
import { useState } from 'react';

interface PaymentItemProps {
  event: Event;
  success: boolean;
  onUpdate: (data: Event) => Promise<void>;
}

function PaymentEvent({ event, success, onUpdate }: PaymentItemProps) {
  const [isCheck, setIsCheck] = useState<boolean>(event.isDone);

  const handleCheck = () => {
    onUpdate({ ...event, isDone: !isCheck });
    if (success) setIsCheck(!isCheck);
  };
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

export default PaymentEvent;
