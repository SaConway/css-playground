import { createRouter, createWebHashHistory } from 'vue-router'
import Enums from '@/utils/enums'
import Layout from '@/views/Layout'

const routes = Object.values(Enums.PROPERTIES).map(property => {
  return {
    path: `/${property}`,
    name: property,
    component: Layout
  }
})

routes.push({
  path: '',
  redirect: `/${Enums.PROPERTIES.FLEX}`
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
