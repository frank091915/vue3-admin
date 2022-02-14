<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <div class="sidebar-container" :style="{ background: variables.menuBg }">
      <SideBar></SideBar>
    </div>
    <div class="main-container">
      <!-- 顶部导航栏 navbar -->
      <div class="fixed-header">
        <NavBar />
      </div>
      <!-- 内容区 main -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import SideBar from './components/sideBar'
import AppMain from './components/appMain'
import NavBar from './components/navbar'
import variables from '@/styles/variables.scss'
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
.app-wrapper {
  @include clearfix;
  height: 100%;
  width: 100%;
  position: relative;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
