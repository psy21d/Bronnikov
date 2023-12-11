import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/accelerator',
    name: 'accelerator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AcceleratorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
