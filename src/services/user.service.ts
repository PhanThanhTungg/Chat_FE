import type { AuthResponse, LoginInput, RegisterInput } from "@/types/auth.type";
import * as request from "../helpers/request.helper";

const handleAuth = (res:AuthResponse ) => {
  if(!res.error && res.user && res.accessToken){
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("user", JSON.stringify(res.user));
  }
}

export const register = async(data: RegisterInput)=>{
  const res:AuthResponse = await request.post(`/user/register`, data);
  handleAuth(res);
  return res;
}

export const login = async(data: LoginInput)=>{
  const res:AuthResponse = await request.post(`/user/login`, data);
  handleAuth(res);
  return res;
}

export const refreshToken = async()=>{
  const res:AuthResponse = await request.post(`/user/refreshToken`);
  return res;
}
