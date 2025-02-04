import { createRouter, createWebHistory } from 'vue-router'
import SinglePageView from '../views/SinglePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'single-page',
      component: SinglePageView,
    },
  ],
})

export default router
