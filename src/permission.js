import router from '@/router'
// import { getItem } from '@/utils/storage' 不用从本地获取，直接从vuex中拿
import store from '@/store'

const whiteList = ['/login', '/404', '401']
router.beforeEach(async (to, from, next) => {
  /**
   * 如果用户没有登录，跳转到login页面
   * 如果用户登录后，判断token是否过期；如果过期，进图login页面，如果没有过期，判断to是否为login页面，是的话，进行提示
   */
  //   let token = getItem('token')
  const hasLogin = store.getters.token
  const userInfo = store.getters.userInfo
  if (!hasLogin) {
    // 如果没有登录，只能进入白名单页面，否则调整到登录页面
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('login')
    }
  } else {
    // 如果登录了，不能进入登录页，要访问登录页时进入首页
    if (to.path === '/login') {
      next('/')
    } else {
      if (!userInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  }
})
