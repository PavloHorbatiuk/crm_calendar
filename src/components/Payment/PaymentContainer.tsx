import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import { getCurrentMonthEvents } from '@/utils/date';
import { type Event } from '@/store/eventStore/types';

import Payment, { type DayWithEvents } from './Payment';

const getDayWithEvents = (events: Event[]) => {
  const dayWithEvents: DayWithEvents = {};

  events.forEach((event) => {
    const day = new Date(event.date).getDate();

    dayWithEvents[day]?.length
      ? dayWithEvents[day].push(event)
      : (dayWithEvents[day] = [event]);
  });

  return dayWithEvents;
};

function PaymentContainer() {
  const { events, success, updateEvent } = useEventStore(
    useShallow((state) => state)
  );

  const monthEvents = getCurrentMonthEvents(events);
  const dayWithEvents = getDayWithEvents(monthEvents);

  const onUpdate = useCallback(
    async (event: Event) => {
      await updateEvent(event);
    },
    [updateEvent]
  );

  return (
    <Payment
      dayWithEvents={dayWithEvents}
      onUpdate={onUpdate}
      success={success}
    />
  );
}

export default PaymentContainer;
