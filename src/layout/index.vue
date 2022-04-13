<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sideBarOpened ? 'openSideBar' : 'hideSidebar']"
  >
    <!-- 侧边栏 left-->
    <div class="sidebar-container" :style="{ background: variables.menuBg }">
      <SideBar></SideBar>
    </div>
    <div class="main-container">
      <!-- 顶部导航栏 navbar -->
      <div class="fixed-header">
        <NavBar />
        <TagsView />
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
import TagsView from '@/components/tagsView'
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
  transition: width #{$sideBarDuration};
  width: calc(100% - #{$sideBarWidth});
}

.hideSidebar {
  .fixed-header {
    width: calc(100% - #{$hideSideBarWidth});
  }
}
</style>
