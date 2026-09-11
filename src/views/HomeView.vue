<script setup>
import {
  Briefcase, Globe, Terminal, Shield, GraduationCap,
  Cloud, ShieldCheck, LayoutTemplate, Users, Send, Mail, Phone, MapPin,
} from 'lucide-vue-next'
import {useReveal} from '@/composables/useReveal'

useReveal()


const socials = [
  {icon: 'github', label: 'GitHub', href: 'https://github.com/WeidenauerErik'},
  {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/erik-weidenauer'},
]

const experience = [
  {
    role: 'Freelancer – Softwareentwicklung',
    org: 'Selbstständig',
    period: 'Juni 2026 – Aug 2026',
    Icon: Briefcase,
    desc: 'Maßgeschneiderte Softwarelösungen für Unternehmen und Privatpersonen – Prozesse automatisieren, technische Herausforderungen lösen und digitale Ideen umgesetzt. Sauberer, wartbarer Code über Web-Apps, Desktop-Tools, Backend-Systeme und APIs.',
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

const education = [
  {
    role: 'HTL Rennweg',
    org: 'Information Technology',
    period: '2021 – 2026',
    Icon: GraduationCap,
    desc: 'Praxisnahe Ausbildung in Softwareentwicklung, Network Engineering, Cybersecurity und Projektmanagement – mit starkem Fokus auf Problemlösung, sichere Systeme und Teamarbeit.',
  },
]

const certificates = [
  {title: 'AWS – Amazon Location Service', meta: 'AWS Training & Certification · Feb 2026', Icon: Cloud},
  {title: 'AWS – Amazon Translate', meta: 'AWS Training & Certification · Feb 2026', Icon: Cloud},
  {title: 'Fortinet NSE 1 – 3', meta: 'Network Security Associate · 2023', Icon: ShieldCheck},
  {title: 'DRUPAL in a Day', meta: 'Workshop · Grundlagen von Drupal', Icon: LayoutTemplate},
  {title: 'Communication & Teambuilding', meta: 'Seminar', Icon: Users},
]

const contacts = [
  {Icon: Mail, label: 'E-Mail', value: 'weidenauer.erik@outlook.com', href: 'mailto:weidenauer.erik@outlook.com'},
  {Icon: Phone, label: 'Telefon', value: '+43 664 75596725', href: 'tel:+4366475596725'},
  {Icon: MapPin, label: 'Standort', value: 'Österreich', href: null},
]

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
</script>

<template>
  <main>
    <!-- Hero + About -->
    <section id="home" class="hero-section">
      <div class="grain" :style="{ backgroundImage: grainSvg }" aria-hidden="true"></div>
      <div class="hero-grid">
        <!-- Left -->
        <div data-reveal>
          <h1 class="hero-h1">
            Full Stack<br>
            <span style="color: var(--accent);">Developer</span>
          </h1>
          <p class="hero-sub">
            Hi, ich bin <strong style="color:var(--ink);">Erik Weidenauer</strong> – Absolvent der HTL Rennweg.
            Ich entwickle moderne, hochwertige Software.
          </p>
          <p class="hero-sub">
            Ich spezialisiere mich auf <strong style="color:var(--ink);">VueJS, Symfony, Spring Boot und Python</strong>
            und arbeite ständig daran, meine technische Expertise zu vertiefen und effiziente, skalierbare
            Lösungen zu liefern – mit Präzision, Neugier und dem Anspruch, jeden Tag besser zu werden.
          </p>
          <div class="hero-btns">
            <a href="#contact" class="btn-primary">
              Kontakt aufnehmen
            </a>
            <a
                v-for="s in socials"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
            >
              <svg v-if="s.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round">
                <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <svg v-if="s.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: photo -->
        <div data-reveal data-reveal-delay="120" class="hero-photo-wrap">
          <img
              src="/erik2.jpeg"
              alt="Portrait von Erik Weidenauer, Full Stack Developer"
              class="hero-photo"
              width="440"
              height="517"
          >
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about-main">
      <!-- Experience -->
      <div id="berufserfahrung" data-reveal class="timeline-section">
        <h3 class="sub-heading">Berufserfahrung</h3>
        <div class="timeline">
          <div v-for="x in experience" :key="x.role" class="timeline-item">
            <span class="timeline-icon" aria-hidden="true">
              <component :is="x.Icon" :size="22"/>
            </span>
            <div>
              <div class="timeline-title-row">
                <h4 class="timeline-role">{{ x.role }}</h4>
                <span class="timeline-org">{{ x.org }}</span>
              </div>
              <div class="timeline-period">{{ x.period }}</div>
              <p class="timeline-desc">{{ x.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div id="ausbildung" data-reveal class="timeline-section">
        <h3 class="sub-heading">Ausbildung</h3>
        <div class="timeline">
          <div v-for="e in education" :key="e.role" class="timeline-item">
            <span class="timeline-icon" aria-hidden="true">
              <component :is="e.Icon" :size="22"/>
            </span>
            <div>
              <div class="timeline-title-row">
                <h4 class="timeline-role">{{ e.role }}</h4>
                <span class="timeline-org">{{ e.org }}</span>
              </div>
              <div class="timeline-period">{{ e.period }}</div>
              <p class="timeline-desc">{{ e.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificates -->
      <div id="zertifikate" data-reveal class="certs-section">
        <span class="eyebrow">Zertifikate &amp; Workshops</span>
        <div class="cert-timeline">
          <div v-for="c in certificates" :key="c.title" class="cert-timeline-item">
            <span class="cert-timeline-icon" aria-hidden="true">
              <component :is="c.Icon" :size="20"/>
            </span>
            <div>
              <div class="cert-timeline-title">{{ c.title }}</div>
              <div class="cert-timeline-meta">{{ c.meta }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-main">
      <span data-reveal class="eyebrow contact-eyebrow">Kontakt</span>
      <div data-reveal class="contact-card">
        <div class="contact-grain" :style="{ backgroundImage: grainSvg }" aria-hidden="true"></div>
        <div class="contact-glow" aria-hidden="true"></div>
        <div class="contact-grid">
          <div style="position: relative;">

            <h2 class="contact-h1">Sag hallo.</h2>
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
    </section>
  </main>
</template>

<style scoped>
[id] {
  scroll-margin-top: 84px;
}

/* Hero */
.hero-section {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 28px 56px;
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
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: center;
  position: relative;
}

.hero-h1 {
  font-size: clamp(48px, 7.5vw, 82px);
  line-height: 0.96;
  letter-spacing: -0.04em;
  font-weight: 700;
  margin: 0 0 22px;
}

.hero-sub {
  font-size: clamp(16.5px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 480px;
  margin: 0 0 20px;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 34px;
}

.tech-chip {
  padding: 6px 12px;
  border-radius: 7px;
  background: var(--accent-tint);
  color: var(--accent-ink);
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 500;
}

.hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  height: 52px;
  padding: 0 26px;
  border-radius: 12px;
  background: var(--accent);
  color: #fff;
  font-size: 15.5px;
  font-weight: 600;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 26px 54px -12px rgba(38, 57, 158, 0.32);
}

.btn-primary:active {
  transform: translateY(-1px) scale(0.98);
}

.hero-photo-wrap {
  position: relative;
  aspect-ratio: 4 / 4.7;
  max-width: 420px;
  justify-self: end;
  width: 100%;
}

.hero-photo {
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 95%;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 22px;
  box-shadow: var(--shadow-dark);
  z-index: 2;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  height: 52px;
  padding: 0 18px;
  border-radius: 11px;
  background: #fff;
  border: 1px solid rgba(19, 18, 23, 0.1);
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.2s var(--ease-out), border-color 0.2s var(--ease-out), color 0.2s var(--ease-out);
}

.social-btn:hover {
  transform: translateY(-3px);
  color: var(--accent-ink);
  border-color: var(--accent);
}

.social-btn:active {
  transform: translateY(-1px) scale(0.97);
}

/* About */
.about-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 28px 64px;
}

/* Timeline */
.timeline-section {
  margin-bottom: 60px;
}

.sub-heading {
  font-size: clamp(26px, 3.5vw, 36px);
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 28px;
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

.timeline-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--accent-tint);
  color: var(--accent-ink);
  flex-shrink: 0;
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

/* Certificates */
.certs-section {
  margin-bottom: 0;
}

.cert-timeline {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.cert-timeline-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 18px 4px;
  border-bottom: 1px solid rgba(19, 18, 23, 0.08);
  transition: background 0.2s var(--ease-out);
}

.cert-timeline-item:first-child {
  padding-top: 4px;
}

.cert-timeline-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent-tint);
  color: var(--accent-ink);
  flex-shrink: 0;
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

/* Contact */
.contact-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 28px 88px;
}

.contact-card {
  position: relative;
  background: var(--ink);
  color: #fff;
  border-radius: 28px;
  padding: clamp(36px, 6vw, 68px);
  overflow: hidden;
}

.contact-eyebrow {
  margin-bottom: 22px;
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

.btn-social {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 15px 22px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s var(--ease-out), background 0.2s var(--ease-out);
}

.btn-social:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.14);
}

.btn-social:active {
  transform: translateY(-1px) scale(0.95);
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
  font-size: 16px;
  font-weight: 600;
  margin-top: 3px;
  word-break: break-word;
}

@media (max-width: 880px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 40px 20px 32px;
  }

  .hero-grid {
    gap: 28px;
  }

  .hero-photo-wrap {
    max-width: 320px;
    justify-self: center;
  }

  .about-main {
    padding: 12px 20px 40px;
  }

  .timeline-section {
    margin-bottom: 40px;
  }

  .timeline-item {
    padding: 18px 4px;
    gap: 14px;
  }

  .timeline-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .timeline-role {
    font-size: 16px;
  }

  .cert-timeline-item {
    padding: 14px 4px;
    gap: 12px;
  }

  .cert-timeline-icon {
    width: 36px;
    height: 36px;
    border-radius: 9px;
  }

  .contact-main {
    padding: 12px 16px 56px;
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
