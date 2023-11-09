import { createContext, useEffect, useState } from "react";
import Axioscall from "./Api";
import { UserUrl } from "./BaseUrl";
import { Show_Toast } from "../utils/Toast";
import { useNavigate } from "react-router-dom";


export const ContextDatas = createContext();
    const Context = ({children})=>{
        const [filterusers,SetFilterusers]=useState([])
        const [filterdata,SetFilterData]=useState({sex:"male",fromage:19,toage:40,status:true})
        // console.log("lfilterdata",filterdata)
        const navigate = useNavigate()
        useEffect(() => {
          let token  = localStorage.getItem("token-cofee")
          if (!token){
            let path = window.location.pathname
            if(path.includes("login")){
                return
            }else{
                window.location.href='/login'
            }
            
          }
          console.log("token",token)
        }, [])
        
        const filterHandler=async()=>{
            try {
                let body= filterdata 
                if(!body.lat){
                    let storedBodyString = localStorage.getItem("searchfilterdata");
                    body = JSON.parse(storedBodyString)
                    SetFilterData(body)
                }
                console.log("body",body)
                localStorage.setItem("searchfilterdata",JSON.stringify(body))
                let data = await Axioscall("get",UserUrl,body)
                console.log("datafiltered",data)
                if(data.status===200){
                    handleractive()
                    SetFilterusers(data.data)
                }else{
                    Show_Toast(data.data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
        const handleractive =async()=>{
            try {
                const currentDate = new Date();
                let userid = localStorage.getItem("userid-cofee")
                let body = {lat:filterdata.lat,lon:filterdata.lon,status:true,coffee_interest:currentDate.toISOString(),id:userid}
                let data = await Axioscall("post",UserUrl,body)
                console.log("dataaa",data)
                if(data.data.status===200){
                    console.log("updated location")
                    // window.location.href="/profileFilter"
                    // navigate("/profileFilter")
                }else{
                    console.error("locationn error")
                }
            } catch (error) {
                console.log(error)
            }
        }
    return <ContextDatas.Provider 
    value={{filterusers,SetFilterusers,filterdata,SetFilterData,filterHandler,handleractive
     }}
    >{children}</ContextDatas.Provider>
}
export default Context;