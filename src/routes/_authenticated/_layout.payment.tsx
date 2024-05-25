import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/_layout/payment')({
  beforeLoad: () => ({ getTitle: () => 'Profile' }),
  component: lazyRouteComponent(
    () => import('@/components/Payment/PaymentContainer')
  ),
});
