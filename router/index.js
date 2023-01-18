import { createRouter, createWebHistory } from 'vue-router'
import formView from '../views/formView.vue'
import testView from '../views/testView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const routes = [
  {
    path: '/',
    name: 'form',
    component: formView
  }
]

export default router