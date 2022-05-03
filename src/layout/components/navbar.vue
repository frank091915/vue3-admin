<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown
        class="avator-container"
        trigger="click"
        @command="handleCommand"
      >
        <div class="avator-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avator || localAvator"
          >
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route, 'route')
const localAvator =
  'http://img2.sycdn.imooc.com/61110c2b0001152907400741-160-160.jpg'
const store = useStore()
function handleCommand(type) {
  if (type === 'logout') {
    handleClickLogout()
  }
}
function clearUserInfo() {
  store.dispatch('user/logout')
}
function handleClickLogout() {
  // 清楚用户信息
  clearUserInfo()
  /**
   * 清楚用户权限配置
   * 进入登录页
   * 都放到logout的action中
   */
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb-container {
    float: left;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
