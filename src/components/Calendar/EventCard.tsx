import { useEventStore } from '@/store/eventStore';
import { Event } from '@/store/eventStore/types';
import { notify } from '@/utils/notify';
import { format } from 'date-fns';

interface IProps {
  event: Event;
  className?: string;
}

const notifyEvent = 'Event deleted successfully';
function EventCard({ className, event }: IProps) {
  const { name, date, id } = event;
  const { deleteEvent } = useEventStore((store) => store);

  const handleDelete = async () => {
    //TODO: why might the id be undefined?
    if (id) await deleteEvent(id);

    const { success } = useEventStore.getState();
    if (success) notify('succeeded', notifyEvent);
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
