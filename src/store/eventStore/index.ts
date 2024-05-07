import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { eventApi } from '@/api/authApi';
import { immer } from 'zustand/middleware/immer';
import { EventAction, EventSchema } from './types';

const authState: EventSchema = {
  events: [],
  loading: false,
  success: false,
  error: undefined,
};

export const useEventStore = create<EventSchema & EventAction>()(
  immer(
    devtools(
      (set, get) => ({
        ...authState,
        createEvent: async (event) => {
          set({ loading: true, success: false });
          try {
            const response = await eventApi.addEvent(event);
            if (response.status === 201) {
              set({
                loading: false,
                success: true,
                events: get().events.concat(response.data),
              });
            }
          } catch (error: any) {
            console.log(error, 'error');
            const errorMessage = error.response.data.message;
            set({ error: errorMessage });
            console.error('Error with create event', error.message);
          } finally {
            set({ loading: false });
          }
        },
        getAllEvents: async () => {
          set({ loading: true, success: false });
          try {
            const response = await eventApi.fetchAllEvents();
            if (response.status === 200) {
              set({
                loading: false,
                success: true,
                events: response.data,
              });
            }
          } catch (error: any) {
            const errorMessage = error.response.statusText;
            set({ error: errorMessage });

            console.error('Error with create event', error.message);
          } finally {
            set({ loading: false });
          }
        },
        deleteEvent: async (id) => {
          set({ loading: true, success: false });
          try {
            const response = await eventApi.deleteEvent(id);
            const filteredEvents = get().events.filter(
              (event) => event.id !== response.data.id
            );

            if (response.status === 200) {
              set({
                loading: false,
                success: true,
                events: filteredEvents,
              });
            }
          } catch (error: any) {
            const errorMessage = error.response.statusText;
            set({ error: errorMessage });

            console.error('Error with create event', error.message);
          } finally {
            set({ loading: false });
          }
        },
        setError: (error) => set({ error: error }),
      }),
      {
        name: 'event',
      }
    )
  )
);
