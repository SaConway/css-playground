import { createRouter, createWebHashHistory } from 'vue-router'
import Enums from '@/utils/enums'
import PropertyLayout from '@/views/PropertyLayout'

const routes = Object.values(Enums.PROPERTIES).map(property => {
  return {
    path: `/${property}`,
    name: property,
    component: PropertyLayout
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
