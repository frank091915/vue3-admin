<template>
  <div>
    <div class="logo-container">
      <el-avatar
        shape="square"
        :size="logoHeight"
        src="http://img2.sycdn.imooc.com/61110c2b0001152907400741-160-160.jpg"
      ></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sideBarOpened">
        后台管理系统
      </h1>
    </div>
    <el-scrollbar>
      <SideBarMenu></SideBarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SideBarMenu from './sideBarMenu.vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  padding: 10px 0 22px 0;
  display: flex;
  height: v-bind(logoHeight) + 'px';
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  .logo-title {
    margin-left: 10px;
    font-size: 16px;
    color: white;
  }
}
</style>
