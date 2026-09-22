<script setup>
import {ExternalLink} from 'lucide-vue-next'
import {useReveal} from '@/composables/useReveal'

useReveal()

const certificates = [
  {title: 'Ubuntu Linux Professional Certificate', meta: 'Canonical · Juli 2026', href: 'https://www.linkedin.com/learning/certificates/c02c442397f52a4300bea639ed93247eae8ee84dec769f1819a38c22c0d848c1'},
  {title: 'Career Essentials in Generative AI', meta: 'Microsoft & LinkedIn · Juli 2026', href: 'https://www.linkedin.com/learning/certificates/23499515084bddf475601ed466ffb79d0eb85a02f548f269f7eeba3a766dd794'},
  {title: 'Career Essentials in GitHub Professional', meta: 'GitHub · Juli 2026', href: 'https://www.linkedin.com/learning/certificates/21c3d9262a19b1b8a24c90d13c40cba867e37465fe4f4faa036d874eb7f09bfe'},
  {title: 'Artificial Intelligence Fundamentals', meta: 'IBM · Juli 2026', href: 'https://www.credly.com/badges/26a8a95d-73f1-4c76-8193-5332029e6858/linked_in_profile'},
  {title: 'Introduction to Responsible AI', meta: 'Google · Juli 2026', href: 'https://www.skills.google/public_profiles/26104c2f-319a-4513-b082-648cb43573cc/badges/25495385'},
  {title: 'Communication and Team Building Seminar', meta: 'HTL Rennweg · März 2025'},
  {title: 'Drupal in a Day', meta: 'Drupal · Okt 2025'},
  {title: 'SkillDisplay Profile', meta: 'SkillDisplay GmbH · Juni 2026', href: 'https://my.skilldisplay.eu/en/profile/9435'},
  {title: 'Amazon Translate – Getting Started', meta: 'AWS Training & Certification · Feb 2026'},
  {title: 'Amazon Location Service – Getting Started', meta: 'AWS Training & Certification · Feb 2026'},
]

const awards = [
  {title: '6th in Europe 2026 – Vaulting (Individual)', meta: 'Fédération Equestre Internationale (FEI) · Aug. 2026'},
  {title: 'World Champion 2025 – Vaulting (Squad)', meta: 'Fédération Equestre Internationale (FEI) · Aug. 2025'},
  {title: '8th in the World 2025 – Vaulting (Individual)', meta: 'Fédération Equestre Internationale (FEI) · Juli 2025'},
  {title: '8th in Europe 2024 – Vaulting (Individual)', meta: 'Fédération Equestre Internationale (FEI) · Juli 2024'},
  {title: '12th in the World 2023 – Vaulting (Individual)', meta: 'Fédération Equestre Internationale (FEI) · Juli 2023'},
]
</script>

<template>
  <main class="page-main">
    <header data-reveal class="page-hero">
      <h1 class="page-h1">Zertifikate &amp; Auszeichnungen</h1>
      <p class="page-sub">Weiterbildungen, Workshops und sportliche Erfolge.</p>
    </header>

    <!-- Certificates -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">Zertifikate &amp; Workshops</h2>
      <div class="cert-timeline">
        <div v-for="c in certificates" :key="c.title" class="cert-timeline-item">
          <div class="cert-timeline-body">
            <div class="cert-timeline-title">{{ c.title }}</div>
            <div class="cert-timeline-meta">{{ c.meta }}</div>
            <a
                v-if="c.href"
                :href="c.href"
                target="_blank"
                rel="noopener noreferrer"
                class="proof-btn"
            >
              Nachweis anzeigen
              <ExternalLink :size="14" aria-hidden="true"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">Auszeichnungen</h2>
      <div class="cert-timeline">
        <div v-for="a in awards" :key="a.title" class="cert-timeline-item">
          <div>
            <div class="cert-timeline-title">{{ a.title }}</div>
            <div class="cert-timeline-meta">{{ a.meta }}</div>
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
  font-size: clamp(36px, 5.5vw, 60px);
  line-height: 1.05;
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

.cert-timeline {
  display: flex;
  flex-direction: column;
}

.cert-timeline-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 18px 4px;
  border-bottom: 1px solid rgba(19, 18, 23, 0.08);
}

.cert-timeline-item:first-child {
  padding-top: 4px;
}

.cert-timeline-item:last-child {
  border-bottom: none;
}

.cert-timeline-body {
  flex: 1;
}

.proof-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 15px;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(19, 18, 23, 0.16);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  white-space: nowrap;
  transition: background 0.2s var(--ease-out), border-color 0.2s var(--ease-out);
}

.proof-btn:hover {
  background: var(--accent-tint);
  border-color: rgba(19, 18, 23, 0.28);
}

.cert-timeline-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}

.cert-timeline-meta {
  font-size: 13px;
  color: var(--ink-soft);
  margin-top: 4px;
  font-variant-numeric: tabular-nums;
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

  .cert-timeline-item {
    padding: 14px 4px;
    gap: 10px;
  }
}
</style>
