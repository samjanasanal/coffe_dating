import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import { Show_Toast } from "../utils/Toast";

export default async function Axioscall(method,url,datalist,header) {

  try {
    let baseurl = BaseUrl+'/'+url
    let data;
    let body = {
      method:method,
      url:baseurl,
      data:datalist
    }
    
    if(header){
      const headerauth = {'Authorization': ` ${localStorage.getItem('token')}`}
      body.headers = headerauth
    }
    if(method==="get"){
      data = await axios.get(baseurl,{params:datalist,headers:{'Authorization': `${localStorage.getItem('token')}`}})
    }else {
      data = await axios(body)
    }
    
   
    return data
  } catch (error) {
    console.log(error)

   
    return error
  }
    
}