<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="slide-fade">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="(item, index) in breadcrumData"
        :key="item.path"
      >
        <span
          :class="[
            index === breadcrumData.length - 1 ? 'no-rederict' : 'rederict'
          ]"
          >{{ item.meta.title }}</span
        >
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const breadcrumData = ref([])
function generateData(routes) {
  return routes.filter((item) => item.meta.title && item.meta.icon)
}
// 监听route变化,生成新面包屑数据
watch(
  route,
  () => {
    breadcrumData.value = generateData(route.matched)
  },
  {
    immediate: true
  }
)
// 获取主题颜色
const store = useStore()
const menuBgColor = ref(store.getters.cssVariables.menuBg)
console.log(menuBgColor)
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 8px;
  display: inline-block;
  line-height: 50px;
  font-size: 14px;
  .rederict {
    color: #666;
    cursor: pointer;
  }
  .rederict:hover {
    color: v-bind(menuBgColor);
  }
  ::v-deep .no-rederict {
    color: #97a8be;
    cursor: text;
  }
}
</style>
