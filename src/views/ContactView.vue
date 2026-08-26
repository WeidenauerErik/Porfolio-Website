<script setup>
import { MessageCircle, Send, Mail, Phone, MapPin } from 'lucide-vue-next'
import { useReveal } from '@/composables/useReveal'

useReveal()

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const contacts = [
  { Icon: Mail,   label: 'E-Mail',   value: 'weidenauer.erik@outlook.com', href: 'mailto:weidenauer.erik@outlook.com' },
  { Icon: Phone,  label: 'Telefon',  value: '+43 664 75596725',            href: 'tel:+4366475596725' },
  { Icon: MapPin, label: 'Standort', value: 'Österreich',                  href: null },
]
</script>

<template>
  <main class="contact-main">
    <div data-reveal class="contact-card">
      <!-- Grain -->
      <div class="contact-grain" :style="{ backgroundImage: grainSvg }" aria-hidden="true"></div>
      <!-- Glow -->
      <div class="contact-glow" aria-hidden="true"></div>

      <div class="contact-grid">
        <!-- Left -->
        <div style="position: relative;">
          <span class="section-tag">
            <MessageCircle :size="15" aria-hidden="true" /> Kontakt
          </span>
          <h1 class="contact-h1">Sag hallo.</h1>
          <p class="contact-sub">
            Fragen, Feedback oder einfach vernetzen – schreib mir gerne.
          </p>
          <div class="contact-actions">
            <a href="mailto:weidenauer.erik@outlook.com" class="btn-email">
              <Send :size="18" aria-hidden="true" /> E-Mail senden
            </a>
            <a href="https://github.com/WeidenauerErik" target="_blank" rel="noopener noreferrer" class="btn-social" aria-label="GitHub Profil von Erik Weidenauer (öffnet in neuem Tab)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/erik-weidenauer" target="_blank" rel="noopener noreferrer" class="btn-social" aria-label="LinkedIn Profil von Erik Weidenauer (öffnet in neuem Tab)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Right: contact details -->
        <div class="contact-details">
          <component
            v-for="c in contacts"
            :key="c.label"
            :is="c.href ? 'a' : 'div'"
            :href="c.href || undefined"
            class="contact-row"
            :style="c.href ? {} : { cursor: 'default' }"
          >
            <span class="contact-icon" aria-hidden="true">
              <component :is="c.Icon" :size="21" />
            </span>
            <div>
              <div class="contact-label">{{ c.label }}</div>
              <div class="contact-value">{{ c.value }}</div>
            </div>
          </component>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 28px 30px;
}

@media (max-width: 640px) {
  .contact-main { padding: 28px 16px 24px; }
  .contact-card { padding: 32px 24px; }
  .contact-grid { gap: 28px; }
  .contact-h1 { font-size: clamp(30px, 8vw, 56px); }
}
.contact-card {
  position: relative;
  background: #0F0F0F;
  color: #fff;
  border-radius: 32px;
  padding: clamp(36px, 6vw, 68px);
  overflow: hidden;
}
.contact-grain {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  pointer-events: none;
}
.contact-glow {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(37,99,235,0.55), transparent 70%);
  filter: blur(20px);
  pointer-events: none;
}
.contact-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 44px;
  align-items: center;
}
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7aa2ff;
  margin-bottom: 18px;
}
.contact-h1 {
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-weight: 800;
  margin: 0 0 18px;
}
.contact-sub {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
  max-width: 420px;
  margin: 0 0 30px;
}
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btn-email {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 26px;
  border-radius: 14px;
  background: #2563EB;
  color: #fff;
  font-size: 15.5px;
  font-weight: 600;
  transition: transform 0.2s ease;
}
.btn-email:hover { transform: translateY(-3px); }
.btn-social {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 22px;
  border-radius: 14px;
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.12);
  transition: transform 0.2s ease, background 0.2s ease;
}
.btn-social:hover {
  transform: translateY(-3px);
  background: rgba(255,255,255,0.14);
}
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.contact-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  transition: background 0.2s ease;
}
a.contact-row:hover { background: rgba(255,255,255,0.1); }
.contact-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: rgba(37,99,235,0.25);
  color: #9bb8ff;
  flex-shrink: 0;
}
.contact-label {
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.5);
}
.contact-value {
  font-size: 16px;
  font-weight: 600;
  margin-top: 3px;
  word-break: break-word;
}
</style>
