/**
 * 使用 axios
 */
// import { browserHistory } from "react-router";
import domain from "./domain";
import axios from "axios";

//设置
const axiosInstance = axios.create({
  baseURL: domain,
  timeout: 5000,  //超时时间
  withCredentials: true
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

//添加响应拦截器
axiosInstance.interceptors.response.use(
  res => {
    //对响应数据做些事
    return res;
  },
  error => {
    //请求错误时做些事
    let errorString = error.toString();
    console.error(error);
    if ( errorString.indexOf('of') >= 0 ){ //超时
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
