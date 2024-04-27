import { User, newUser } from '@/store/authStore/types';
import { URL, instance } from '.';

export const authApi = {
  fetchAuth(userData: newUser) {
    return instance.post(URL.REGISTRATION, userData);
  },
  fetchLogin(userData: User) {
    return instance.post(URL.LOGIN, userData);
  },
};
