import { Event } from '@/store/eventStore/types';

export const getCurrentMonthEvents = (events: Event[], month: Date) => {
  return events.filter(
    (event) => new Date(event.date).getMonth() === new Date(month).getMonth()
  );
};
