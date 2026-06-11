import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '../pages/ContactView.vue'
import HomeView from '../pages/HomeView.vue'
import KeyboardsView from '../pages/KeyboardsView.vue'
import OsuWorksView from '../pages/OsuWorksView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/works', name: 'works', component: OsuWorksView },
  { path: '/keyboards', name: 'keyboards', component: KeyboardsView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
