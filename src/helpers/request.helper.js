import axios from 'axios';

export const get = async(path)=>{
  const {data} = await axios.get(path).catch(err=>{
    console.log(err);
  })
  return data;
}

export const post = async(path, data, config )=>{
  const {res} = await axios.post(path, data, config).catch(err=>{
    console.log(err);
  })
  return res;
}