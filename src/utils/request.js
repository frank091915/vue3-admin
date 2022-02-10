import axios from 'axios'
import { ElMessage } from 'element-plus'

export const service = axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_BASE_API
})

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
    return Promise.reject(error)
  }
)
