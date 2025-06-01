import axios from '../services/axios-customize.service';

export const get = async(path)=>{
  const data = await axios.get(path)
  return data;
}

export const post = async(path, data, config )=>{
  const res = await axios.post(path, data, config)
  console.log("res: ", res);
  return res;
}