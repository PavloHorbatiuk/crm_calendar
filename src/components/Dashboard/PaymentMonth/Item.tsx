import { Event } from '@/store/eventStore/types';
import { useState } from 'react';

interface GridItemProps {
  success: boolean;
  event: Event;
  onUpdate: (data: Event) => Promise<void>;
}

function GridItem({ event, onUpdate, success }: GridItemProps) {
  const [isCheck, setIsCheck] = useState<boolean>(event.isDone);

  const handleCheck = () => {
    onUpdate({ ...event, isDone: !isCheck });
    if (success) setIsCheck(!isCheck);
  };

  return (
    <div className="flex justify-between px-2 bg-rose" key={event.id}>
      <span>{event.name}</span>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={handleCheck}
        className="w-5 h-5 bg-white shadow"
      />
    </div>
  );
}

export default GridItem;
