// 导入所有svg图标
// 将SvgIcon组件进行全局注册
import SvgIcon from '@/components/svgIcon/index.vue'

const svgRequire = require.context('./svg', false, /\.svg$/)
// svgRequire 是一个函数,接受一个request参数,该函数有三个属性
/**
 * resolve 函数，返回request被解析后得到的模块id
 * keys 函数，返回文件数组，这里返回svg图标
 * id  返回context module的id
 */
// 将svgRequire.keys返回的的文件名作为request参数传入svgRequire，进行图标注册
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

// 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。
// 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标
// 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
