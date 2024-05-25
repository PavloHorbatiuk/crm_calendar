import { memo } from 'react';
import { type Event } from '@/store/eventStore/types';
import PaymentEvent from './PaymentEvent';

interface PaymentItemProps {
  events: Event[];
  success: boolean;
  onUpdate: (data: Event) => Promise<void>;
}

const PaymentItem = memo(function PaymentItem({
  events,
  onUpdate,
  success,
}: PaymentItemProps) {
  return events.map((event) => (
    <PaymentEvent
      key={event.id}
      event={event}
      onUpdate={onUpdate}
      success={success}
    />
  ));
});

export default PaymentItem;
