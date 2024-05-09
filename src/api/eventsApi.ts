import { URL, instance } from '.';
import { Event } from '@/store/eventStore/types';

export const eventApi = {
  addEvent(eventData: Event) {
    return instance.post(URL.EVENTS, eventData);
  },
  fetchAllEvents() {
    return instance.get(URL.EVENTS);
  },
  deleteEvent(id: number) {
    return instance.delete(`${URL.EVENTS}/${id}`);
  },
  // updateEvent(id: number, eventData: Event) {
  //   return instance.patch(`${URL.EVENTS}/${id}`, eventData);
  // },
  updateEvent(eventData: Event) {
    return instance.patch(URL.EVENTS, eventData);
  },
};
