<template>
  <div class="sidebar-warrap">
    <div class="logo-container">
      <h1 class="logo-title">后台通用管理模板</h1>
    </div>

    <el-scrollbar>
      <el-menu :unique-opened="true">
        <SidebarItem
          :route="route"
          v-for="route in menuData"
          :key="route.path"
        ></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenu } from '@/utils/route'
import SidebarItem from './sideBarItem'
const router = useRouter()
const filteredRoutes = filterRoutes(router.getRoutes())
const menuData = generateMenu(filteredRoutes)
</script>

<style lang="scss" scoped></style>
