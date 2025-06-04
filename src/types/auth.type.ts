import type { Response } from "./response.type";

// login
export interface LoginInput {
  email: string;
  password: string;
}

export interface SuccessAuthResponse extends Response {
  user: {
    fullName: string;
    accessToken: string;
  };
}

export interface ErrorAuthResponse extends Response {
  error: string;
}

export interface AuthResponse{
  user?: {
    fullName: string;
    accessToken: string;
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
  accessToken: string;
  id: string;
  email: string;
  fullName: string;

}

