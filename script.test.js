const {
    translations,
    typewriterTexts,
    setLanguage,
    toggleLanguage,
    ParticlesBackground,
    Typewriter,
    initNavbar,
    animateStats,
    animateSkillBars,
    initScrollReveal,
    initSmoothScroll,
    getCurrentLang,
    setCurrentLang
} = require('./script.js');

describe('Portfolio Script Tests', () => {
    beforeEach(() => {
        // Set up the DOM elements needed by the script
        document.body.innerHTML = `
            <html lang="fr">
                <body>
                    <nav id="navbar">
                        <ul id="nav-links">
                            <li><a href="#about" class="nav-link" data-i18n="nav.about">À propos</a></li>
                            <li><a href="#experience" class="nav-link">Experience</a></li>
                        </ul>
                        <button id="nav-toggle"></button>
                    </nav>
                    <button id="lang-toggle" title="Switch to English" aria-label="Switch language to English">
                        <span id="lang-flag">🇬🇧</span>
                        <span id="lang-label">EN</span>
                    </button>
                    <div id="typewriter"></div>
                    <canvas id="particles-canvas"></canvas>
                    <section id="about" class="section"></section>
                    <section id="experience" class="section"></section>
                    <div class="stat-number" data-target="100">0</div>
                    <div class="skill-fill" data-width="85"></div>
                    <div class="about-text"></div>
                    <a href="#target" id="link">Link</a>
                    <div id="target"></div>
                </body>
            </html>
        `;

        // Mock matchMedia
        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));

        // Mock IntersectionObserver
        class IntersectionObserver {
            constructor(callback) {
                this.callback = callback;
            }
            observe() {}
            unobserve() {}
            disconnect() {}
        }
        window.IntersectionObserver = IntersectionObserver;

        // Mock scroll
        window.scrollTo = jest.fn();

        // Mock sections offsetTop for navbar tests
        const aboutEl = document.getElementById('about');
        const expEl = document.getElementById('experience');
        if (aboutEl) Object.defineProperty(aboutEl, 'offsetTop', { value: 100, configurable: true });
        if (expEl) Object.defineProperty(expEl, 'offsetTop', { value: 500, configurable: true });
    });

    afterEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    describe('Internationalization (i18n)', () => {
        test('Translations object exists and contains expected languages', () => {
            expect(translations).toBeDefined();
            expect(translations).toHaveProperty('fr');
            expect(translations).toHaveProperty('en');
        });

        test('setLanguage changes language and updates elements', () => {
            setLanguage('en');

            expect(document.documentElement.lang).toBe('en');
            const navLink = document.querySelector('[data-i18n="nav.about"]');
            expect(navLink.innerHTML).toBe(translations['en']['nav.about']);

            const flag = document.getElementById('lang-flag');
            const label = document.getElementById('lang-label');
            expect(flag.textContent).toBe('🇫🇷');
            expect(label.textContent).toBe('FR');
        });

        test('toggleLanguage toggles between English and French', () => {
            setCurrentLang('fr');

            toggleLanguage();
            expect(document.documentElement.lang).toBe('en');
            expect(localStorage.getItem('portfolio-lang')).toBe('en');

            toggleLanguage();
            expect(document.documentElement.lang).toBe('fr');
            expect(localStorage.getItem('portfolio-lang')).toBe('fr');
        });

        test('setLanguage to fr updates elements properly', () => {
            setLanguage('fr');

            expect(document.documentElement.lang).toBe('fr');
            const flag = document.getElementById('lang-flag');
            const label = document.getElementById('lang-label');
            expect(flag.textContent).toBe('🇬🇧');
            expect(label.textContent).toBe('EN');
        });
    });

    describe('Typewriter effect', () => {
        beforeEach(() => {
            jest.useFakeTimers();
            document.body.innerHTML = '<div id="typewriter"></div>';
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        test('Initializes correctly and types text', () => {
            const typewriterEl = document.getElementById('typewriter');
            const texts = ['Hello', 'World'];
            const speed = 100;
            const pause = 1000;

            const typewriter = new Typewriter(typewriterEl, texts, speed, pause);

            expect(typewriterEl.textContent).toBe('H');

            jest.advanceTimersByTime(speed);
            expect(typewriterEl.textContent).toBe('He');

            jest.advanceTimersByTime(speed);
            expect(typewriterEl.textContent).toBe('Hel');
        });

        test('Handles deleting text and transitioning to next text', () => {
            const typewriterEl = document.getElementById('typewriter');
            const texts = ['A', 'B'];
            const speed = 100;
            const pause = 1000;

            const typewriter = new Typewriter(typewriterEl, texts, speed, pause);

            jest.advanceTimersByTime(speed);
            expect(typewriterEl.textContent).toBe('A');

            jest.advanceTimersByTime(pause);

            jest.advanceTimersByTime(speed / 2);
            expect(typewriterEl.textContent).toBe('');

            jest.advanceTimersByTime(400);

            jest.advanceTimersByTime(speed);
            expect(typewriterEl.textContent).toBe('B');
        });

        test('updateTexts correctly updates text arrays', () => {
            const typewriterEl = document.getElementById('typewriter');
            const texts = ['First'];
            const newTexts = ['Second'];

            const typewriter = new Typewriter(typewriterEl, texts, 100, 1000);

            typewriter.updateTexts(newTexts);

            expect(typewriter.texts).toBe(newTexts);
            expect(typewriter.isDeleting).toBe(true);
            expect(typewriter.textIndex).toBe(0);
            expect(typewriter.charIndex).toBe(-1);
        });
    });

    describe('ParticlesBackground', () => {
        let canvas;

        beforeEach(() => {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);

            HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
                clearRect: jest.fn(),
                beginPath: jest.fn(),
                arc: jest.fn(),
                fill: jest.fn(),
                moveTo: jest.fn(),
                lineTo: jest.fn(),
                stroke: jest.fn()
            }));

            Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
            Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 768 });

            jest.useFakeTimers();
            window.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 16));
            window.cancelAnimationFrame = jest.fn(id => clearTimeout(id));
        });

        afterEach(() => {
            document.body.removeChild(canvas);
            jest.useRealTimers();
        });

        test('Initializes with proper particle count based on screen size', () => {
            const particles = new ParticlesBackground(canvas);

            expect(canvas.width).toBe(1024);
            expect(canvas.height).toBe(768);
            expect(particles.particles.length).toBeGreaterThan(0);
            expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith('2d');
        });

        test('Resizes correctly when window resizes', () => {
            const particles = new ParticlesBackground(canvas);

            window.innerWidth = 800;
            window.innerHeight = 600;
            window.dispatchEvent(new Event('resize'));

            expect(canvas.width).toBe(800);
            expect(canvas.height).toBe(600);
        });

        test('Handles mouse movement', () => {
            const particles = new ParticlesBackground(canvas);

            window.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 200 }));

            expect(particles.mouse.x).toBe(100);
            expect(particles.mouse.y).toBe(200);
        });
    });

    describe('Navbar interactions', () => {
        beforeEach(() => {
            initNavbar();
        });

        test('Mobile toggle adds active class to nav-links and toggle button', () => {
            const toggle = document.getElementById('nav-toggle');
            const linksList = document.getElementById('nav-links');

            expect(toggle.classList.contains('active')).toBe(false);
            expect(linksList.classList.contains('active')).toBe(false);

            toggle.click();

            expect(toggle.classList.contains('active')).toBe(true);
            expect(linksList.classList.contains('active')).toBe(true);
            expect(toggle.getAttribute('aria-expanded')).toBe('true');

            toggle.click();

            expect(toggle.classList.contains('active')).toBe(false);
            expect(linksList.classList.contains('active')).toBe(false);
            expect(toggle.getAttribute('aria-expanded')).toBe('false');
        });

        test('Clicking a nav link closes mobile menu', () => {
            const toggle = document.getElementById('nav-toggle');
            const linksList = document.getElementById('nav-links');
            const firstLink = document.querySelector('.nav-link');

            toggle.click();
            firstLink.click();

            expect(toggle.classList.contains('active')).toBe(false);
            expect(linksList.classList.contains('active')).toBe(false);
            expect(toggle.getAttribute('aria-expanded')).toBe('false');
        });

        test('Scroll event adds scrolled class to navbar and updates active link', () => {
            const navbar = document.getElementById('navbar');
            const aboutLink = document.querySelector('a[href="#about"]');
            const expLink = document.querySelector('a[href="#experience"]');

            window.scrollY = 60;
            window.dispatchEvent(new Event('scroll'));

            expect(navbar.classList.contains('scrolled')).toBe(true);
            expect(aboutLink.classList.contains('active')).toBe(true);
            expect(expLink.classList.contains('active')).toBe(false);

            window.scrollY = 450;
            window.dispatchEvent(new Event('scroll'));

            expect(navbar.classList.contains('scrolled')).toBe(true);
            expect(aboutLink.classList.contains('active')).toBe(false);
            expect(expLink.classList.contains('active')).toBe(true);
        });
    });

    describe('Animations and Scroll Events', () => {
        let mockObserverInstance;
        let observeSpy;
        let unobserveSpy;

        beforeEach(() => {
            observeSpy = jest.fn();
            unobserveSpy = jest.fn();

            mockObserverInstance = {
                observe: observeSpy,
                unobserve: unobserveSpy,
                disconnect: jest.fn()
            };

            window.IntersectionObserver = jest.fn().mockImplementation((callback) => {
                mockObserverInstance.callback = callback;
                return mockObserverInstance;
            });

            jest.useFakeTimers();
            window.requestAnimationFrame = jest.fn(cb => setTimeout(() => cb(performance.now()), 16));

            let mockNow = 0;
            jest.spyOn(performance, 'now').mockImplementation(() => {
                const val = mockNow;
                mockNow += 16;
                return val;
            });
        });

        afterEach(() => {
            jest.useRealTimers();
            jest.restoreAllMocks();
        });

        test('animateStats initiates observation and animates correctly on intersection', () => {
            const statEl = document.querySelector('.stat-number');
            animateStats();

            expect(window.IntersectionObserver).toHaveBeenCalled();
            expect(observeSpy).toHaveBeenCalledWith(statEl);

            mockObserverInstance.callback([{
                isIntersecting: true,
                target: statEl
            }]);

            expect(unobserveSpy).toHaveBeenCalledWith(statEl);

            jest.advanceTimersByTime(2500);

            expect(statEl.textContent).toBe('100');
        });

        test('animateSkillBars animates correctly on intersection', () => {
            const skillEl = document.querySelector('.skill-fill');
            animateSkillBars();

            expect(observeSpy).toHaveBeenCalledWith(skillEl);

            mockObserverInstance.callback([{
                isIntersecting: true,
                target: skillEl
            }]);

            expect(unobserveSpy).toHaveBeenCalledWith(skillEl);

            jest.advanceTimersByTime(250);

            expect(skillEl.style.width).toBe('85%');
            expect(skillEl.classList.contains('animated')).toBe(true);
        });

        test('initScrollReveal adds visible class on intersection', () => {
            const el = document.querySelector('.about-text');
            initScrollReveal();

            expect(el.classList.contains('reveal')).toBe(true);
            expect(observeSpy).toHaveBeenCalledWith(el);

            mockObserverInstance.callback([{
                isIntersecting: true,
                target: el
            }]);

            expect(el.classList.contains('visible')).toBe(true);
            expect(unobserveSpy).toHaveBeenCalledWith(el);
        });

        test('initSmoothScroll prevents default and scrolls smoothly', () => {
            const link = document.getElementById('link');
            const target = document.getElementById('target');

            Object.defineProperty(target, 'offsetTop', { value: 300, configurable: true });

            initSmoothScroll();

            const event = new MouseEvent('click', { bubbles: true, cancelable: true });
            jest.spyOn(event, 'preventDefault');
            link.dispatchEvent(event);

            expect(event.preventDefault).toHaveBeenCalled();
            expect(window.scrollTo).toHaveBeenCalledWith({
                top: 220,
                behavior: 'smooth'
            });
        });
    });
});
