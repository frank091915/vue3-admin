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

export default (app) => {
  app.component('svg-icon', SvgIcon)
}