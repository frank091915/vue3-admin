import md5 from 'md5'
import { login, profile } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN, USERINFO } from '@/constant/index'
import router from '@/router'

export default {
  namespaced: true, // 表示这是一个单独的模块,
  state: () => ({
    token: getItem(TOKEN),
    userInfo: {}
  }),
  mutations: {
    setToken(state, val) {
      state.token = val
      setItem(TOKEN, val)
    },
    setUserInfo(state, val) {
      state.roles = val
      setItem(USERINFO, val)
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
            // context.commit('setToken', res.data.token)
            this.commit('user/setToken', res.token)
            router.push('/')
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async getUserInfo() {
      console.log('getUserInfo')
      try {
        const userInfo = await profile()
        this.commit('user/setUserInfo', userInfo)
        return userInfo
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}
