<script setup>
import { Folder, Tag, Gamepad2, Thermometer, CheckSquare, ExternalLink, Github, ArrowUpRight } from 'lucide-vue-next'
import { useReveal } from '@/composables/useReveal'

useReveal()

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const projects = [
  {
    title: 'OnlyDance',
    year: '2025 – 2026',
    category: 'Diplomarbeit',
    Icon: Gamepad2,
    bg: 'linear-gradient(150deg,#2563EB,#1e3a8a)',
    desc: 'Eine Unity-basierte Tanz-Lern-Anwendung mit AR und einem Symfony-Backend. Meine Diplomarbeit an der HTL Rennweg.',
    tags: ['Unity', 'AR', 'Symfony'],
    links: [
      { label: 'Website',  href: 'https://onlydance.at/',                                         Icon: ExternalLink },
      { label: 'Frontend', href: 'https://github.com/WeidenauerErik/OnlyDance-AR-Unity',           Icon: Github },
      { label: 'Backend',  href: 'https://github.com/WeidenauerErik/OnlyDance-AR-Symfony',         Icon: Github },
    ],
  },
  {
    title: 'Heatseekers',
    year: '2024',
    category: 'Monitoring',
    Icon: Thermometer,
    bg: 'linear-gradient(150deg,#0ea5e9,#2563EB)',
    desc: 'Ein Server-Raum-Monitoring-System auf Basis von Spring Boot und VueJS.',
    tags: ['Spring Boot', 'VueJS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/WeidenauerErik/Heatseekers', Icon: Github },
    ],
  },
  {
    title: 'TaskMaster',
    year: '2022',
    category: 'Web App',
    Icon: CheckSquare,
    bg: 'linear-gradient(150deg,#1e293b,#0F0F0F)',
    desc: 'Web-Anwendung zur zentralen Verwaltung von Hausaufgaben einer Klasse. Lehrkräfte vergeben Aufgaben, Schüler sehen sie im eigenen Account.',
    tags: ['Web App', 'PHP'],
    links: [
      { label: 'GitHub', href: 'https://github.com/WeidenauerErik/TaskMaster2.0', Icon: Github },
    ],
  },
]
</script>

<template>
  <main class="projects-main">
    <div data-reveal class="projects-header">
      <span class="section-tag">
        <Folder :size="15" /> Projekte
      </span>
      <h1 class="projects-h1">Was ich gebaut habe.</h1>
    </div>

    <div class="projects-list">
      <div
        v-for="p in projects"
        :key="p.title"
        data-reveal
        class="project-card"
      >
        <!-- Visual -->
        <div class="project-visual" :style="{ background: p.bg }">
          <div class="project-grain" :style="{ backgroundImage: grainSvg }"></div>
          <component :is="p.Icon" :size="64" style="color: rgba(255,255,255,0.92); position: relative; z-index: 1;" />
          <span class="project-badge">
            <Tag :size="13" style="color: #2563EB;" /> {{ p.category }}
          </span>
        </div>

        <!-- Info -->
        <div class="project-body">
          <div class="project-title-row">
            <h3 class="project-title">{{ p.title }}</h3>
            <span class="project-year">{{ p.year }}</span>
          </div>
          <p class="project-desc">{{ p.desc }}</p>
          <div class="project-tags">
            <span v-for="t in p.tags" :key="t" class="project-tag">{{ t }}</span>
          </div>
          <div class="project-links">
            <a
              v-for="lk in p.links"
              :key="lk.label"
              :href="lk.href"
              target="_blank"
              rel="noopener"
              class="project-link-btn"
            >
              <component :is="lk.Icon" :size="15" /> {{ lk.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.projects-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 28px 30px;
}
.projects-header {
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
.projects-h1 {
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.03;
  letter-spacing: -0.03em;
  font-weight: 800;
  margin: 0;
}
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.project-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  background: #fff;
  border: 1px solid rgba(15,15,15,0.08);
  border-radius: 26px;
  overflow: hidden;
}
.project-visual {
  position: relative;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-grain {
  position: absolute;
  inset: 0;
  opacity: 0.1;
}
.project-badge {
  position: absolute;
  top: 18px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  border-radius: 999px;
  background: rgba(255,255,255,0.92);
  font-size: 12.5px;
  font-weight: 600;
  z-index: 2;
}
.project-body {
  padding: 30px 32px;
}
.project-title-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 10px;
}
.project-title {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
}
.project-year {
  font-size: 13.5px;
  font-weight: 600;
  color: #999;
}
.project-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 18px;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.project-tag {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(37,99,235,0.08);
  color: #2563EB;
  font-size: 12.5px;
  font-weight: 600;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 16px;
  border-radius: 11px;
  background: #0F0F0F;
  color: #fff;
  font-size: 13.5px;
  font-weight: 600;
  transition: transform 0.2s ease, background 0.2s ease;
}
.project-link-btn:hover {
  transform: translateY(-2px);
  background: #2563EB;
}
</style>
