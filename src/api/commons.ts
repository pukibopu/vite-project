/*
 *  公共接口
 */
import request from '@/utils/request'
import { ILoginInfo } from './types/commons'
// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}
