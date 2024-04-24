import { USER_LOCAL_STORAGE_KEY } from '../const/localStorage';

export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, 'true');
  };

  const signOut = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  };

  const isLogged = () =>
    localStorage.getItem(USER_LOCAL_STORAGE_KEY) === 'true';

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
