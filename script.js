// ====== Data ======
const SKILLS = {
  "Programming": { icon: "💻", items: [
    { name: "C++", level: 85 },{ name: "Python", level: 80 },{ name: "JavaScript", level: 78 }
  ]},
  "Web Development": { icon: "🌐", items: [
    { name: "HTML", level: 92 },{ name: "CSS", level: 88 },{ name: "JavaScript", level: 80 },{ name: "Responsive Design", level: 85 }
  ]},
  "Tools": { icon: "🔧", items: [
    { name: "Git", level: 80 },{ name: "GitHub", level: 85 },{ name: "VS Code", level: 90 }
  ]},
  "Hardware & IoT": { icon: "🔌", items: [
    { name: "Arduino", level: 82 },{ name: "ESP32", level: 80 },{ name: "Sensors", level: 78 },{ name: "I2C Communication", level: 70 }
  ]}
};
const PROJECTS = [
  { title: "Smart Home Security System", desc: "An IoT-based home security solution using ESP32, motion sensors, and real-time monitoring with instant alerts.", tags: ["ESP32","C++","IoT","Sensors"], gradient: "linear-gradient(135deg,#2563eb,#22d3ee)", icon: "🔌" },
  { title: "Asset Maintenance Management System", desc: "A web-based system for tracking assets, scheduling maintenance, and generating reports for organizations.", tags: ["JavaScript","HTML/CSS","Web App"], gradient: "linear-gradient(135deg,#4f46e5,#60a5fa)", icon: "🔧" },
  { title: "Student Management System", desc: "A software application for managing student records, attendance, and academic information efficiently.", tags: ["Python","Database","Software"], gradient: "linear-gradient(135deg,#06b6d4,#2563eb)", icon: "🎓" }
];
const EDUCATION = [
  { title: "B.Sc. in Computer Science and Engineering", place: "BAIUST — Cumilla", period: "2023 — Present", desc: "Currently pursuing my undergraduate degree, focusing on software engineering, web technologies, and embedded systems.", current: true },
  { title: "Higher Secondary Certificate (HSC)", place: "Cumilla Govt. City College — Cumilla", period: "2020 — 2022", desc: "Completed HSC in Science group with strong foundations in Mathematics, Physics, and Computer Science." },
  { title: "Secondary School Certificate (SSC)", place: "Ibn Taimiya  School and College — Cumilla", period: "2018 — 2020", desc: "Completed SSC with distinction, developing early interest in computers and programming." }
];
const CERTIFICATES = [
  { title: "Web Development Bootcamp", issuer: "Online Course", year: "2024" },
  { title: "Python for Everybody", issuer: "Coursera", year: "2024" },
  { title: "IoT with ESP32 & Arduino", issuer: "Udemy", year: "2023" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023" }
];
// ====== Render ======
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = Object.entries(SKILLS).map(([cat, { icon, items }]) => `
    <div class="skill-card reveal">
      <div class="skill-head"><span class="skill-icon">${icon}</span><h3>${cat}</h3></div>
      <ul class="skill-list">
        ${items.map(s => `
          <li>
            <div class="skill-row"><span>${s.name}</span><span class="lvl">${s.level}%</span></div>
            <div class="bar"><span data-width="${s.level}"></span></div>
          </li>`).join('')}
      </ul>
    </div>`).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal">
      <div class="project-cover" style="background:${p.gradient}">${p.icon}</div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="project-actions">
          <a href="#" class="ghost">⌨ GitHub</a>
          <a href="#" class="solid">↗ Live Demo</a>
        </div>
      </div>
    </article>`).join('');
}
function renderTimeline() {
  const wrap = document.getElementById('timeline');
  wrap.innerHTML = EDUCATION.map((e, i) => `
    <div class="tl-item reveal ${i % 2 === 1 ? 'right' : ''}">
      <div class="tl-card">
        <span class="tl-period">${e.period}</span>
        <h3>${e.title}${e.current ? '<span class="current-pill">CURRENT</span>' : ''}</h3>
        <p class="place">${e.place}</p>
        <p class="desc">${e.desc}</p>
      </div>
      <span class="tl-dot"></span>
    </div>`).join('');
}
function renderCerts() {
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = CERTIFICATES.map(c => `
    <div class="cert-card reveal">
      <div class="cert-icon">🏆</div>
      <h3>${c.title}</h3>
      <p>${c.issuer}</p>
      <p class="cert-year">${c.year}</p>
    </div>`).join('');
}
// ====== Loader ======
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 900);
});
// ====== Theme ======
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.documentElement.classList.add('dark');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// ====== Mobile menu ======
const menuBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('mobile-menu-open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('mobile-menu-open')));

// ====== Typing effect ======
const TITLES = ["CSE Student","Web Developer","IoT Enthusiast","Problem Solver"];
let tIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');
function tick() {
  const word = TITLES[tIdx];
  if (!deleting) {
    cIdx++; typedEl.textContent = word.slice(0, cIdx);
    if (cIdx === word.length) { deleting = true; return setTimeout(tick, 1500); }
  } else {
    cIdx--; typedEl.textContent = word.slice(0, cIdx);
    if (cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % TITLES.length; }
  }
  setTimeout(tick, deleting ? 50 : 90);
}
setTimeout(tick, 600);

// ====== Scroll spy + back to top ======
const backTop = document.getElementById('backToTop');
const navAnchors = document.querySelectorAll('.nav-link');
const sections = ['home','about','skills','projects','education','certificates','resume','contact'];
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
  const pos = window.scrollY + 120;
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  }
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ====== Reveal + bar animation + counters ======
function setupObservers() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        // animate bars inside
        e.target.querySelectorAll('.bar > span[data-width]').forEach(b => {
          b.style.width = b.dataset.width + '%';
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // counters
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target, 10);
        const dur = 1200, t0 = performance.now();
        const step = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          el.textContent = Math.round(target * p) + '+';
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      }
    });
  });
  document.querySelectorAll('.counter-num').forEach(el => cio.observe(el));
}

// ====== Contact form ======
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Message sent ✓';
  e.target.reset();
  setTimeout(() => { btn.textContent = '➤ Send Message'; }, 4000);
});

// ====== Init ======
document.getElementById('year').textContent = new Date().getFullYear();
renderSkills();
renderProjects();
renderTimeline();
renderCerts();
setupObservers();
