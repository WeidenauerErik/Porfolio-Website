<script setup>
import {computed} from 'vue'
import {ExternalLink} from 'lucide-vue-next'
import {useReveal} from '@/composables/useReveal'
import {useI18n} from '@/composables/useI18n'
import {content} from '@/i18n/content'

useReveal()

const {locale} = useI18n()
const t = computed(() => content[locale.value].zertifikate)
</script>

<template>
  <main class="page-main">
    <header data-reveal class="page-hero">
      <h1 class="page-h1">{{ t.h1 }}</h1>
      <p class="page-sub">{{ t.sub }}</p>
    </header>

    <!-- Certificates -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">{{ t.certsHeading }}</h2>
      <div class="cert-timeline">
        <div v-for="c in t.certificates" :key="c.title" class="cert-timeline-item">
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
              {{ t.proofBtn }}
              <ExternalLink :size="14" aria-hidden="true"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">{{ t.awardsHeading }}</h2>
      <div class="cert-timeline">
        <div v-for="a in t.awards" :key="a.title" class="cert-timeline-item">
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
