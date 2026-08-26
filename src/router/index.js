import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const BASE_URL = 'https://erikweidenauer.at'

const breadcrumbs = {
  '/about': [
    { '@type': 'ListItem', position: 1, name: 'Start', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Über mich', item: `${BASE_URL}/about` },
  ],
  '/services': [
    { '@type': 'ListItem', position: 1, name: 'Start', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Skills & Projekte', item: `${BASE_URL}/services` },
  ],
  '/contact': [
    { '@type': 'ListItem', position: 1, name: 'Start', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: `${BASE_URL}/contact` },
  ],
}

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: {
      title: 'Erik Weidenauer – Full Stack Developer',
      description: 'Full Stack Developer. Spezialisiert auf Symfony, VueJS, Spring Boot und Python. Portfolio mit Projekten aus Web, Backend und APIs.',
      canonical: `${BASE_URL}/`,
    },
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Über mich | Erik Weidenauer – Full Stack Developer',
      description: 'HTL-Rennweg-Absolvent und Softwareentwickler. Fortinet NSE 1–3 zertifiziert. Erfahrung mit Symfony, VueJS, Spring Boot, Python und Netzwerk-Engineering.',
      canonical: `${BASE_URL}/about`,
    },
  },
  {
    path: '/services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Skills & Projekte | Erik Weidenauer – Full Stack Developer',
      description: 'Web-Entwicklung, App-Entwicklung, Backend-Systeme und Automatisierung mit Symfony, VueJS, Spring Boot und Python.',
      canonical: `${BASE_URL}/services`,
    },
  },
  {
    path: '/contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Kontakt | Erik Weidenauer – Full Stack Developer',
      description: 'Nimm Kontakt mit Erik Weidenauer auf – Full Stack Developer. Schreib mir gerne bei Fragen oder Anliegen.',
      canonical: `${BASE_URL}/contact`,
    },
  },
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

  if (title) document.title = title

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

  const bc = breadcrumbs[to.path]
  let bcScript = document.getElementById('ld-breadcrumb')
  if (bc) {
    const data = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: bc,
    })
    if (!bcScript) {
      bcScript = document.createElement('script')
      bcScript.type = 'application/ld+json'
      bcScript.id = 'ld-breadcrumb'
      document.head.appendChild(bcScript)
    }
    bcScript.textContent = data
  } else if (bcScript) {
    bcScript.remove()
  }
})

export default router
