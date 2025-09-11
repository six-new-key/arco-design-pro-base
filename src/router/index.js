import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes, asyncRoutes, anyRoutes } from './routes'

const routes = [
  ...constantRoutes,
  ...asyncRoutes,
  ...anyRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router