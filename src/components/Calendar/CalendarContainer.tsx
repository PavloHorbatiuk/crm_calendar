import { useEventStore } from '@/store/eventStore';
import Calendar from './Calendar';
import { useShallow } from 'zustand/react/shallow';

function CalendarContainer() {
  const { events } = useEventStore(useShallow((state) => state));

  return <Calendar events={events} />;
}

export default CalendarContainer;
