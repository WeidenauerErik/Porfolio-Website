import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const BASE_URL = 'https://erikweidenauer.at'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Erik Weidenauer – Full Stack Developer',
      description: 'Full Stack Developer. Spezialisiert auf Symfony, VueJS, Spring Boot und Python. Über mich, Berufserfahrung und Kontakt auf einer Seite.',
      canonical: `${BASE_URL}/`,
    },
  },
  // Old routed pages now live as anchors on the single page — redirect for bookmarks/backlinks.
  { path: '/about', redirect: () => ({ path: '/', hash: '#about' }) },
  { path: '/services', redirect: () => ({ path: '/', hash: '#about' }) },
  { path: '/projects', redirect: '/' },
  { path: '/contact', redirect: () => ({ path: '/', hash: '#contact' }) },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'instant' }
  },
  routes,
})

router.afterEach((to) => {
  const { title, description, canonical } = to.meta ?? {}
  if (!title) return

  document.title = title

  const setAttr = (selector, attr, value) => {
    if (!value) return
    document.querySelector(selector)?.setAttribute(attr, value)
  }

  setAttr('meta[name="description"]',        'content', description)
  setAttr('meta[name="title"]',              'content', title)
  setAttr('meta[property="og:title"]',       'content', title)
  setAttr('meta[property="og:description"]', 'content', description)
  setAttr('meta[property="og:url"]',         'content', canonical)
  setAttr('meta[name="twitter:title"]',      'content', title)
  setAttr('meta[name="twitter:description"]','content', description)
  setAttr('meta[name="twitter:url"]',        'content', canonical)
  setAttr('link[rel="canonical"]',           'href',    canonical)
})

export default router
