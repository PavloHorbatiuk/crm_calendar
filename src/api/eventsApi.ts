import { URL, instance } from '.';

export const eventsApi = {
  fetchEvents() {
    return instance.get(URL.EVENTS);
  },
};
