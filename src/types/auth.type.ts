import type { Response } from "./response.type";

// login
export interface LoginInput {
  email: string;
  password: string;
}

export interface SuccessAuthResponse extends Response {
  accessToken: string;
  user: {
    fullName: string;
    email: string;
    phone: string;
    avatar: string;
  };
}

export interface ErrorAuthResponse extends Response {
  error: string;
}

export interface AuthResponse{
  accessToken?: string;
  user?: {
    fullName: string;
    email: string;
    phone: string;
    avatar?: string;
  };
  error?: {
    message: string;
  };
}

// register
export interface CheckRegisterInput {
  email: boolean | null;
  phone: boolean | null;
  fullName: boolean | null;
  password: boolean | null;
  repassword: boolean | null;
}
export interface RegisterInput extends LoginInput {
  fullName: string;
  phone: string;
  repassword: string;
}

//use Auth
export interface User{
  accessToken?: string;
  user?:{
    fullName: string;
    email: string;
    phone: string;
    avatar?: string;
  }
}

export interface checkAuthResponse {
  isAuthenticated: boolean;
  isRefreshed?: boolean;
  accessToken?: string;
}

