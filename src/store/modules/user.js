import md5 from 'md5'
import { login, profile } from '@/api/sys'
import { setItem, getItem, removeAllData } from '@/utils/storage'
import { TOKEN, USERINFO } from '@/constant/index'
import { setLoginTimeStampe } from '@/utils/chekoutToken'
import router from '@/router'

export default {
  namespaced: true, // 表示这是一个单独的模块,
  state: () => ({
    token: getItem(TOKEN),
    userInfo: {},
    tokenValidTime: 2 * 3600 * 1000
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
            setLoginTimeStampe()
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
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllData()
      // todo: 权限配置删除
      router.push('/login')
    }
  }
}
