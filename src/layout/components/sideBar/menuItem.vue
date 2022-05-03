<template>
  <!-- element-plus图标 -->
  <i :class="icon" v-if="icon.includes('el-icon')" class="sub-el-icon"></i>
  <!-- 非element-plus图标 -->
  <!-- <svg-icon v-else :icon="icon"></svg-icon> -->
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
