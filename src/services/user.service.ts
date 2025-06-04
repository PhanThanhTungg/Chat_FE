import type { ErrorAuthResponse, LoginInput, SuccessAuthResponse } from "@/types/auth.type";
import * as request from "../helpers/request.helper";

const handleAuth = (res) => {
  if(!res.error){
    localStorage.setItem("accessToken", res.user.accessToken);
  }
}

export const register = async(data: RegisterInput)=>{
  const res = await request.post(`/user/register`, data);
  handleAuth(res);
  return res;
}

export const login = async(data: LoginInput)=>{
  const res:object = await request.post(`/user/login`, data);
  handleAuth(res);
  console.log("login res", res);
  return res;
}
