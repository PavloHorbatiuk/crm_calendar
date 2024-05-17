import { Event } from '@/store/eventStore/types';

export const sorteByTime = (events: Event[]) => {
  return events.sort((a, b) => {
    return new Date(a.date).getHours() - new Date(b.date).getHours();
  });
};
