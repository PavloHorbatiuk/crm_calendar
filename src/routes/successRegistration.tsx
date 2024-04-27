import SuccessRegistration from '@/components/SuccessRegistration/SuccessRegistration';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/successRegistration')({
  component: SuccessRegistration,
});
