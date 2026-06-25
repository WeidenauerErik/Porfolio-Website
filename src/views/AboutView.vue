<script setup>
import {
  User, Briefcase, Globe, Terminal, Shield, GraduationCap,
  Award, Cloud, ShieldCheck, LayoutTemplate, Users
} from 'lucide-vue-next'
import { useReveal } from '@/composables/useReveal'

useReveal()

const socials = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/WeidenauerErik' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/erik-weidenauer' },
]

const experience = [
  {
    role: 'Freelancer – Softwareentwicklung',
    org: 'Selbstständig',
    period: 'Juni 2026 – heute',
    Icon: Briefcase,
    desc: 'Maßgeschneiderte Softwarelösungen für Unternehmen und Privatpersonen – Prozesse automatisieren, technische Herausforderungen lösen und digitale Ideen umsetzen. Sauberer, wartbarer Code über Web-Apps, Desktop-Tools, Backend-Systeme und APIs.',
  },
  {
    role: 'Website Administrator',
    org: 'Naturfreunde Österreich',
    period: 'Jän 2023 – Feb 2026',
    Icon: Globe,
    desc: 'Betreuung und Wartung der Website der Ortsgruppe Neubau.',
  },
  {
    role: 'Network Engineering Praktikum',
    org: 'CANCOM Austria',
    period: 'Aug 2024',
    Icon: Terminal,
    desc: 'NSE-3-Zertifizierung abgeschlossen; Python-Skripte für Netzwerk-Automatisierung entwickelt und implementiert.',
  },
  {
    role: 'Network Engineering Praktikum',
    org: 'Kapsch BusinessCom',
    period: 'Aug 2023',
    Icon: Shield,
    desc: 'NSE 1 & NSE 2 erworben; Palo Alto- und FortiGate-Firewalls sowie Cisco-Switches in praktischen Netzwerkumgebungen konfiguriert.',
  },
]

const skillGroups = [
  { label: 'Backend',           items: ['Symfony', 'Spring Boot', 'Python', 'Doctrine'] },
  { label: 'Frontend',          items: ['VueJS', 'React', 'Unity', 'Wordpress', 'Drupal'] },
  { label: 'Netzwerk & Cloud',  items: ['Palo Alto', 'FortiGate', 'Cisco', 'AWS'] },
  { label: 'Sprachen',          items: ['Deutsch (Muttersprache)', 'Englisch (B2)'] },
]

const certificates = [
  { title: 'AWS – Amazon Location Service',     meta: 'AWS Training & Certification · Feb 2026',  Icon: Cloud },
  { title: 'AWS – Amazon Translate',            meta: 'AWS Training & Certification · Feb 2026',  Icon: Cloud },
  { title: 'Fortinet NSE 1 – 3',               meta: 'Network Security Associate · 2023',        Icon: ShieldCheck },
  { title: 'DRUPAL in a Day',                   meta: 'Workshop · Grundlagen von Drupal',         Icon: LayoutTemplate },
  { title: 'Communication & Teambuilding',       meta: 'Seminar',                                  Icon: Users },
]
</script>

<template>
  <main class="about-main">

    <!-- Intro -->
    <div data-reveal class="about-intro-grid">
      <div>
        <span class="section-tag">
          <User :size="15" aria-hidden="true" /> Über mich
        </span>
        <h1 class="about-h1">Das bin ich!</h1>
        <p class="about-p">
          Ich spezialisiere mich auf <strong style="color:#0F0F0F;">VueJS, Symfony, Spring Boot und Python</strong>
          und arbeite ständig daran, meine technische Expertise zu vertiefen und effiziente, skalierbare
          Lösungen zu liefern – mit Präzision, Neugier und dem Anspruch, jeden Tag besser zu werden.
        </p>
        <div class="social-btns">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            class="social-btn"
          >
            <svg v-if="s.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <svg v-if="s.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            {{ s.label }}
          </a>
        </div>
      </div>

      <div class="about-photo-wrap">
        <img src="/erik.jpg" alt="Portrait von Erik Weidenauer, Full Stack Developer" class="about-photo" width="400" height="460">
      </div>
    </div>

    <!-- Experience -->
    <div data-reveal class="timeline-section">
      <h2 class="sub-heading">Berufserfahrung</h2>
      <div class="timeline">
        <div v-for="x in experience" :key="x.role" class="timeline-item">
          <span class="timeline-icon" aria-hidden="true">
            <component :is="x.Icon" :size="22" />
          </span>
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

    <!-- Education + Skills -->
    <div data-reveal class="edu-skills-grid">
      <div class="edu-card">
        <span class="edu-icon" aria-hidden="true">
          <GraduationCap :size="23" />
        </span>
        <h3 class="edu-title">HTL Rennweg</h3>
        <div class="edu-meta">Information Technology · 2021 – 2026</div>
        <p class="edu-desc">
          Praxisnahe Ausbildung in Softwareentwicklung, Network Engineering, Cybersecurity und
          Projektmanagement – mit starkem Fokus auf Problemlösung, sichere Systeme und Teamarbeit.
        </p>
      </div>
      <div class="skills-card">
        <h3 class="skills-title">Skills</h3>
        <div class="skills-groups">
          <div v-for="g in skillGroups" :key="g.label" class="skill-group">
            <div class="skill-group-label">{{ g.label }}</div>
            <div class="skill-chips">
              <span v-for="it in g.items" :key="it" class="skill-chip">{{ it }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificates -->
    <div data-reveal class="certs-section">
      <span class="section-tag">
        <Award :size="15" aria-hidden="true" /> Zertifikate &amp; Workshops
      </span>
      <div class="certs-grid">
        <div v-for="c in certificates" :key="c.title" class="cert-card">
          <span class="cert-icon" aria-hidden="true">
            <component :is="c.Icon" :size="20" />
          </span>
          <div>
            <div class="cert-title">{{ c.title }}</div>
            <div class="cert-meta">{{ c.meta }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 28px 20px;
}

@media (max-width: 640px) {
  .about-main { padding: 36px 20px 16px; }
  .about-intro-grid { gap: 28px !important; margin-bottom: 40px !important; }
  .about-photo-wrap { max-width: 300px; }
  .timeline-section { margin-bottom: 40px; }
  .timeline-item { padding: 18px 18px; gap: 14px; }
  .timeline-icon { width: 40px; height: 40px; border-radius: 12px; }
  .timeline-role { font-size: 16px; }
  .edu-skills-grid { margin-bottom: 36px; }
  .edu-card { padding: 24px; }
  .skills-card { padding: 24px; }
  .certs-grid { grid-template-columns: 1fr; }
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
  margin-bottom: 18px;
}
.about-intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 48px;
  align-items: center;
  margin-bottom: 64px;
}
.about-h1 {
  font-size: clamp(34px, 5vw, 54px);
  line-height: 1.03;
  letter-spacing: -0.03em;
  font-weight: 800;
  margin: 0 0 22px;
}
.about-p {
  font-size: 17px;
  line-height: 1.65;
  color: #555;
  margin: 0 0 18px;
}
.social-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 18px;
  border-radius: 13px;
  background: #fff;
  border: 1px solid rgba(15,15,15,0.1);
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.social-btn:hover {
  transform: translateY(-3px);
  color: #2563EB;
  border-color: #2563EB;
}
.about-photo-wrap {
  position: relative;
  aspect-ratio: 4 / 4.5;
  max-width: 400px;
  justify-self: center;
  width: 100%;
}
.about-photo-bg {
  position: absolute;
  inset: 6% 5% 0 5%;
  border-radius: 28px;
  background: linear-gradient(160deg, #eaf0ff, #dbe5ff);
}
.about-photo {
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
  height: 92%;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 24px;
  box-shadow: 0 26px 60px rgba(15,23,42,0.2);
  z-index: 2;
}

/* Timeline */
.timeline-section { margin-bottom: 60px; }
.sub-heading {
  font-size: clamp(26px, 3.5vw, 36px);
  letter-spacing: -0.03em;
  font-weight: 800;
  margin: 0 0 28px;
}
.timeline {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.timeline-item {
  display: flex;
  gap: 18px;
  background: #F8F8F8;
  border: 1px solid rgba(15,15,15,0.05);
  border-radius: 20px;
  padding: 24px 26px;
}
.timeline-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #fff;
  color: #2563EB;
  flex-shrink: 0;
}
.timeline-title-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  align-items: baseline;
}
.timeline-role {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}
.timeline-org {
  font-size: 13.5px;
  font-weight: 600;
  color: #2563EB;
}
.timeline-period {
  font-size: 13px;
  color: #6B7280;
  margin: 4px 0 10px;
}
.timeline-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

/* Education + Skills */
.edu-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 22px;
  margin-bottom: 60px;
}
.edu-card {
  background: #0F0F0F;
  color: #fff;
  border-radius: 24px;
  padding: 30px;
}
.edu-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(37,99,235,0.25);
  color: #9bb8ff;
  margin-bottom: 18px;
}
.edu-title {
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 4px;
}
.edu-meta {
  font-size: 13.5px;
  color: rgba(255,255,255,0.55);
  margin-bottom: 14px;
}
.edu-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(255,255,255,0.78);
  margin: 0;
}
.skills-card {
  background: #fff;
  border: 1px solid rgba(15,15,15,0.08);
  border-radius: 24px;
  padding: 30px;
}
.skills-title {
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 18px;
}
.skills-groups { display: flex; flex-direction: column; gap: 16px; }
.skill-group-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6B7280;
  margin-bottom: 9px;
}
.skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-chip {
  padding: 7px 13px;
  border-radius: 10px;
  background: #F8F8F8;
  border: 1px solid rgba(15,15,15,0.06);
  font-size: 13.5px;
  font-weight: 600;
}

/* Certificates */
.certs-section { margin-bottom: 20px; }
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 16px;
  margin-top: 16px;
}
.cert-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid rgba(15,15,15,0.08);
  border-radius: 18px;
  padding: 20px 22px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.cert-card:hover {
  transform: translateY(-3px);
  border-color: rgba(37,99,235,0.3);
}
.cert-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(37,99,235,0.1);
  color: #2563EB;
  flex-shrink: 0;
}
.cert-title {
  font-size: 15.5px;
  font-weight: 700;
  line-height: 1.3;
}
.cert-meta {
  font-size: 13px;
  color: #6B7280;
  margin-top: 3px;
}
</style>
