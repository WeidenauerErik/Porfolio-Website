<script setup>
import {useReveal} from '@/composables/useReveal'

useReveal()

const socials = [
  {icon: 'github', label: 'GitHub', href: 'https://github.com/WeidenauerErik'},
  {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/erik-weidenauer'},
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
            <RouterLink to="/kontakt" class="btn-primary">
              Kontakt aufnehmen
            </RouterLink>
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
  </main>
</template>

<style scoped>
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
}
</style>
