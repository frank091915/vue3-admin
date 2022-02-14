<template>
  <div class="sidebar-warrap">
    <div class="logo-container">
      <h1 class="logo-title">后台通用管理模板</h1>
    </div>

    <el-scrollbar>
      <el-menu :unique-opened="true">
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
