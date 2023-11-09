import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import { Show_Toast } from "../utils/Toast";

export const APICall = async (method, endpoint, data, params, form_type, timeout = 10000) => {
    var response = "";
    var token = localStorage.getItem('user');
    const headers = {
      'Content-Type': form_type ? form_type : 'application/json',
      'Authorization': `Bearer ${token}`
    };
  
    const axiosConfig = {
      headers: headers,
      params: params,
      timeout: 86400000,
    };
  
    if (method === "post") {
      await axios.post(`${BaseUrl}${endpoint}`, data, axiosConfig)
        .then((res) => {
          console.log(res);
          response = {
            'status': true,
            'data': res?.data?.data,
          };
        })
        .catch((error) => {
          Show_Toast(error?.response?.data?.message ? error?.response?.data?.message : 'Something Went Wrong', false);
          response = error?.response?.data?.message;
        });
    } else if (method === "get") {
      await axios.get(`${BaseUrl}${endpoint}`, axiosConfig)
        .then((res) => {
          console.log(res);
          response = {
            'status': res.status,
            'data': res.data.data,
          };
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else if (method === "put") {
      await axios.put(`${BaseUrl}${endpoint}`, data, axiosConfig)
        .then((res) => {
          console.log(res);
          response = {
            'status': res.status,
            'data': res.data.data,
          };
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else if (method === "patch") {
      await axios.patch(`${BaseUrl}${endpoint}`, data, axiosConfig)
        .then((res) => {
          console.log(res);
          response = {
            'status': res.status,
            'data': res.data.data,
          };
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else if (method === "delete") {
      await axios.delete(`${BaseUrl}${endpoint}`, { data: data, ...axiosConfig })
        .then((res) => {
          console.log(res);
          response = {
            'status': res.status,
            'data': res.data.data,
          };
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      response = {
        "status": 500,
        "message": "Not a valid Request",
      };
    }
  
    return response;
  };