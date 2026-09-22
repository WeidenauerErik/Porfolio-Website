<script setup>
import {Send, Mail, Phone, MapPin} from 'lucide-vue-next'
import {useReveal} from '@/composables/useReveal'

useReveal()

const contacts = [
  {Icon: Mail, label: 'E-Mail', value: 'weidenauer.erik@outlook.com', href: 'mailto:weidenauer.erik@outlook.com'},
  {Icon: Phone, label: 'Telefon', value: '+43 664 75596725', href: 'tel:+4366475596725'},
  {Icon: MapPin, label: 'Standort', value: 'Österreich', href: null},
]

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
</script>

<template>
  <main class="contact-main">
    <div data-reveal class="contact-card">
      <div class="contact-grain" :style="{ backgroundImage: grainSvg }" aria-hidden="true"></div>
      <div class="contact-glow" aria-hidden="true"></div>
      <div class="contact-grid">
        <div style="position: relative;">
          <h1 class="contact-h1">Sag hallo.</h1>
          <p class="contact-sub">
            Fragen, Feedback oder einfach vernetzen – schreib mir gerne.
          </p>
          <div class="contact-actions">
            <a href="mailto:weidenauer.erik@outlook.com" class="btn-email">
              <Send :size="18" aria-hidden="true"/>
              E-Mail senden
            </a>
          </div>
        </div>

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
              <component :is="c.Icon" :size="21"/>
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
  padding: 56px 28px 88px;
}

.contact-card {
  position: relative;
  background: var(--ink);
  color: #fff;
  border-radius: 28px;
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
  background: radial-gradient(circle, rgba(52, 82, 214, 0.55), transparent 70%);
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

.contact-h1 {
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.0;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 18px;
}

.contact-sub {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
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
  border-radius: 12px;
  background: var(--accent);
  color: #fff;
  font-size: 15.5px;
  font-weight: 600;
  transition: transform 0.2s var(--ease-out);
}

.btn-email:hover {
  transform: translateY(-3px);
}

.btn-email:active {
  transform: translateY(-1px) scale(0.97);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1px;
  border-radius: 16px;
  overflow: hidden;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  transition: background 0.2s var(--ease-out);
}

a.contact-row:hover {
  background: rgba(255, 255, 255, 0.09);
}

.contact-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 11px;
  background: rgba(52, 82, 214, 0.3);
  color: #a9bbf7;
  flex-shrink: 0;
}

.contact-label {
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
}

.contact-value {
  font-size: 13px;
  font-weight: 600;
  margin-top: 3px;
  word-break: break-word;
}

@media (max-width: 640px) {
  .contact-main {
    padding: 32px 16px 56px;
  }

  .contact-card {
    padding: 32px 24px;
  }

  .contact-grid {
    gap: 28px;
  }

  .contact-h1 {
    font-size: clamp(30px, 8vw, 56px);
  }
}
</style>
