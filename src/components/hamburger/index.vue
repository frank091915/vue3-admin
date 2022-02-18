<template>
  <div class="hamburger-container" @click="handleClick">
    <svg-icon :icon="icon" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const icon = computed(() => {
  return store.getters.sideBarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
function handleClick() {
  store.commit('app/setSideBarOpened')
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
}
</style>
