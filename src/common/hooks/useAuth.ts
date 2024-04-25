import { USER_LOCAL_STORAGE_KEY } from '../const/localStorage';

export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, 'true');
  };

  const signOut = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  };

  const isLogged = () =>
    !!JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY))?.token;

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
