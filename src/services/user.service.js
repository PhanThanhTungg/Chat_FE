const prePath = "http://localhost:3000";
import * as request from "../helpers/request.helper";

export const register = async(data)=>{
  const res = await request.post(`${prePath}/register`, data, {
    headers:{
      "Content-Type":"application/json"
    }
  })
  return res;
}
