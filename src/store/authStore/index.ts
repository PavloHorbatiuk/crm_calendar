import { create } from 'zustand';
import { AuthAction, AuthSchema } from './types';
import { devtools } from 'zustand/middleware';
import { authApi } from '@/api/authApi';

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
          }
        } catch (error: any) {
          set({ error: error.message });
          console.error('Error with login', error.message);
        }
      },
      register: async (userData) => {},
    }),
    {
      name: 'auth',
    }
  )
);
