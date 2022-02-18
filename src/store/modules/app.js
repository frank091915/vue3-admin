export default {
  namespaced: true, // 表示这是一个单独的模块,
  state: () => ({
    sideBarOpened: true
  }),
  mutations: {
    setSideBarOpened(state, val) {
      state.sideBarOpened = !state.sideBarOpened
    }
  }
}
