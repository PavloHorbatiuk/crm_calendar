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
      (set) => ({
        ...authState,
        createEvent: async (event) => {
          set({ loading: true, success: false });
          try {
            const response = await eventApi.addEvent(event);
            if (response.status === 201) {
              console.log(response.data, 'response data');
              set({ events: response.data, loading: false, success: true });
            }
          } catch (error: any) {
            const errorMessage = error.response.statusText;
            set({ error: errorMessage });
            console.log(error.response.statusText, 'error');
            console.error('Error with create event', error.message);
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: 'event',
      }
    )
  )
);
