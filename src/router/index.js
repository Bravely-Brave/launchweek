import { createRouter, createWebHistory } from 'vue-router'
import formView from '../views/formView.vue'
import mainView from '../views/mainView.vue'


console.log
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: formView 
  },
  {
    path: '/main',
    name: 'form',
    component: mainView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router