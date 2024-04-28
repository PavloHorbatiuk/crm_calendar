import { createLazyFileRoute } from '@tanstack/react-router';
import LoginPage from '@/pages/LoginPage/LoginPage';

export const Route = createLazyFileRoute('/auth/login')({
  component: LoginPage,
});
