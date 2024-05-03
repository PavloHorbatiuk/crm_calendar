import { LoginType, RegisterPick } from '@/components/AuthForm/types';
import { URL, instance } from '.';
import { Event } from '@/store/eventStore/types';
import { UpdatedUser } from '@/store/authStore/types';

export const authApi = {
  registration(userData: RegisterPick) {
    return instance.post(URL.REGISTRATION, userData);
  },
  login(userData: LoginType) {
    return instance.post(URL.LOGIN, userData);
  },
  update(userData: UpdatedUser) {
    return instance.patch(URL.UPDATE_USER, userData);
  },
};

export const eventApi = {
  addEvent(event: Event) {
    return instance.post(URL.CREATE_EVENTS, event);
  },
};
