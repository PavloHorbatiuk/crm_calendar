import { useEventStore } from '@/store/eventStore';
import { Event } from '@/store/eventStore/types';
import { format } from 'date-fns';

interface IProps {
  event: Event;
  className?: string;
}

function EventCard({ className, event }: IProps) {
  const { name, date, id } = event;
  const { deleteEvent } = useEventStore((store) => store);

  const handleDelete = () => {
    //TODO: why might the id be undefined?
    if (id) deleteEvent(id);
  };

  return (
    <div
      className={`${className} rounded-lg bg-red300 h-full px-2 text-white py-1`}
    >
      <span>{name}</span>
      <p className="text-white">{format(new Date(date), 'HH:mm')}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default EventCard;
