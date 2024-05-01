import { useEventStore } from '@/store/eventStore';
import Calendar from './Calendar';

function CalendarContainer() {
  const { events } = useEventStore();

  console.log(events, 'events');

  return <Calendar />;
}

export default CalendarContainer;
