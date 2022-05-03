import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'

/**
 * 私有路由表
 */
export const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/index'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      }
    ]
  }
]

/*
  公开路由表
*/
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/contractDetail',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile'),
        meta: {
          title: '个人首页',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/contractDetail',
        name: 'profile',
        component: () => import('@/views/contractDetail'),
        meta: {
          title: '合同信息',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
