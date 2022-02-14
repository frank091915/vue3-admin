// 快速访问
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}',
  userInfo: (state) => state.user.userInfo,
  tokenValidTime: (state) => state.user.tokenValidTime
}
export default getters
