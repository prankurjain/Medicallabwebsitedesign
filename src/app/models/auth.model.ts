export interface User {
  id?: string;
  email?: string;
  phone?: string;
  name?: string;
  type: 'patient' | 'admin';
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token?: string;
}
