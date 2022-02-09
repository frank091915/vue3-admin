import md5 from 'md5'
import { login } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'

export default {
  namespaced: true, // 表示这是一个单独的模块,
  state: () => ({
    token: getItem(TOKEN)
  }),
  mutations: {
    setToken(state, val) {
      state.token = val
      setItem(TOKEN, val)
    }
  },
  actions: {
    login(context, userInfo) {
      return new Promise((resolve, reject) => {
        const { username, password } = userInfo
        login({
          username,
          password: md5(password)
        })
          .then((res) => {
            console.log(res)
            context.commit('setToken', res.data.token)
            this.commit('user/setToken', res.data.token)
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}
