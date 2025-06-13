import axios from '../services/axios-customize.service';

export const get = async(path:string)=>{
  const data:object = await axios.get(path)
  return data;
}

export const post = async(path:string, data?:object, config?:object)=>{
  const res:object = await axios.post(path, data, config);
  return res;
}