import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './styles/index.scss'
import installIcons from '@/icon/index.js'

const app = createApp(App)
installElementPlus(app)
installIcons(app) // 导入的函数与element-plus一样，将app传入，进行全局组件注册
app.use(store).use(router).mount('#app')
