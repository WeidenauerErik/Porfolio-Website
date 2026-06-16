<script setup>
import {Folder, Mail, Trophy, FolderGit2, ShieldCheck, GraduationCap, Gamepad2, Thermometer} from 'lucide-vue-next'
import {useReveal} from '@/composables/useReveal'

useReveal()

const heroTech = ['Symfony', 'Spring Boot', 'VueJS', 'Python']

const stats = [
  {value: 'WM', label: 'Weltmeister im Voltigieren', Icon: Trophy},
  {value: '5+', label: 'Software-Projekte', Icon: FolderGit2},
  {value: 'NSE 1–3', label: 'Fortinet zertifiziert', Icon: ShieldCheck},
  {value: '2026', label: 'Abschluss HTL Rennweg', Icon: GraduationCap},
]

const featured = [
  {
    title: 'OnlyDance',
    year: '2025 – 2026',
    Icon: Gamepad2,
    bg: 'linear-gradient(150deg,#2563EB,#1e3a8a)',
    short: 'Unity-basierte Tanz-Lern-App mit AR und Symfony-Backend – meine Diplomarbeit.',
    to: '/services',
  },
  {
    title: 'Heatseekers',
    year: '2024',
    Icon: Thermometer,
    bg: 'linear-gradient(150deg,#0ea5e9,#2563EB)',
    short: 'Server-Raum-Monitoring auf Basis von Spring Boot und VueJS.',
    to: '/services',
  },
]

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="hero-section">
      <div class="grain" :style="{ backgroundImage: grainSvg }" aria-hidden="true"></div>
      <div class="hero-grid">
        <!-- Left -->
        <div data-reveal>
          <span class="available-badge">
            <span class="dot" aria-hidden="true"></span>
            Verfügbar für neue Projekte
          </span>
          <h1 class="hero-h1">
            Full Stack<br>
            <span style="color: #2563EB;">Developer</span>
          </h1>
          <p class="hero-sub">
            Hi, ich bin <strong style="color:#0F0F0F;">Erik Weidenauer</strong> – Absolvent der HTL Rennweg
            und fokussierter Freelancer. Ich entwickle moderne, hochwertige Software.
          </p>
          <div class="tech-chips">
            <span v-for="t in heroTech" :key="t" class="tech-chip">{{ t }}</span>
          </div>
          <!--
          <div class="hero-btns">
            <RouterLink to="/services" class="btn-primary">
              <Folder :size="18" /> Leistungen ansehen
            </RouterLink>

            <RouterLink to="/contact" class="btn-secondary">
              <Mail :size="18" /> Kontakt
            </RouterLink>
          </div>
          -->
        </div>
        
        <!-- Right: photo -->
        <div data-reveal data-reveal-delay="120" class="hero-photo-wrap">
          <img
              src="/erik2.jpeg"
              alt="Portrait von Erik Weidenauer, Full Stack Developer und Freelancer aus Wien"
              class="hero-photo"
              width="440"
              height="517"
          >
        </div>
      </div>
    </section>

    <!-- Stats -->
    <!--
    <section class="stats-section">
      <div data-reveal class="stats-grid">
        <div v-for="s in stats" :key="s.label" class="stat-card">
          <component :is="s.Icon" :size="22" style="color:#2563EB; margin-bottom: 10px;" />
          <div class="stat-value">{{ s.value }}</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </section>
    -->

    <!-- Featured Work -->
    <!--
    <section class="featured-section">
      <div data-reveal class="featured-header">
        <h2 class="section-title">Aktuelle Projekte</h2>
        <RouterLink to="/services" class="see-all-link">
          Leistungen ansehen <span>→</span>
        </RouterLink>
      </div>
      <div data-reveal class="featured-grid">
        <RouterLink
          v-for="p in featured"
          :key="p.title"
          :to="p.to"
          class="featured-card"
        >
          <div class="featured-card-visual" :style="{ background: p.bg }">
            <component :is="p.Icon" :size="48" style="color:rgba(255,255,255,0.85);" />
          </div>
          <div class="featured-card-body">
            <div class="featured-card-meta">
              <span class="featured-card-title">{{ p.title }}</span>
              <span class="featured-card-year">{{ p.year }}</span>
            </div>
            <p class="featured-card-desc">{{ p.short }}</p>
          </div>
        </RouterLink>
      </div>
    </section>
    -->
  </main>
</template>

<style scoped>
.hero-section {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 28px 36px;
}

@media (max-width: 640px) {
  .hero-section {
    padding: 36px 20px 24px;
  }

  .hero-grid {
    gap: 28px;
  }

  .hero-photo-wrap {
    max-width: 320px;
  }
}

.grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: multiply;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  gap: 50px;
  align-items: center;
  position: relative;
}

.available-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 999px;
  background: #F8F8F8;
  border: 1px solid rgba(15, 15, 15, 0.06);
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 26px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(34, 197, 94);
  box-shadow: rgba(34, 197, 94, 0.18) 0px 0px 0px 4px;
  flex-shrink: 0;
}

.hero-h1 {
  font-size: clamp(48px, 7.5vw, 80px);
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: 800;
  margin: 0 0 22px;
}

.hero-sub {
  font-size: clamp(16.5px, 2vw, 19px);
  line-height: 1.6;
  color: #555;
  max-width: 480px;
  margin: 0 0 14px;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.tech-chip {
  padding: 6px 13px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  font-size: 13.5px;
  font-weight: 600;
}

.hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 26px;
  border-radius: 14px;
  background: #2563EB;
  color: #fff;
  font-size: 15.5px;
  font-weight: 600;
  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.32);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(37, 99, 235, 0.42);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 26px;
  border-radius: 14px;
  background: #fff;
  color: #0F0F0F;
  border: 1px solid rgba(15, 15, 15, 0.14);
  font-size: 15.5px;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.btn-secondary:hover {
  transform: translateY(-3px);
  border-color: #2563EB;
}

.hero-photo-wrap {
  position: relative;
  aspect-ratio: 4 / 4.7;
  max-width: 440px;
  justify-self: center;
  width: 100%;
}

.hero-photo-bg {
  position: absolute;
  inset: 7% 5% 0 5%;
  border-radius: 30px;
  background: linear-gradient(160deg, #eaf0ff 0%, #dbe5ff 100%);
}

.hero-photo {
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 95%;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 26px;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.22);
  z-index: 2;
}

/* Stats */
.stats-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 28px 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 16px;
}

.stat-card {
  background: #F8F8F8;
  border: 1px solid rgba(15, 15, 15, 0.05);
  border-radius: 20px;
  padding: 24px 26px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.stat-value {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13.5px;
  color: #666;
  line-height: 1.4;
}

/* Featured */
.featured-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 28px 60px;
}

.featured-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 22px;
}

.section-title {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0;
}

.see-all-link {
  font-size: 14.5px;
  font-weight: 600;
  color: #2563EB;
  transition: opacity 0.2s ease;
}

.see-all-link:hover {
  opacity: 0.75;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 20px;
}

.featured-card {
  background: #fff;
  border: 1px solid rgba(15, 15, 15, 0.08);
  border-radius: 22px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.1);
}

.featured-card-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
}

.featured-card-body {
  padding: 22px 24px;
}

.featured-card-meta {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
}

.featured-card-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.featured-card-year {
  font-size: 13.5px;
  font-weight: 600;
  color: #6B7280;
}

.featured-card-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #555;
  margin: 0;
}
</style>
