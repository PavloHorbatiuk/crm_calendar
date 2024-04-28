import { LoginType, RegisterPick } from '@/components/AuthForm/types';
import { URL, instance } from '.';

export const authApi = {
  registration(userData: RegisterPick) {
    return instance.post(URL.REGISTRATION, userData);
  },
  login(userData: LoginType) {
    return instance.post(URL.LOGIN, userData);
  },
};
