<template>
  <el-menu-item :index="route.path" v-if="route.children.length === 0">
    <i class="el-icon-location"></i>
    <span>{{ route.meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else :index="route.path">
    <template #title>
      <i class="el-icon-location"></i>
      <span>{{ route.meta.title }}</span>
    </template>
    <sideBarItem
      :route="child"
      v-for="child in route.children"
      :key="child.path"
    ></sideBarItem>
  </el-submenu>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
