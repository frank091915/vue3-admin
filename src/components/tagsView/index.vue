<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        class="tags-view-item"
        :class="[isActive(item) ? 'active' : '']"
        :style="{
          backgroundColor: isActive(item)
            ? $store.getters.cssVariables.menuBg
            : ''
        }"
        v-for="(item, index) in $store.getters.tagViewsList"
        :key="item.path"
        :to="item.path"
        @contextmenu.prevent="handleContextMenu($event, index)"
        >{{ item.title }} <i class="el-icon-close" v-show="!isActive(item)"></i>
      </router-link>
      <ContextMenu
        v-show="contextMenuShow"
        :menuStyle="menuStyle"
        :index="selectedIndex"
      />
    </el-scrollbar>
  </div>
</template>

<script setup>
import ContextMenu from './contextMenu'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
function isActive(tag) {
  return tag.path === route.path
}

const contextMenuShow = ref(false)
const menuStyle = ref({
  left: 0,
  top: 0
})
const selectedIndex = ref(0)
function handleContextMenu(e, index) {
  const { x, y } = e
  // 获取鼠标点击时，相对于屏幕的left和top值
  //   console.log(index, '鼠标右侧展示菜单', x, y)
  menuStyle.value.left = x + 'px'
  menuStyle.value.top = y + 'px'
  selectedIndex.value = index
  contextMenuShow.value = true
}

function closeContextMenu() {
  contextMenuShow.value = false
}

watch(contextMenuShow, (val) => {
  if (val) {
    document.addEventListener('click', closeContextMenu, false)
  } else {
    document.removeEventListener('click', closeContextMenu)
  }
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        color: #fff;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 4px;
        }
      }
      // close 按钮
      .el-icon-close {
        width: 16px !important;
        height: 16px !important;
        line-height: 10px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(0.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
}
</style>
