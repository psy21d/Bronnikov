import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/LoginPage.vue')
  },
  {
    path: '/expert',
    name: 'expert',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ExpertPage.vue')
  },
  {
    path: '/projectant',
    name: 'projectant',
    component: () => import(/* webpackChunkName: "about" */ '../pages/ProjectantPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
