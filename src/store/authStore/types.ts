import { LoginType, RegistrationType } from '@/components/AuthForm/types';

export interface AuthSchema {
  authData?: User | null;
  success: boolean;
  isRegister: boolean;
  loading?: boolean;
  error?: string;
}

export interface User {
  name: string;
  token: string;
  email: string;
  role?: string;
}

export interface UpdatedUser {
  oldData: User;
  newData: {
    name: string;
    email: string;
  };
}

export interface AuthAction {
  login: (userData: LoginType) => Promise<void>;
  register: (userData: RegistrationType) => Promise<void>;
  update: (userData: UpdatedUser) => Promise<void>;
  setIsRegister: (register: boolean) => void;
}
