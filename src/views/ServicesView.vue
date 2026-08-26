<script setup>
import { Layers, Globe, Gamepad2, Server, Workflow, Check } from 'lucide-vue-next'
import { useReveal } from '@/composables/useReveal'

useReveal()

const services = [
  {
    Icon: Globe,
    title: 'Web-Entwicklung',
    delay: 0,
    desc: 'Moderne, performante Web-Apps mit Symfony, VueJS und React – von der Idee bis zum Launch.',
    bullets: ['Symfony & Spring Boot Backends', 'VueJS & React Frontends', 'Responsive & Modern Designes'],
  },
  {
    Icon: Gamepad2,
    title: 'App & Game Development',
    delay: 80,
    desc: 'Interaktive Anwendungen und AR-Erlebnisse mit Unity – wie in meiner Diplomarbeit OnlyDance.',
    bullets: ['Unity & AR', 'Cross-Platform (Capacitor)', 'Backend (Symfony & Spring Boot)'],
  },
  {
    Icon: Server,
    title: 'Backend & APIs',
    delay: 160,
    desc: 'Skalierbare Systeme mit Spring Boot und Python – robuste APIs und saubere Architektur.',
    bullets: ['Spring Boot & Python & Symfony', 'Datenbank-Design'],
  },
  {
    Icon: Workflow,
    title: 'Automatisierung',
    delay: 240,
    desc: 'Prozesse und Netzwerke automatisieren – Python-Scripting und Tooling aus echter Engineering-Praxis.',
    bullets: ['Python & Java', 'Netzwerk-Automatisierung', 'Tooling & Integration'],
  },
]

</script>

<template>
  <main class="services-main">
    <div data-reveal class="services-header">
      <span class="section-tag">
        <Layers :size="15" aria-hidden="true" /> Skills & Projekte
      </span>
      <h1 class="services-h1">Womit ich mich beschäftige.</h1>
      <p class="services-sub">
        Sauberer, wartbarer Code über Web-Apps, Backend-Systeme, Tools und APIs – ein Überblick
        über meine Schwerpunkte und Projekte.
      </p>
    </div>

    <div class="services-grid">
      <div
        v-for="svc in services"
        :key="svc.title"
        data-reveal
        :data-reveal-delay="svc.delay"
        class="service-card"
      >
        <span class="service-icon" aria-hidden="true">
          <component :is="svc.Icon" :size="27" />
        </span>
        <h3 class="service-title">{{ svc.title }}</h3>
        <p class="service-desc">{{ svc.desc }}</p>
        <div class="service-bullets">
          <div v-for="b in svc.bullets" :key="b" class="bullet-row">
            <span class="bullet-check" aria-hidden="true"><Check :size="14" /></span>
            {{ b }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.services-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 28px 30px;
}

@media (max-width: 640px) {
  .services-main { padding: 36px 20px 20px; }
  .services-header { margin-bottom: 28px; }
  .service-card { padding: 24px; }
}
.services-header {
  max-width: 640px;
  margin-bottom: 44px;
}
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2563EB;
  margin-bottom: 16px;
}
.services-h1 {
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.03;
  letter-spacing: -0.03em;
  font-weight: 800;
  margin: 0 0 18px;
}
.services-sub {
  font-size: 17px;
  line-height: 1.6;
  color: #555;
  margin: 0;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 22px;
  margin-bottom: 30px;
}
.service-card {
  background: #fff;
  border: 1px solid rgba(15,15,15,0.08);
  border-radius: 24px;
  padding: 32px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(15,23,42,0.1);
  border-color: rgba(37,99,235,0.3);
}
.service-icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(37,99,235,0.1);
  color: #2563EB;
  margin-bottom: 22px;
}
.service-title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
}
.service-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 22px;
}
.service-bullets {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.bullet-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14.5px;
  color: #333;
}
.bullet-check {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  background: rgba(37,99,235,0.1);
  color: #2563EB;
  flex-shrink: 0;
}
</style>
