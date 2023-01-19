import { createRouter, createWebHistory } from 'vue-router'
import matchView from '../views/matchView.vue'
import mainView from '../views/mainView.vue'
import forumView from '../views/forumView.vue'
import favoritesView from '../views/favoritesView.vue'
import chatsView from '../views/chatsView.vue'
import profileView from '../views/profileView.vue'
import helpView from '../views/helpView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: matchView 
  },
  {
    path: '/main',
    name: 'form',
    component: mainView
  },
  {
    path: '/forum',
    name: 'forum',
    component: forumView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: favoritesView
  },
  {
    path: '/chats',
    name: 'chats',
    component: chatsView
  },
  {
    path: '/profile',
    name: 'profil',
    component: profileView
  },
  {
    path: '/help',
    name: 'help',
    component: helpView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router