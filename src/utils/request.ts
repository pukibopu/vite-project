import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: ''
})

request.interceptors.request.use(function (config) {
  // 设置用户token
  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 处理接口错误，比如token过期
  return response
}, function (error) {
  return Promise.reject(error)
})
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
