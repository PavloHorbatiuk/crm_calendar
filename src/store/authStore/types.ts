export interface AuthSchema {
  authData?: User | null;
  email?: string;
  password?: string;
  loading?: boolean;
  error?: string;
}
export interface User {
  name: string;
  token: string;
  email: string;
  role?: string;
}
export interface AuthAction {
  login: (userData: User) => Promise<void>;
  register: (userData: User) => Promise<void>;
}
