import { TAG_VIEWS } from '@/constant'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true, // 表示这是一个单独的模块,
  state: () => ({
    sideBarOpened: true,
    tagViews: getItem(TAG_VIEWS) || []
  }),
  mutations: {
    setSideBarOpened(state, val) {
      state.sideBarOpened = !state.sideBarOpened
    },
    setTagViews(state, tag) {
      // 先检查是否已添加
      const hasAdded = state.tagViews.find((item) => {
        return item.path === tag.path
      })
      if (!hasAdded) {
        state.tagViews.push(tag)
        setItem(TAG_VIEWS, state.tagViews)
      }
    }
  }
}
