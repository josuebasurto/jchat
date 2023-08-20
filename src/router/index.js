import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChannelView from '../views/ChannelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/channel/:channelName', // :channelName será un parámetro dinámico en la URL
      name: 'channel',
      component: ChannelView
    }
  ]
})

export default router
