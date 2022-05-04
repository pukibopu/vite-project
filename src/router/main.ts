import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/home/index.vue'
import AppLayout from '@/layout/AppLayout.vue'
import ProductRoutes from './modules/product'
const route: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Index
      },
      ProductRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: route
})

export default router
