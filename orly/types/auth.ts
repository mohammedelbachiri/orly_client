export interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
}

export interface Customer extends User {
  phone: string;
  address: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}
