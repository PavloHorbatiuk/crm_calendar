import { URL, instance } from '.';
import { User } from '@/store/authStore/types';
import { LoginType, RegisterPick } from '@/components/AuthForm/types';

export const authApi = {
  registration(userData: RegisterPick) {
    return instance.post(URL.REGISTRATION, userData);
  },
  login(userData: LoginType) {
    return instance.post(URL.LOGIN, userData);
  },
  updateUser(userData: User) {
    return instance.patch(URL.UPDATE_USER, userData);
  },
};
