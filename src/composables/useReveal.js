import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let io = null

  onMounted(() => {
    setTimeout(() => {
      const els = Array.from(document.querySelectorAll('[data-reveal]'))
      els.forEach(el => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(28px)'
        el.style.transition = 'opacity 0.7s cubic-bezier(0.22,0.61,0.36,1), transform 0.7s cubic-bezier(0.22,0.61,0.36,1)'
      })
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none' })
        return
      }
      io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target
            const d = parseInt(el.getAttribute('data-reveal-delay') || '0', 10)
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'none'
            }, d)
            io.unobserve(el)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })
      els.forEach(el => io.observe(el))
    }, 70)
  })

  onUnmounted(() => {
    if (io) io.disconnect()
  })
}
