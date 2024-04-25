import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/calendar')({
  beforeLoad: () => ({ getTitle: () => 'Calendar' }),
  component: lazyRouteComponent(() => import('@/components/Calendar/Calendar')),
});
