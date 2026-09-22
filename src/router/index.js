import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const BASE_URL = 'https://erikweidenauer.at'

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Erik Weidenauer – Full Stack Developer',
      description: 'Full Stack Developer. Spezialisiert auf Symfony, VueJS, Spring Boot und Python. Portfolio mit Projekten aus Web-Entwicklung, Backend und Automatisierung.',
      canonical: `${BASE_URL}/`,
    },
  },
  {
    path: '/werdegang',
    component: () => import('../views/WerdegangView.vue'),
    meta: {
      title: 'Werdegang – Erik Weidenauer',
      description: 'Berufserfahrung und Ausbildung von Erik Weidenauer, Full Stack Developer aus Österreich.',
      canonical: `${BASE_URL}/werdegang`,
    },
  },
  {
    path: '/zertifikate',
    component: () => import('../views/ZertifikateView.vue'),
    meta: {
      title: 'Zertifikate & Auszeichnungen – Erik Weidenauer',
      description: 'Zertifikate, Workshops und sportliche Auszeichnungen von Erik Weidenauer.',
      canonical: `${BASE_URL}/zertifikate`,
    },
  },
  {
    path: '/kontakt',
    component: () => import('../views/KontaktView.vue'),
    meta: {
      title: 'Kontakt – Erik Weidenauer',
      description: 'Kontaktiere Erik Weidenauer für Softwareentwicklung, Kooperationen oder Fragen.',
      canonical: `${BASE_URL}/kontakt`,
    },
  },
  // Legacy bookmarks/backlinks from earlier site versions.
  { path: '/about', redirect: '/werdegang' },
  { path: '/services', redirect: '/werdegang' },
  { path: '/projects', redirect: '/' },
  { path: '/contact', redirect: '/kontakt' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
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
