import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isTokenValid } from '@/utils/chekoutToken'

export const service = axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) {
      config.headers.authorization = `Bearer ${token}`
      const tokenValid = isTokenValid()
      // 前端主动介入用户token失效退出
      if (!tokenValid) {
        store.dispatch('user/logout')
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (res) => {
    const { data, message = '默认请求提示', success = true } = res
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(res)
    }
  },
  (error) => {
    ElMessage.error(error.message)
    const { code } = error
    if (code === 401) {
      store.dispatch('user/logout')
    }
    return Promise.reject(error)
  }
)
