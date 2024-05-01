import { create } from 'zustand';
import { AuthAction, AuthSchema } from './types';
import { devtools } from 'zustand/middleware';
import { authApi } from '@/api/authApi';
import { USER_LOCAL_STORAGE_USER } from '@/common/const/localStorage';
import { immer } from 'zustand/middleware/immer';

const authState: AuthSchema = {
  authData: null,
  isRegister: false,
  loading: false,
  error: undefined,
  success: false,
};

export const useAuthStore = create<AuthSchema & AuthAction>()(
  immer(
    devtools(
      (set) => ({
        ...authState,
        login: async (userData) => {
          set({ loading: true, success: false });
          try {
            const response = await authApi.login(userData);
            if (response.status === 201) {
              set({ authData: response.data, loading: false, success: true });
              localStorage.setItem(
                USER_LOCAL_STORAGE_USER,
                JSON.stringify(response.data)
              );
            }
          } catch (error: any) {
            set({ error: error.response.data.message });
            console.error('Error with login', error.response.data.message);
          } finally {
            set({ loading: false });
          }
        },
        register: async (userData) => {
          set({ loading: true, success: false });
          try {
            const { name, email, password } = userData;
            const response = await authApi.registration({
              name,
              email,
              password,
            });
            if (response.status === 201) {
              set({ authData: response.data, success: true });
              localStorage.setItem(
                USER_LOCAL_STORAGE_USER,
                JSON.stringify(response.data)
              );
            }
          } catch (error: any) {
            set({ error: error.response.data.message });
            console.error(
              'Error with registration',
              error.response.data.message
            );
          } finally {
            set({ loading: false });
          }
        },
        setIsRegister: (register) => {
          set({ isRegister: register });
        },
      }),
      {
        name: 'auth',
      }
    )
  )
);
