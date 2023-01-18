import { createRouter, createWebHistory } from 'vue-router'
import formView from '@/views/formView.vue'
import homeView from '@/views/homeView.vue'


const routes = [
  {
    path: '/form',
    name: 'form',
    component: formView
  }, 
  {
    path: '/',
    name: 'home',
    component: homeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router