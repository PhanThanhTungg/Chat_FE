const prePath = "http://localhost:3000";
import * as request from "../helpers/request.helper";

const handleAuth = (res) => {
  if(!res.error){
    localStorage.setItem("accessToken", res.user.accessToken);
  }
}

export const register = async(data)=>{
  const res = await request.post(`${prePath}/user/register`, JSON.stringify(data), {
    headers:{
      "Content-Type":"application/json"
    }
  })
  handleAuth(res);
  return res;
}

export const login = async(data)=>{
  const res = await request.post(`${prePath}/user/login`, JSON.stringify(data), {
    headers:{
      "Content-Type":"application/json"
    }
  })
  handleAuth(res);
  return res;
}
