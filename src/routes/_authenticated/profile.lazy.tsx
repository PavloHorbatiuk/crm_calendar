import Profile from '@/components/Profile/Profile';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/profile')({
  component: Profile,
});
