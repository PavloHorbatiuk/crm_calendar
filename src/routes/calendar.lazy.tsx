import CalendarPage from '@/pages/Calendar/CalendarPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/calendar')({
  component: CalendarPage,
});
