import type { Response } from "./common.type";

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

export interface RegisterInput extends LoginInput {
  name: string;
}

