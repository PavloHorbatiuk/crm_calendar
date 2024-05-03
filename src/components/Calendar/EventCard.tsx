import { Event } from '@/store/eventStore/types';

interface IProps {
  event: Event;
  className?: string;
}

function EventCard({ className, event }: IProps) {
  const { name } = event;
  return (
    <div
      className={`${className} rounded-lg bg-red300 h-full px-2 text-white py-1`}
    >
      <span>{name}</span>
    </div>
  );
}

export default EventCard;
