import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '@/views/Pageview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage      
    },
  ]
})

export default router
