import { ref, watch } from 'vue'

const STORAGE_KEY = 'site-locale'

function detectInitialLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') return stored
  } catch {
    // localStorage unavailable, fall through to default
  }
  return 'de'
}

const locale = ref(detectInitialLocale())

watch(locale, (l) => {
  try {
    localStorage.setItem(STORAGE_KEY, l)
  } catch {
    // ignore write failures (private mode, etc.)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = l
  }
}, { immediate: true })

function setLocale(l) {
  locale.value = l
}

function toggleLocale() {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}

export function useI18n() {
  return { locale, setLocale, toggleLocale }
}
