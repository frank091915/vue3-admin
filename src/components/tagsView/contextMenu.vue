<template>
  <ul class="context-menu-container" :style="menuStyle">
    <li @click="onRefreshClick">刷新</li>
    <li @click="onCloseRightClick">关闭右侧</li>
    <li @click="onCloseOtherClick">关闭其他</li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuStyle: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

console.log(props)
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
