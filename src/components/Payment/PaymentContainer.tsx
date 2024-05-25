import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useEventStore } from '@/store/eventStore';
import { getCurrentMonthEvents } from '@/utils/date';
import { type Event } from '@/store/eventStore/types';

import Payment from './Payment';

function PaymentContainer() {
  const { events, success, updateEvent } = useEventStore(
    useShallow((state) => state)
  );
  const monthEvents = getCurrentMonthEvents(events);

  const onUpdate = useCallback(
    async (event: Event) => {
      await updateEvent(event);
    },
    [updateEvent]
  );

  return (
    <Payment monthEvents={monthEvents} onUpdate={onUpdate} success={success} />
  );
}

export default PaymentContainer;
