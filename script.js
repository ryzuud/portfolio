/* ============================================
   PORTFOLIO — Lounès COURIO
   Interactive Scripts, Animations & i18n
   ============================================ */

// ============================================================
// INTERNATIONALIZATION (i18n)
// ============================================================
const translations = {
    fr: {
        // Nav
        'nav.about': 'À propos',
        'nav.experience': 'Expérience',
        'nav.education': 'Formation',
        'nav.skills': 'Compétences',
        'nav.contact': 'Contact',
        // Hero
        'hero.greeting': 'Bonjour, je suis',
        'hero.cta_contact': 'Me contacter',
        'hero.cta_experience': 'Voir mon parcours',
        'hero.scroll': 'Défiler',
        // About
        'about.title': 'Qui suis-je ?',
        'about.intro': 'Étudiant en ingénierie <span class="highlight">CyberData</span> à l\'ENSIBS de Vannes, spécialisé en <span class="highlight">cybersécurité</span> et <span class="highlight">sciences des données</span>, passionné par l\'innovation et les technologies avancées.',
        'about.p2': 'Avec des expériences chez <strong>Orange Innovation</strong> et le <strong>Groupe Crédit Agricole</strong>, j\'ai développé des compétences solides en développement d\'applications web intégrant l\'IA, en automatisation de processus et en analyse de données.',
        'about.p3': 'Motivé par les défis technologiques, je m\'engage à développer des solutions innovantes et performantes dans le domaine des données et de la cybersécurité.',
        'about.stat_exp': 'Expériences pro',
        'about.stat_edu': 'Formations',
        'about.stat_skills': 'Compétences',
        'about.stat_connections': 'Relations LinkedIn',
        // Experience
        'exp.title': 'Mon parcours professionnel',
        'exp.badge_current': 'En cours',
        'exp.orange_dates': 'Sept. 2024 — Présent',
        'exp.orange_type': 'Alternance',
        'exp.orange_a1': 'Développement d\'une page web avec <strong>Python et IA</strong> intégrant des solutions d\'intelligence artificielle',
        'exp.orange_a2': 'Analyse et optimisation des <strong>métadonnées</strong> grâce à des outils d\'IA',
        'exp.orange_a3': 'Étude approfondie sur le <strong>comportement des IA</strong> en fonction des prompts',
        'exp.orange_a4': 'Analyse et évaluation de <strong>modules de langue</strong> avec mesure du taux de confiance',
        'exp.ca1_title': 'Développeur SQL Server & PowerShell',
        'exp.ca1_badge': 'CDD',
        'exp.ca1_dates': 'Juil. 2024 — Août 2024',
        'exp.ca1_duration': '2 mois',
        'exp.ca1_a1': 'Automatisation du <strong>suivi des temps</strong> de travail avec SQL Server et PowerShell',
        'exp.ca1_a2': '<strong>Stratification des problèmes</strong> pour classification et priorisation',
        'exp.ca1_a3': 'Optimisation du code pour améliorer la <strong>maintenabilité</strong>',
        'exp.ca2_title': 'Développeur VBA',
        'exp.ca2_badge': 'Stage',
        'exp.ca2_dates': 'Avr. 2024 — Juin 2024',
        'exp.ca2_duration': '3 mois',
        'exp.ca2_a1': 'Automatisation de l\'<strong>analyse de données</strong> avec des macros VBA',
        'exp.ca2_a2': '<strong>Génération automatique de factures</strong> selon le type de client et service',
        'exp.ca2_a3': '<strong>Transformation de données</strong> pour intégration dans les systèmes existants',
        'exp.tag_automation': 'Automatisation',
        // Education
        'edu.title': 'Ma formation',
        'edu.badge_current': 'En cours',
        'edu.badge_completed': 'Terminé',
        'edu.ensibs_degree': 'Diplôme d\'ingénieur — CyberData',
        'edu.ensibs_dates': 'Sept. 2024 — Sept. 2027',
        'edu.ensibs_desc': 'Formation en ingénierie spécialisée en cybersécurité et sciences des données.',
        'edu.iut_degree': 'D.U.T. — Science des Données (ex-STID)',
        'edu.iut_dates': 'Sept. 2022 — Juin 2024',
        'edu.iut_desc': 'Formation en statistiques et traitement informatique des données.',
        'tag.cybersecurity': 'Cybersécurité',
        'tag.statistics': 'Statistiques',
        // Skills
        'skills.title': 'Mes compétences',
        'skills.cat_lang': 'Langages & Dev',
        'skills.cat_data': 'Data & IA',
        'skills.cat_cyber': 'Cybersécurité',
        'skills.cat_tools': 'Outils & Méthodes',
        'skills.data_science': 'Science des données',
        'skills.ai': 'Intelligence Artificielle',
        'skills.data_analysis': 'Analyse de données',
        'skills.nlp': 'NLP / Prompting IA',
        'skills.system_security': 'Sécurité des systèmes',
        'skills.threat_analysis': 'Analyse de menaces',
        'skills.data_protection': 'Protection des données',
        // Contact
        'contact.title': 'Me contacter',
        'contact.heading': 'Travaillons ensemble',
        'contact.desc': 'Vous avez un projet intéressant ou une opportunité ? N\'hésitez pas à me contacter !',
        'contact.email_value': 'couriolounes@gmail.com',
        'contact.phone_label': 'Téléphone',
        'contact.location_label': 'Localisation',
        'contact.term_edu': 'Ingénieur CyberData @ ENSIBS',
        'contact.term_passion': 'Cybersécurité · Data Science · IA',
        'contact.term_collab': 'echo "Prêt à collaborer !"',
        // Footer
        'footer.text': 'Conçu et développé avec <span class="footer-heart">❤️</span> par Lounès COURIO',
        'footer.copyright': '© 2026 — Tous droits réservés',
    },
    en: {
        // Nav
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        // Hero
        'hero.greeting': 'Hi, I\'m',
        'hero.cta_contact': 'Get in touch',
        'hero.cta_experience': 'View my journey',
        'hero.scroll': 'Scroll',
        // About
        'about.title': 'Who am I?',
        'about.intro': '<span class="highlight">CyberData</span> Engineering student at ENSIBS (Vannes, France), specializing in <span class="highlight">cybersecurity</span> and <span class="highlight">data science</span>, passionate about innovation and cutting-edge technologies.',
        'about.p2': 'With professional experience at <strong>Orange Innovation</strong> and <strong>Crédit Agricole Group</strong>, I have built strong skills in AI-powered web development, process automation, and data analysis.',
        'about.p3': 'Driven by technological challenges, I am committed to building innovative and high-performance solutions in the fields of data and cybersecurity.',
        'about.stat_exp': 'Work experiences',
        'about.stat_edu': 'Degrees',
        'about.stat_skills': 'Skills',
        'about.stat_connections': 'LinkedIn connections',
        // Experience
        'exp.title': 'Professional experience',
        'exp.badge_current': 'Current',
        'exp.orange_dates': 'Sep. 2024 — Present',
        'exp.orange_type': 'Work-study',
        'exp.orange_a1': 'Web page development with <strong>Python & AI</strong>, integrating artificial intelligence solutions',
        'exp.orange_a2': 'Analysis and optimization of <strong>metadata</strong> using AI-powered tools',
        'exp.orange_a3': 'In-depth study on <strong>AI behavior</strong> based on prompt engineering',
        'exp.orange_a4': 'Analysis and evaluation of <strong>language models</strong> with confidence score measurement',
        'exp.ca1_title': 'SQL Server & PowerShell Developer',
        'exp.ca1_badge': 'Fixed-term',
        'exp.ca1_dates': 'Jul. 2024 — Aug. 2024',
        'exp.ca1_duration': '2 months',
        'exp.ca1_a1': 'Automation of <strong>time tracking</strong> with SQL Server and PowerShell',
        'exp.ca1_a2': '<strong>Issue stratification</strong> for classification and prioritization',
        'exp.ca1_a3': 'Code optimization to improve <strong>maintainability</strong>',
        'exp.ca2_title': 'VBA Developer',
        'exp.ca2_badge': 'Internship',
        'exp.ca2_dates': 'Apr. 2024 — Jun. 2024',
        'exp.ca2_duration': '3 months',
        'exp.ca2_a1': 'Automation of <strong>data analysis</strong> using VBA macros',
        'exp.ca2_a2': '<strong>Automated invoice generation</strong> based on client and service type',
        'exp.ca2_a3': '<strong>Data transformation</strong> for integration into existing systems',
        'exp.tag_automation': 'Automation',
        // Education
        'edu.title': 'Education',
        'edu.badge_current': 'In progress',
        'edu.badge_completed': 'Completed',
        'edu.ensibs_degree': 'Engineering Degree — CyberData',
        'edu.ensibs_dates': 'Sep. 2024 — Sep. 2027',
        'edu.ensibs_desc': 'Engineering program specializing in cybersecurity and data science.',
        'edu.iut_degree': 'D.U.T. — Data Science (formerly STID)',
        'edu.iut_dates': 'Sep. 2022 — Jun. 2024',
        'edu.iut_desc': 'Program in statistics and data processing.',
        'tag.cybersecurity': 'Cybersecurity',
        'tag.statistics': 'Statistics',
        // Skills
        'skills.title': 'My skills',
        'skills.cat_lang': 'Languages & Dev',
        'skills.cat_data': 'Data & AI',
        'skills.cat_cyber': 'Cybersecurity',
        'skills.cat_tools': 'Tools & Methods',
        'skills.data_science': 'Data Science',
        'skills.ai': 'Artificial Intelligence',
        'skills.data_analysis': 'Data Analysis',
        'skills.nlp': 'NLP / AI Prompting',
        'skills.system_security': 'System Security',
        'skills.threat_analysis': 'Threat Analysis',
        'skills.data_protection': 'Data Protection',
        // Contact
        'contact.title': 'Get in touch',
        'contact.heading': 'Let\'s work together',
        'contact.desc': 'Have an interesting project or opportunity? Don\'t hesitate to reach out!',
        'contact.email_value': 'couriolounes@gmail.com',
        'contact.phone_label': 'Phone',
        'contact.location_label': 'Location',
        'contact.term_edu': 'CyberData Engineer @ ENSIBS',
        'contact.term_passion': 'Cybersecurity · Data Science · AI',
        'contact.term_collab': 'echo "Ready to collaborate!"',
        // Footer
        'footer.text': 'Designed and developed with <span class="footer-heart">❤️</span> by Lounès COURIO',
        'footer.copyright': '© 2026 — All rights reserved',
    }
};

const typewriterTexts = {
    fr: [
        'Data Scientist @ Orange Innovation',
        'Étudiant Ingénieur CyberData',
        'Passionné de Cybersécurité',
        'Expert en Science des Données',
        'Développeur Python & IA',
    ],
    en: [
        'Data Scientist @ Orange Innovation',
        'CyberData Engineering Student',
        'Cybersecurity Enthusiast',
        'Data Science Expert',
        'Python & AI Developer',
    ]
};

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update language toggle button
    const flag = document.getElementById('lang-flag');
    const label = document.getElementById('lang-label');
    const toggle = document.getElementById('lang-toggle');
    if (lang === 'fr') {
        flag.textContent = '🇬🇧';
        label.textContent = 'EN';
        toggle.title = 'Switch to English';
        toggle.setAttribute('aria-label', 'Switch language to English');
    } else {
        flag.textContent = '🇫🇷';
        label.textContent = 'FR';
        toggle.title = 'Passer en français';
        toggle.setAttribute('aria-label', 'Passer en français');
    }

    // Restart typewriter with new language texts
    if (window.activeTypewriter) {
        window.activeTypewriter.updateTexts(typewriterTexts[lang]);
    }

    localStorage.setItem('portfolio-lang', lang);
}

function toggleLanguage() {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
}


// ============================================================
// PARTICLES BACKGROUND
// ============================================================
class ParticlesBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const count = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 15000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
            this.ctx.fill();

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }

            if (this.mouse.x && this.mouse.y) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * (1 - dist / 150)})`;
                    this.ctx.lineWidth = 0.6;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}


// ============================================================
// TYPEWRITER EFFECT
// ============================================================
class Typewriter {
    constructor(element, texts, speed = 80, pause = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.pause = pause;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.timeoutId = null;
        this.type();
    }

    updateTexts(newTexts) {
        // Clear and restart with new texts
        clearTimeout(this.timeoutId);
        this.texts = newTexts;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = true;
        this.type();
    }

    type() {
        const current = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = current.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = current.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let delay = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.charIndex === current.length) {
            delay = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            delay = 400;
        }

        this.timeoutId = setTimeout(() => this.type(), delay);
    }
}


// ============================================================
// NAVBAR
// ============================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile toggle
    const toggle = document.getElementById('nav-toggle');
    const linksList = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        const isActive = toggle.classList.toggle('active');
        linksList.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            linksList.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}


// ============================================================
// STAT COUNTERS
// ============================================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-target]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = 2000;
                const start = performance.now();

                const update = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target;
                    }
                };

                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}


// ============================================================
// SKILL BARS
// ============================================================
function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.dataset.width;
                setTimeout(() => {
                    fill.style.width = width + '%';
                    fill.classList.add('animated');
                }, 200);
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    fills.forEach(fill => observer.observe(fill));
}


// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.timeline-item, .edu-card, .skill-category, .stat-card, .contact-link, .about-text, .contact-visual'
    );

    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
}


// ============================================================
// SMOOTH SCROLL
// ============================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Particles
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = document.getElementById('particles-canvas');
    if (canvas && !prefersReducedMotion) {
        new ParticlesBackground(canvas);
    } else if (canvas) {
        canvas.style.display = 'none'; // Hide canvas if not used
    }

    // Secure language restoration
    let savedLang = localStorage.getItem('portfolio-lang');
    if (!savedLang || !translations[savedLang]) {
        savedLang = 'fr';
    }

    // Typewriter
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        window.activeTypewriter = new Typewriter(
            typewriterEl,
            typewriterTexts[savedLang],
            70,
            2500
        );
    }

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Restore saved language
    if (savedLang !== 'fr') {
        setLanguage(savedLang);
    }

    // Init modules
    initNavbar();
    animateStats();
    animateSkillBars();
    initScrollReveal();
    initSmoothScroll();
});
