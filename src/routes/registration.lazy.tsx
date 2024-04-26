import RegistrationForm from '@/components/AuthForm/RegistrationForm';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/registration')({
  component: RegistrationForm,
});
