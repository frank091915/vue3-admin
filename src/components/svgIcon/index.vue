<template>
  <div>
    <!-- 展示外部图标 -->
    <div
      v-if="isExternal"
      :class="className"
      :style="externalIconStyles"
      class="svg-external-icon svg-icon"
    ></div>
    <svg v-else :class="className" class="svg-icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <!-- 展示内部图标 -->
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { isExternal as isExternalValidation } from '@/utils/validate'
// vue3 中defineProps用来接收props
const props = defineProps({
  // icon路径
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

// 需要一些计算属性
/**
 * 内部图标
 */

/**
 * 外部图标样式
 */

/**
 * 判断是否为外部图标
 */
// 判断一个资源是否为内部资源是一个常用方法，可以封装为一个工具
const isExternal = computed(() => isExternalValidation(props.icon))
// 外部图标样式
const externalIconStyles = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  'webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
// 内部图标添加一个统一前缀
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important ;
  display: inline-block;
}
</style>
