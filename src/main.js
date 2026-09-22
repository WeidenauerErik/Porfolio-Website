import { createApp, nextTick } from 'vue'
import App from './App.vue'
import './style.css'

// Old routed pages now live as anchors on the single page — redirect
// legacy bookmarks/backlinks (e.g. /about) to the matching section.
const LEGACY_REDIRECTS = { '/about': '#about', '/services': '#about', '/projects': '', '/contact': '#contact' }
const hash = LEGACY_REDIRECTS[window.location.pathname]

if (hash !== undefined) {
  window.history.replaceState(null, '', `/${hash}`)
}

createApp(App).mount('#app')

if (hash) {
  nextTick(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  })
}
