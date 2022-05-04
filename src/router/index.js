import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/contractDetail',
    name: 'Home',
    component: Home
  },
  {
    path: '/contractDetail',
    name: 'contractDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/contract/contractDetail')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
