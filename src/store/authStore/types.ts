export interface AuthSchema {
  authData?: User | null;
  email?: string;
  password?: string;
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

export interface newUser {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface AuthAction {
  login: (userData: User) => Promise<void>;
  register: (userData: newUser) => Promise<void>;
  changeRegister: (register: boolean) => void;
}
