import { URL, instance } from '.';

export const eventsApi = {
  fetchEvents() {
    return instance.get(URL.GET_ALL_EVENTS);
  },
};
