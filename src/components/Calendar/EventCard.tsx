import { Event } from '@/store/eventStore/types';
import { format } from 'date-fns';

interface IProps {
  event: Event;
  className?: string;
}

function EventCard({ className, event }: IProps) {
  const { name, date } = event;
  return (
    <div
      className={`${className} rounded-lg bg-red300 h-full px-2 text-white py-1`}
    >
      <span>{name}</span>
      <p className="text-white">{format(new Date(date), 'HH:mm')}</p>
    </div>
  );
}

export default EventCard;
