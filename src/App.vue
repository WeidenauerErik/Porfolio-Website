<script setup>
import { ref } from 'vue'
import {
  Code2, Home, Briefcase, GraduationCap, Award, Mail, ArrowUpRight, Menu, X
} from 'lucide-vue-next'
import { useScrollSpy } from '@/composables/useScrollSpy'
import HomeView from '@/views/HomeView.vue'

const menuOpen = ref(false)

const navLinks = [
  { label: 'Start',           id: 'home',            Icon: Home },
  { label: 'Berufserfahrung', id: 'berufserfahrung',  Icon: Briefcase },
  { label: 'Ausbildung',      id: 'ausbildung',       Icon: GraduationCap },
  { label: 'Zertifikate',     id: 'zertifikate',      Icon: Award },
]

const { activeId } = useScrollSpy(navLinks.map(l => l.id))

function isActive(link) {
  return activeId.value === link.id
}

function closeMenu() { menuOpen.value = false }
</script>

<template>
  <div style="position: relative; overflow-x: clip; background: var(--paper); min-height: 100vh; display: flex; flex-direction: column;">

    <!-- Accessibility: Skip to main content -->
    <a href="#main-content" class="skip-link">Zum Inhalt springen</a>

    <!-- ░░░ NAVIGATION ░░░ -->
    <header class="nav-header">
      <nav class="nav-inner" aria-label="Hauptnavigation">
        <div class="nav-links desktop-only">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            class="nav-link"
            :class="{ active: isActive(link) }"
            :aria-current="isActive(link) ? 'page' : undefined"
          >
            <component :is="link.Icon" :size="15" style="opacity:0.55;" aria-hidden="true" />
            {{ link.label }}
            <span v-if="isActive(link)" class="active-bar"></span>
          </a>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <a href="#contact" class="btn-talk" @click="closeMenu">
            Let's Talk <ArrowUpRight :size="16" aria-hidden="true" />
          </a>
          <button
            class="hamburger mobile-only"
            @click="menuOpen = !menuOpen"
            :aria-expanded="menuOpen"
            aria-controls="mobile-navigation"
            aria-label="Menü"
          >
            <component :is="menuOpen ? X : Menu" :size="22" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <nav v-if="menuOpen" id="mobile-navigation" class="mobile-menu" aria-label="Mobile Navigation">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          class="mobile-link"
          :class="{ active: isActive(link) }"
          :aria-current="isActive(link) ? 'page' : undefined"
          @click="closeMenu"
        >
          <component :is="link.Icon" :size="19" style="color: var(--accent);" aria-hidden="true" />
          {{ link.label }}
        </a>
      </nav>
    </header>

    <!-- ░░░ PAGE CONTENT ░░░ -->
    <div id="main-content" tabindex="-1" style="flex: 1;">
      <HomeView />
    </div>

    <!-- ░░░ FOOTER ░░░ -->
    <footer class="site-footer">
      <div class="footer-inner">
        <nav aria-label="Footer-Navigation">
          <div class="footer-section-title">Navigation</div>
          <div style="display: flex; flex-direction: column; gap: 11px;">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="'#' + link.id"
              class="footer-link"
            >
              <component :is="link.Icon" :size="15" style="opacity: 0.6;" aria-hidden="true" />
              {{ link.label }}
            </a>
          </div>
        </nav>
        <div>
          <div class="footer-section-title">Kontakt</div>
          <div style="display: flex; flex-direction: column; gap: 11px;">
            <a href="mailto:weidenauer.erik@outlook.com" class="footer-link">
              <Mail :size="15" style="opacity: 0.6;" aria-hidden="true" />
              weidenauer.erik@outlook.com
            </a>
            <a href="https://github.com/WeidenauerErik" target="_blank" rel="noopener noreferrer" class="footer-link" aria-label="GitHub Profil von Erik Weidenauer (öffnet in neuem Tab)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;display:block;flex-shrink:0;" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/erik-weidenauer" target="_blank" rel="noopener noreferrer" class="footer-link" aria-label="LinkedIn Profil von Erik Weidenauer (öffnet in neuem Tab)">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;display:block;flex-shrink:0;" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <span style="display: inline-flex; align-items: center; gap: 6px;">
            © Erik Weidenauer - all rights reserved
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.nav-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: saturate(160%) blur(14px);
  background: rgba(250, 250, 248, 0.82);
  border-bottom: 1px solid rgba(19, 18, 23, 0.06);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--ink);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--ink-soft);
  transition: color 0.15s var(--ease-out);
}
.nav-link.active { color: var(--ink); font-weight: 600; }
.active-bar {
  position: absolute;
  left: 22px;
  right: 0;
  bottom: -7px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
}
.btn-talk {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 11px;
  background: var(--ink);
  color: #fff;
  font-size: 14.5px;
  font-weight: 600;
  transition: transform 0.2s var(--ease-out), background 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
}
.btn-talk:hover { transform: translateY(-2px); background: var(--accent); box-shadow: var(--shadow-md); }
.btn-talk:active { transform: translateY(0) scale(0.97); }
.hamburger {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 11px;
  border: 1px solid rgba(19, 18, 23, 0.14);
  background: var(--paper);
  cursor: pointer;
  color: var(--ink);
  transition: transform 0.15s var(--ease-out);
}
.hamburger:active { transform: scale(0.94); }
.mobile-menu {
  border-top: 1px solid rgba(19, 18, 23, 0.06);
  background: rgba(250, 250, 248, 0.98);
  padding: 8px 18px 18px;
}
.mobile-link {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 15px 10px;
  font-size: 17px;
  font-weight: 600;
  color: var(--ink-soft);
  border-bottom: 1px solid rgba(19, 18, 23, 0.05);
}
.mobile-link.active { color: var(--ink); }
.desktop-only { display: flex; }
.mobile-only { display: none; }

/* Footer */
.site-footer {
  border-top: 1px solid rgba(19, 18, 23, 0.07);
  background: var(--paper);
  margin-top: 60px;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 32px;
}
.footer-section-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-soft);
  margin-bottom: 16px;
}
.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14.5px;
  color: var(--ink-soft);
  transition: color 0.15s var(--ease-out);
}
.footer-link:hover { color: var(--accent); }
.footer-bottom {
  border-top: 1px solid rgba(19, 18, 23, 0.07);
}
.footer-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 13.5px;
  color: var(--ink-soft);
}

@media (max-width: 880px) {
  .desktop-only { display: none !important; }
  .mobile-only { display: grid !important; }
}

@media (max-width: 640px) {
  .btn-talk { display: none !important; }
  .nav-inner { padding: 13px 18px; }
  .footer-inner { padding: 36px 20px; }
  .footer-bottom-inner { padding: 16px 20px; }
}

@media (max-width: 400px) {
  .nav-inner { padding: 12px 14px; }
  .nav-logo { font-size: 16px; gap: 8px; }
}
</style>
