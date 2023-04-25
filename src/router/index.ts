import { createRouter, createWebHistory } from 'vue-router'
import { useUIStore } from '@/stores/ui'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

router.beforeEach(() => {
  const uiStore = useUIStore()
  uiStore.isLoading = true
})

router.afterEach(() => {
  const uiStore = useUIStore()
  uiStore.isLoading = false
})