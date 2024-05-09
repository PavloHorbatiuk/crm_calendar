import { URL, instance } from '.';
import { Event } from '@/store/eventStore/types';

export const eventApi = {
  addEvent(event: Event) {
    return instance.post(URL.EVENTS, event);
  },
  fetchAllEvents() {
    return instance.get(URL.EVENTS);
  },
  deleteEvent(id: number) {
    return instance.delete(`${URL.EVENTS}/${id}`);
  },
  updateEvent(id: number) {
    return instance.patch(`${URL.EVENTS}/${id}`);
  },
};
