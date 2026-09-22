<script setup>
import {useReveal} from '@/composables/useReveal'

useReveal()

const experience = [
  {
    role: 'Freelancer – Softwareentwicklung',
    org: 'Selbstständig',
    period: 'Juni 2026 – Aug 2026',
    desc: 'Maßgeschneiderte Softwarelösungen für Unternehmen und Privatpersonen – Prozesse automatisieren, technische Herausforderungen lösen und digitale Ideen umgesetzt. Sauberer, wartbarer Code über Web-Apps, Desktop-Tools, Backend-Systeme und APIs.',
  },
  {
    role: 'Website Administrator',
    org: 'Naturfreunde Österreich',
    period: 'Jän 2023 – Feb 2026',
    desc: 'Betreuung und Wartung der Website der Ortsgruppe Neubau.',
  },
  {
    role: 'Network Engineering Praktikum',
    org: 'CANCOM Austria',
    period: 'Aug 2024',
    desc: 'NSE-3-Zertifizierung abgeschlossen; Python-Skripte für Netzwerk-Automatisierung entwickelt und implementiert.',
  },
  {
    role: 'Network Engineering Praktikum',
    org: 'Kapsch BusinessCom',
    period: 'Aug 2023',
    desc: 'NSE 1 & NSE 2 erworben; Palo Alto- und FortiGate-Firewalls sowie Cisco-Switches in praktischen Netzwerkumgebungen konfiguriert.',
  },
]

const education = [
  {
    role: 'HTL Rennweg',
    org: 'Information Technology',
    period: '2021 – 2026',
    desc: 'Praxisnahe Ausbildung in Softwareentwicklung, Network Engineering, Cybersecurity und Projektmanagement – mit starkem Fokus auf Problemlösung, sichere Systeme und Teamarbeit.',
  },
]
</script>

<template>
  <main class="page-main">
    <header data-reveal class="page-hero">
      <h1 class="page-h1">Werdegang</h1>
      <p class="page-sub">Berufserfahrung und Ausbildung.</p>
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
