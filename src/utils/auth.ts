import { USER_LOCAL_STORAGE_KEY } from '@/common/const/localStorage';

export const isAuthenticated = () =>
  localStorage.getItem(USER_LOCAL_STORAGE_KEY) === 'true';

export const signIn = async () => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, 'true');
};

export const signOut = async () => {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
};
