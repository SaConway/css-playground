import { createRouter, createWebHashHistory } from 'vue-router'
import AspectRatio from '../views/AspectRatio.vue'
import Outline from '../views/Outline.vue'

const routes = [
  {
    path: '/',
    redirect: 'aspect-ratio'
  },
  {
    path: '/aspect-ratio',
    name: 'AspectRatio',
    component: AspectRatio
  },
  {
    path: '/outline',
    name: 'Outline',
    component: Outline
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
