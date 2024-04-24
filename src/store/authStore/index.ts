import { create } from 'zustand';
import { AuthAction, AuthSchema } from './types';
import { devtools } from 'zustand/middleware';
import { authApi } from '@/api/authApi';
import { USER_LOCAL_STORAGE_KEY } from '@/common/const/localStorage';

const authState: AuthSchema = {
  authData: null,
  loading: false,
  error: undefined,
};

export const useAuthStore = create<AuthSchema & AuthAction>()(
  devtools(
    (set) => ({
      ...authState,
      login: async (userData) => {
        set({ loading: true });
        try {
          const response = await authApi.fetchLogin(userData);
          if (response.status === 200) {
            set({ authData: response.data, loading: false });
            localStorage.setItem(
              USER_LOCAL_STORAGE_KEY,
              JSON.stringify(response.data)
            );
          }
        } catch (error: any) {
          set({ error: error.message });

          console.error('Error with login', error.message);
        } finally {
          set({ loading: false });
        }
      },
      register: async (userData) => {},
    }),
    {
      name: 'auth',
    }
  )
);
