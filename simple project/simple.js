document.addEventListener('DOMContentLoaded', function() {
    // --- Particles.js Initialization ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', { particles: { number: { value: 80 }, color: { value: "#ffffff" }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#FBBF24", opacity: 0.4, width: 1 }, move: { enable: true, speed: 1, direction: "none", out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } } }, retina_detect: true });
    }
  
    // --- Cursor Aura ---
    const cursorAura = document.getElementById('cursor-aura');
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', e => {
            cursorAura.style.left = e.clientX + 'px';
            cursorAura.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button, .service-item, .gallery-filter-btn, .interactive-svg-point').forEach(el => {
            el.addEventListener('mouseenter', () => cursorAura.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursorAura.classList.remove('hovered'));
        });
    } else {
        cursorAura.style.display = 'none';
    }
  
    // --- General Setup (Navbar, Theme, Menu, Animations) ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
  
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
        document.querySelector('.light-icon').classList.toggle('hidden');
        document.querySelector('.dark-icon').classList.toggle('hidden');
    });
  
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    const toggleMobileMenu = () => mobileMenu.classList.toggle('hidden');
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.mobile-nav-link').forEach(link => link.addEventListener('click', toggleMobileMenu));
  
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));
  
    // --- Number Counter ---
    const counters = document.querySelectorAll('[data-target]');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let current = 0;
                const updateCounter = () => {
                    const increment = target / 100;
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => counterObserver.observe(counter));
  
    // --- Interactive Service Section ---
    const serviceItems = document.querySelectorAll('.service-item');
    const detailsContainer = document.getElementById('service-details-container');
    const serviceDetails = {
        ev: { title: 'EV Charger Solutions', text: 'We provide end-to-end installation for all major EV charger brands, including Level 2 and DC Fast Chargers. Our service includes a site assessment, panel capacity check, and seamless integration with your existing electrical system for safe and efficient charging.', img: 'https://images.unsplash.com/photo-1592919155577-f544df53b645?q=80&w=1974&auto=format&fit=crop' },
        smart: { title: 'Smart Home Automation', text: 'Transform your house into a smart home. We specialize in integrating systems like smart lighting, thermostats, security cameras, and automated blinds, all controllable from a central hub or your smartphone for ultimate convenience and energy savings.', img: 'https://images.unsplash.com/photo-1655194827229-a1d3192b533e?q=80&w=1964&auto=format&fit=crop' },
        panel: { title: 'Electrical Panel Upgrades', text: 'Modern homes require modern power. We upgrade outdated fuse boxes and circuit breaker panels to increase capacity, improve safety, and comply with the latest electrical codes, ensuring your home can handle all your electronic devices safely.', img: 'https://images.unsplash.com/photo-1635335874521-7987db781153' }
    };
  
    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const serviceKey = item.dataset.service;
            const details = serviceDetails[serviceKey];
            detailsContainer.innerHTML = `
            <div class="glassmorphism rounded-lg p-8 grid md:grid-cols-2 gap-8 items-center" style="animation: fadeIn 0.5s;">
            <div>
                <h3 class="text-3xl font-bold text-amber-400 mb-4">${details.title}</h3>
                <p class="text-gray-300">${details.text}</p>
            </div>
            <img src="${details.img}" class="rounded-lg shadow-xl w-full h-64 object-cover">
        </div>
            `;
        });
    });
  
    // --- Project Gallery Filter ---
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('bg-amber-400', 'text-gray-900'));
            filterBtns.forEach(b => b.classList.add('bg-gray-700', 'text-white'));
            btn.classList.add('bg-amber-400', 'text-gray-900');
            btn.classList.remove('bg-gray-700', 'text-white');
            const filter = btn.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
  
    // --- Interactive SVG Tooltip ---
    const svgPoints = document.querySelectorAll('.interactive-svg-point');
    const tooltip = document.getElementById('svg-tooltip');
    svgPoints.forEach(point => {
        point.addEventListener('mousemove', e => {
            tooltip.style.display = 'block';
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
            tooltip.textContent = point.dataset.tooltip;
        });
        point.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
  
    // --- Testimonial Slider ---
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    const updateSlider = () => slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % testimonials.length; updateSlider(); });
    prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; updateSlider(); });
  
    // --- Quote Wizard ---
    const quoteModal = document.getElementById('quote-wizard-modal');
    const openWizardBtns = document.querySelectorAll('#open-quote-wizard, #open-quote-wizard-mobile');
    const closeWizardBtn = document.getElementById('close-quote-wizard');
    const wizardSteps = document.querySelectorAll('.wizard-step');
    const nextWizBtns = document.querySelectorAll('.wizard-next-btn');
    const prevWizBtns = document.querySelectorAll('.wizard-prev-btn');
    const quoteForm = document.getElementById('quote-form');
    const formStatus = document.getElementById('form-status');
    let currentStep = 1;
    const showStep = (stepNumber) => {
        wizardSteps.forEach(step => step.classList.toggle('active', parseInt(step.dataset.step) === stepNumber));
        currentStep = stepNumber;
    };
    openWizardBtns.forEach(btn => btn.addEventListener('click', () => quoteModal.classList.remove('hidden')));
    closeWizardBtn.addEventListener('click', () => quoteModal.classList.add('hidden'));
    nextWizBtns.forEach(btn => btn.addEventListener('click', () => { if (currentStep < wizardSteps.length) showStep(currentStep + 1); }));
    prevWizBtns.forEach(btn => btn.addEventListener('click', () => { if (currentStep > 1) showStep(currentStep - 1); }));
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formStatus.innerHTML = '<p class="text-green-400">Thank you! Request sent.</p>';
        setTimeout(() => { quoteModal.classList.add('hidden'); formStatus.innerHTML = ''; quoteForm.reset(); showStep(1); }, 3000);
    });
  });