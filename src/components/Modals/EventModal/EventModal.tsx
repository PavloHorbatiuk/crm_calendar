import Spinner from '@/components/ui/Spinner/Spinner';
import { Suspense, memo } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const title = 'Add events';
const EventModal = memo(function EventsModal(props: IProps) {
  const { isOpen, onClose } = props;
  console.log('Events modal rendered');

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Spinner />}>
        <EventsFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});

export default EventModal;
