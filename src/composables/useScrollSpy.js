import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(ids, offset = 110) {
  const activeId = ref(ids[0])
  let ticking = false

  function update() {
    const line = window.scrollY + offset
    let current = ids[0]
    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= line) current = id
    }
    activeId.value = current
    ticking = false
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return { activeId }
}
