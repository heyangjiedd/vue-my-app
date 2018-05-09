/**
 * Created by heyangjie on 2018/5/9.
 */
import axios from 'axios'
// 请求前拦截
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  });
// 返回数据拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.data)
  });
export default axios
