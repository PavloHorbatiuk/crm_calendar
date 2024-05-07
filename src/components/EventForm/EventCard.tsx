import { useState } from 'react';
import { format } from 'date-fns';
import { Event } from '@/store/eventStore/types';
import DeleteEventModal from '../Modals/EventModal/DeleteModal';

interface IProps {
  event: Event;
  className?: string;
}

function EventCard({ className, event }: IProps) {
  const [open, setIsOpen] = useState<boolean>(false);
  const { name, date } = event;

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${className} rounded-lg bg-red300 h-full px-2 text-white py-1`}
    >
      <span>{name}</span>
      <p className="text-white">{format(new Date(date), 'HH:mm')}</p>
      <button onClick={() => setIsOpen(!open)}>delete</button>
      {open && (
        <DeleteEventModal
          event={event}
          title={'Do you want to delate this event?'}
          isOpen={open}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default EventCard;
