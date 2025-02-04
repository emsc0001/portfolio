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
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: ProjectsView
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: ContactsView
  // }
})

export default router
