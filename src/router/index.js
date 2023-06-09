import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../views/Introduction.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})

export default router
