import { createRouter, createWebHashHistory } from 'vue-router'
import Properties from '@/utils/properties'
import PropertyLayout from '@/views/PropertyLayout'

const routes = Object.values(Properties).map(property => {
  return {
    path: `/${property.path}`,
    name: property.name,
    component: PropertyLayout,
    props: { property }
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
