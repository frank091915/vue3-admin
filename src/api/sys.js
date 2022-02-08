import { service } from '@/utils/request'

/**
 * 封装登录接口请求模块
 * return promise实例对象
 */
export const login = (data) => {
  return service({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
