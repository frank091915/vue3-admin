// 快速访问
import cssVariables from '@/styles/variables.scss'

const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo,
  tokenValidTime: (state) => state.user.tokenValidTime,
  cssVariables: () => cssVariables,
  sideBarOpened: (state) => state.app.sideBarOpened
}
export default getters
