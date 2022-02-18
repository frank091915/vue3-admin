<template>
  <el-menu-item :index="route.path" v-if="route.children.length === 0">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
  </el-menu-item>
  <el-submenu v-else :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
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
import MenuItem from './menuItem'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
