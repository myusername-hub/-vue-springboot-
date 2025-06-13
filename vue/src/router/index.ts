import { createRouter, createWebHistory } from 'vue-router'
import CapitalIndex from '@/views/Capital/index.vue'
import my from '../views/My/index.vue'
import login from '../views/Login/index.vue'
import register from '../views/Register/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CapitalIndex,
    },
    {
      path: '/my',
      name: 'my',
      component: my,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
  ],
})

export default router
