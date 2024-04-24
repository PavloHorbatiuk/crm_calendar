import Calendar from '@/components/Calendar/Calendar';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/calendar')({
  component: Calendar,
});
