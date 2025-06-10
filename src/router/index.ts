import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Capital from '../views/Capital/index.vue'
import CapitalNav from '../views/Capital/Capitalnav.vue'
import my from '../views/My/index.vue'
import login from '../views/Login/index.vue'
import register from '../views/Register/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CapitalNav,
    },
    {
      path: '/my',
      name: 'my',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
  ],
})

export default router
