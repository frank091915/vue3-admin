<template>
  <div class="app-main"><router-view></router-view></div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { isTag } from '@/utils/isTags'
const route = useRoute()
const store = useStore()
// 监听route变化
watch(
  route,
  (to, from) => {
    const {
      fullPath,
      meta,
      path,
      params,
      query,
      meta: { title }
    } = to
    if (isTag(to)) {
      store.commit('app/setTagViews', {
        fullPath,
        meta,
        path,
        params,
        query,
        title
      })
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
