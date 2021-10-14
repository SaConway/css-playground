import { createRouter, createWebHashHistory } from 'vue-router'
import Properties from '@/utils/properties'

const routes = Object.values(Properties).map(property => {
  return {
    path: `/${property.path}`,
    name: property.name,
    component: property.component
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
