import md5 from 'md5'
import { login } from '@/api/sys'

export default {
  namespaced: true, // 表示这是一个单独的模块,
  state: () => {},
  mutations: {},
  actions: {
    login(context, userInfo) {
      console.log(userInfo)
      return new Promise((resolve, reject) => {
        const { username, password } = userInfo
        login({
          username,
          password: md5(password)
        })
          .then((res) => {
            console.log(res)
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}
