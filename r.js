const DATA = {
  personalInfo: {
    name: "Mysagoni Asmitha Shivani",
    email: "asmithashivani13@gmail.com",
    linkedin: "www.linkedin.com/in/Asmitha Shivani",
    github: "https://github.com/bin19-ind"
  },
  skills: [
    {
      category: "Programming Languages",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      items: [
        { name: "C", level: "intermediate" },
        { name: "Java", level: "intermediate" },
        { name: "Python", level: "intermediate" }
      ]
    },
    {
      category: "Web Development",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      items: [
        { name: "HTML", level: "advanced" },
        { name: "CSS", level: "advanced" },
        { name: "JavaScript", level: "advanced" }
      ]
    },
    {
      category: "Frontend Development",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
      items: [
        { name: "React", level: "intermediate" },
        { name: "Three.js", level: "familiar" }
      ]
    },
    {
      category: "Backend Development",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
      items: [
        { name: "Node.js", level: "intermediate" },
        { name: "[ADD BACKEND TECHNOLOGIES HERE]", level: "learning" }
      ]
    },
    {
      category: "Full-Stack Development",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>',
      items: [
        { name: "Full-Stack Web Development", level: "intermediate" },
        { name: "[ADD ADDITIONAL TECHNOLOGIES HERE]", level: "learning" }
      ]
    }
  ],
  education: [
    {
      institution: "Sri Chaitanya Junior College",
      score: "9.5",
      scoreLabel: "Score",
      course: "MPC",
      years: "2022-2024"
    },
    {
      institution: "Guru Nanak Institute of Technology",
      score: "8.93",
      scoreLabel: "9.05",
      course: "Computer science engineering",
      years: "2024-2028"
    }
  ],
  certifications: [
    { name: "AI Certification", issuer: "Outskill", date: "2026", credential: "[CREDENTIAL LINK HERE]" },
    { name: "AI & RAG Certification", issuer: "Scalar", date: "27th July 2026", credential: "[CREDENTIAL LINK HERE]" },
    { name: "Data Protection Technologies", issuer: "GNIT", date: "24th September 2025", credential: "[CREDENTIAL LINK HERE]" },
    { name: "Skill Fusion Fest", issuer: "Tech Titans Club", date: "1st August 2025", credential: "[CREDENTIAL LINK HERE]" }
  ],
  projects: [
    { name: "[PROJECT NAME HERE]", desc: "[PROJECT DESCRIPTION HERE]", tech: ["[TECHNOLOGIES HERE]"], github: "[GITHUB PROJECT LINK HERE]", demo: "[LIVE DEMO LINK HERE]", category: "Web App" },
    { name: "[PROJECT NAME HERE]", desc: "[PROJECT DESCRIPTION HERE]", tech: ["[TECHNOLOGIES HERE]"], github: "[GITHUB PROJECT LINK HERE]", demo: "[LIVE DEMO LINK HERE]", category: "Full-Stack" },
    { name: "[PROJECT NAME HERE]", desc: "[PROJECT DESCRIPTION HERE]", tech: ["[TECHNOLOGIES HERE]"], github: "[GITHUB PROJECT LINK HERE]", demo: "[LIVE DEMO LINK HERE]", category: "Creative" }
  ]
};

/* ============================================================
   RENDER DYNAMIC SECTIONS
   ============================================================ */
const levelLabels = { familiar:"Familiar", intermediate:"Intermediate", advanced:"Advanced", learning:"Currently Learning" };

// Skills
document.getElementById('skillsGrid').innerHTML = DATA.skills.map(cat => `
  <div class="skill-card reveal">
    <h3><span class="icon">${cat.icon}</span>${cat.category}</h3>
    <div class="skill-badges">
      ${cat.items.map(s => `
        <span class="skill-badge">${s.name}<span class="skill-level lv-${s.level}">${levelLabels[s.level]}</span></span>
      `).join('')}
    </div>
  </div>
`).join('');

// Education
document.getElementById('timeline').innerHTML = DATA.education.map(e => `
  <div class="tl-item reveal">
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-score">${e.score}</div>
      <div class="tl-score-label">${e.scoreLabel}</div>
      <div class="tl-inst">${e.institution}</div>
      <p class="tl-meta">${e.course.includes('[') ? '<span class="tl-placeholder">'+e.course+'</span>' : e.course}</p>
      <p class="tl-meta">${e.years.includes('[') ? '<span class="tl-placeholder">'+e.years+'</span>' : e.years}</p>
    </div>
  </div>
`).join('');

// Certifications
document.getElementById('certGrid').innerHTML = DATA.certifications.map(c => `
  <div class="cert-card reveal">
    <div class="cert-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>
    <div class="cert-name">${c.name.includes('[') ? '<span class="cert-placeholder">'+c.name+'</span>' : c.name}</div>
    <div class="cert-row"><span class="label">Issuer</span><span class="val ${c.issuer.includes('[')?'cert-placeholder':''}">${c.issuer}</span></div>
    <div class="cert-row"><span class="label">Date</span><span class="val ${c.date.includes('[')?'cert-placeholder':''}">${c.date}</span></div>
    <a href="#" class="cert-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>${c.credential.includes('[') ? c.credential : 'View Credential'}</a>
  </div>
`).join('');

// Projects
document.getElementById('projGrid').innerHTML = DATA.projects.map(p => `
  <div class="proj-card reveal">
    <div class="proj-img">
      <span class="proj-cat">${p.category}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    </div>
    <div class="proj-body">
      <div class="proj-name">${p.name.includes('[') ? '<span style="color:var(--text-dim);font-style:italic">'+p.name+'</span>' : p.name}</div>
      <p class="proj-desc placeholder">${p.desc}</p>
      <div class="proj-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="proj-links">
        <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>GitHub</a>
        <a href="#"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live Demo</a>
      </div>
    </div>
  </div>
`).join('');

/* ============================================================
   NAVBAR — scroll state, active link, mobile toggle
   ============================================================ */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  });
});

// Active section indicator
const sections = document.querySelectorAll('section[id]');
const navLinkEls = navLinks.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   TEXT SHUFFLE ANIMATION
   ============================================================ */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const shuffleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&@*<>{}[]/\\=+';

function shuffleText(el) {
  if (reducedMotion) return;
  const finalText = el.dataset.text || el.textContent;
  el.dataset.text = finalText;
  let iteration = 0;
  const totalChars = finalText.length;
  const interval = setInterval(() => {
    el.textContent = finalText.split('').map((char, i) => {
      if (i < iteration) return finalText[i];
      if (char === ' ') return ' ';
      return shuffleChars[Math.floor(Math.random() * shuffleChars.length)];
    }).join('');
    iteration += 1;
    if (iteration > totalChars) {
      clearInterval(interval);
      el.textContent = finalText;
    }
  }, 40);
}

// Hero animations on load
window.addEventListener('load', () => {
  const heroName = document.querySelector('.hero-name');
  const heroTitle = document.querySelector('.hero-title');
  setTimeout(() => shuffleText(heroName), 200);
  setTimeout(() => shuffleText(heroTitle), 800);
});

// Section headings animate on scroll
const shuffleObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      shuffleText(e.target);
      shuffleObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-text]').forEach(el => {
  if (!el.closest('.hero')) shuffleObserver.observe(el);
});

// Hover replay
document.querySelectorAll('[data-text]').forEach(el => {
  el.style.cursor = 'default';
  el.addEventListener('mouseenter', () => shuffleText(el));
});

/* ============================================================
   CONTACT FORM (frontend-only demo)
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'This is a demo form — messages are not actually sent. Connect a backend or email service to enable real submissions.';
  status.classList.add('show');
});

/* ============================================================
   CURSOR GRID — canvas-based cursor-reactive grid background
   ============================================================ */
(function() {
  if (reducedMotion) return; // skip entirely for reduced motion

  const canvas = document.getElementById('cursor-grid');
  const ctx = canvas.getContext('2d');
  let W, H, cellSize = 70, radius = 140;
  let mouseX = -9999, mouseY = -9999;
  let lastMoveTime = 0;
  let rafId = null;
  let pulses = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw subtle base grid
    ctx.strokeStyle = 'rgba(255,255,255,0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += cellSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += cellSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Glow cells near cursor
    const now = performance.now();
    const idle = now - lastMoveTime > 2000;
    if (!idle) {
      const startCol = Math.max(0, Math.floor((mouseX - radius) / cellSize));
      const endCol = Math.min(Math.ceil(W / cellSize), Math.floor((mouseX + radius) / cellSize));
      const startRow = Math.max(0, Math.floor((mouseY - radius) / cellSize));
      const endRow = Math.min(Math.ceil(H / cellSize), Math.floor((mouseY + radius) / cellSize));

      for (let col = startCol; col <= endCol; col++) {
        for (let row = startRow; row <= endRow; row++) {
          const cx = col * cellSize + cellSize / 2;
          const cy = row * cellSize + cellSize / 2;
          const dist = Math.hypot(cx - mouseX, cy - mouseY);
          if (dist < radius) {
            const intensity = Math.pow(1 - dist / radius, 2); // smooth falloff
            ctx.fillStyle = `rgba(124,58,237,${intensity * 0.12})`;
            ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            ctx.strokeStyle = `rgba(168,85,247,${intensity * 0.3})`;
            ctx.lineWidth = 1.2;
            ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
          }
        }
      }
    }

    // Draw click pulses
    pulses = pulses.filter(p => {
      const elapsed = now - p.start;
      if (elapsed > 800) return false;
      const progress = elapsed / 800;
      const r = progress * 120;
      const alpha = (1 - progress) * 0.5;
      ctx.strokeStyle = `rgba(168,85,247,${alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.stroke();
      return true;
    });

    // Continue if active, otherwise sleep
    if (!idle || pulses.length > 0) {
      rafId = requestAnimationFrame(draw);
    } else {
      rafId = null;
    }
  }

  function wake() {
    if (!rafId) rafId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMoveTime = performance.now();
    wake();
  });
  window.addEventListener('click', (e) => {
    pulses.push({ x: e.clientX, y: e.clientY, start: performance.now() });
    wake();
  });
  // Also react to touch
  window.addEventListener('touchmove', (e) => {
    if (e.touches[0]) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      lastMoveTime = performance.now();
      wake();
    }
  }, { passive: true });

  resize();
  draw(); // initial draw for base grid
})();