const prePath = "http://localhost:3000";
import * as request from "../helpers/request.helper";

export const register = async(data)=>{
  const res = await request.post(`${prePath}/user/register`, JSON.stringify(data), {
    headers:{
      "Content-Type":"application/json"
    }
  })
  return res;
}
