<template>
  <div class="sidebar-warrap">
    <el-menu
      :unique-opened="true"
      :background-color="cssVariables.menuBg"
      :text-color="cssVariables.menuText"
      :active-text-color="cssVariables.menuActiveText"
      router
      :default-active="defualtMenu"
      :collapse="!store.getters.sideBarOpened"
    >
      <SidebarItem
        :route="route"
        v-for="route in menuData"
        :key="route.path"
      ></SidebarItem>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import store from '@/store'
import { filterRoutes, generateMenu } from '@/utils/route'
import SidebarItem from './sideBarItem'
const router = useRouter()
const filteredRoutes = filterRoutes(router.getRoutes())
const menuData = generateMenu(filteredRoutes)
const cssVariables = store.getters.cssVariables
const route = useRoute()
const defualtMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped></style>
