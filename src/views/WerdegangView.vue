<script setup>
import {useReveal} from '@/composables/useReveal'

useReveal()

const experience = [
  {
    role: 'Full Stack Entwickler',
    org: 'SmartDisc',
    period: 'Jun 2026 – Heute',
    desc: 'Entwicklung einer plattformübergreifenden App mit Vue 3 und Capacitor (iOS, Android, Web) aus einer einzigen Codebasis. Benutzerauthentifizierung in App und Backend implementiert, Sensordaten per Peer-to-Peer-Bluetooth empfangen und Wurfdaten analysiert. RESTful-Backend-API mit Symfony und PostgreSQL entworfen und gepflegt, Infrastruktur (Dockploy, DNS, SendGrid) sowie Projektwebsite verwaltet.',
  },
  {
    role: 'Grundwehrdienst & Heeresleistungssportzentrum (Voltigieren)',
    org: 'Österreichisches Bundesheer',
    period: 'Okt 2026 – Heute',
    desc: 'Grundwehrdienst mit Einteilung im Heeresleistungssportzentrum für Voltigieren.',
  },
  {
    role: 'Freiberuflicher Softwareentwickler',
    org: 'Selbstständig',
    period: 'Jun 2026 – Aug 2026',
    desc: 'Maßgeschneiderte Softwarelösungen für Unternehmen und Privatkunden, Automatisierung von Prozessen und End-to-End-Lieferung digitaler Produkte. Sauberer, wartbarer Code in Webanwendungen, Desktop-Tools, Backend-Systemen und APIs mit PostgreSQL und Doctrine.',
  },
  {
    role: 'Website-Administrator',
    org: 'Naturfreunde Österreich',
    period: 'Jän 2023 – Feb 2026',
    desc: 'Eigenverantwortliche Administration und Wartung der offiziellen Website der Ortsgruppe Neubau, Content-Updates und Optimierung der CMS-basierten Plattform.',
  },
  {
    role: 'Praktikant Netzwerktechnik',
    org: 'CANCOM Austria',
    period: 'Aug 2024',
    desc: 'Fortinet-NSE-3-Zertifizierung erworben und Python-Skripte zur Netzwerkautomatisierung entwickelt.',
  },
  {
    role: 'Praktikant Netzwerktechnik',
    org: 'CANCOM Austria',
    period: 'Aug 2023',
    desc: 'Konfiguration und Verwaltung von Cisco-Switches sowie Palo-Alto-Networks- und Fortinet-FortiGate-Firewalls. Fortinet-NSE-1- und NSE-2-Zertifizierungen erworben.',
  },
]

const education = [
  {
    role: 'HTL Rennweg',
    org: 'Informationstechnologie · Note: 1,8',
    period: 'Sep 2021 – Jun 2026',
    desc: 'Full-Stack-Webentwicklung mit Java/Spring Boot und Symfony (PHP), Vue.js mit Capacitor für plattformübergreifende Frontends. Netzwerktechnik & Cybersecurity sowie Multimedia & Design (Adobe Creative Suite). Diplomarbeit: DanceMaster – plattformübergreifende AR-Tanz-Lernapplikation.',
  },
]
</script>

<template>
  <main class="page-main">
    <header data-reveal class="page-hero">
      <h1 class="page-h1">Berufserfahrung und Ausbildung</h1>
      <p class="page-sub">Jobs, Praktika und Ausbildung.</p>
    </header>

    <!-- Experience -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">Berufserfahrung</h2>
      <div class="timeline">
        <div v-for="x in experience" :key="x.role" class="timeline-item">
          <div>
            <div class="timeline-title-row">
              <h3 class="timeline-role">{{ x.role }}</h3>
              <span class="timeline-org">{{ x.org }}</span>
            </div>
            <div class="timeline-period">{{ x.period }}</div>
            <p class="timeline-desc">{{ x.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">Ausbildung</h2>
      <div class="timeline">
        <div v-for="e in education" :key="e.role" class="timeline-item">
          <div>
            <div class="timeline-title-row">
              <h3 class="timeline-role">{{ e.role }}</h3>
              <span class="timeline-org">{{ e.org }}</span>
            </div>
            <div class="timeline-period">{{ e.period }}</div>
            <p class="timeline-desc">{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 28px 64px;
}

.page-hero {
  margin-bottom: 48px;
}

.page-h1 {
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 14px;
}

.page-sub {
  font-size: clamp(16.5px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 480px;
  margin: 0;
}

.timeline-section {
  margin-bottom: 60px;
}

.sub-heading {
  font-size: clamp(26px, 3.5vw, 36px);
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 10px;
}

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 20px;
  padding: 24px 4px;
  border-bottom: 1px solid rgba(19, 18, 23, 0.08);
}

.timeline-item:first-child {
  padding-top: 4px;
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-title-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  align-items: baseline;
}

.timeline-role {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.timeline-org {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--accent-ink);
}

.timeline-period {
  font-size: 13px;
  color: var(--ink-soft);
  margin: 4px 0 10px;
  font-variant-numeric: tabular-nums;
}

.timeline-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0;
  max-width: 60ch;
}

@media (max-width: 640px) {
  .page-main {
    padding: 32px 20px 40px;
  }

  .page-hero {
    margin-bottom: 32px;
  }

  .timeline-section {
    margin-bottom: 40px;
  }

  .timeline-item {
    padding: 18px 4px;
    gap: 14px;
  }

  .timeline-role {
    font-size: 16px;
  }
}
</style>
