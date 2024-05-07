import { Suspense, memo } from 'react';
import Modal from '@/components/ui/Modal/Modal';
import Spinner from '@/components/ui/Spinner/Spinner';
import { Event } from '@/store/eventStore/types';
import { DeleteCardAsync } from '@/components/EventForm/DeleteCard/DeleteCardAsync';

interface IProps {
  event: Event;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
const DeleteEventModal = memo(function EventsModal(props: IProps) {
  const { isOpen, onClose, title, event } = props;

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Spinner />}>
        <DeleteCardAsync onSuccess={onClose} event={event} />
      </Suspense>
    </Modal>
  );
});

export default DeleteEventModal;
