// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        // Close all dropdowns when closing menu
        if (!navMenu.classList.contains('active')) {
            document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
}

// Dropdown toggle for mobile
document.querySelectorAll('.has-dropdown > a').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const parent = this.parentElement;
            // Close other open dropdowns
            document.querySelectorAll('.has-dropdown.open').forEach(d => {
                if (d !== parent) d.classList.remove('open');
            });
            parent.classList.toggle('open');
        }
    });
});

// Close mobile menu when clicking a dropdown link (not the parent toggle)
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Only close if this is NOT a dropdown parent toggle on mobile
        if (!this.parentElement.classList.contains('has-dropdown') || window.innerWidth > 991) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
        }
    });
});

// Set active nav state based on current page
(function() {
    const rawPage = window.location.pathname.split('/').pop() || 'index.html';
    // Normalize: ensure .html extension for matching
    const currentPage = rawPage.includes('.') ? rawPage : (rawPage === '' ? 'index.html' : rawPage + '.html');

    const servicePages = ['services.html', 'crm.html', 'automations.html', 'templates.html'];
    const learnPages = ['faq.html', 'guides.html', 'about.html', 'guide-dashboard.html', 'guide-pipelines.html', 'guide-automations.html', 'guide-calendar.html', 'guide-contacts.html', 'guide-forms.html'];

    // Set active on the exact link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Set active on parent dropdown
    if (servicePages.includes(currentPage)) {
        const dropdown = document.querySelector('.has-dropdown.services-dropdown');
        if (dropdown) dropdown.classList.add('active');
    }
    if (learnPages.includes(currentPage)) {
        const dropdown = document.querySelector('.has-dropdown.learn-dropdown');
        if (dropdown) dropdown.classList.add('active');
    }
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default if it's not just '#'
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ── Contact Form — GoHighLevel Integration ───────────────────────────────────
(function () {
    const contactForm    = document.getElementById('contactForm');
    if (!contactForm) return; // only runs on pages that have the form

    const submitBtn      = document.getElementById('formSubmitBtn');
    const successEl      = document.getElementById('formSuccess');
    const errorBanner    = document.getElementById('formErrorBanner');
    const errorBannerMsg = document.getElementById('formErrorText');

    const GHL_ENDPOINT   = 'https://services.leadconnectorhq.com/funnels/submit';
    const GHL_FORM_ID    = 'WvMtjqzJFsT8KKYGmP0b';
    const GHL_LOCATION   = '3YEf1u4MnIkbrLqJaqdQ';

    // ── Validators ──────────────────────────────────────────────────────────
    function isValidEmail(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
    }
    function isValidPhone(v) {
        return v.replace(/\D/g, '').length >= 10;
    }

    // Field config: label shown in errors, optional custom validator + message
    const FIELDS = {
        first_name: { label: 'First name' },
        last_name:  { label: 'Last name' },
        email:      { label: 'Email', validate: isValidEmail, msg: 'Please enter a valid email address.' },
        phone:      { label: 'Phone', validate: isValidPhone, msg: 'Please enter a valid phone number (10+ digits).' },
    };

    // ── Field state helpers ──────────────────────────────────────────────────
    function setError(id, msg) {
        const input = document.getElementById(id);
        const errEl = document.getElementById(id + '-error');
        if (!input) return;
        input.classList.add('input-error');
        input.classList.remove('input-success');
        if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
    }

    function setValid(id) {
        const input = document.getElementById(id);
        const errEl = document.getElementById(id + '-error');
        if (!input) return;
        input.classList.remove('input-error');
        input.classList.add('input-success');
        if (errEl) errEl.classList.remove('visible');
    }

    function clearState(id) {
        const input = document.getElementById(id);
        const errEl = document.getElementById(id + '-error');
        if (!input) return;
        input.classList.remove('input-error', 'input-success');
        if (errEl) errEl.classList.remove('visible');
    }

    // ── Validate all required fields; returns true if form is valid ──────────
    function validateAll(data) {
        let valid = true;
        Object.entries(FIELDS).forEach(([id, cfg]) => {
            const val = (data[id] || '').trim();
            if (!val) {
                setError(id, cfg.label + ' is required.');
                valid = false;
            } else if (cfg.validate && !cfg.validate(val)) {
                setError(id, cfg.msg);
                valid = false;
            } else {
                setValid(id);
            }
        });
        return valid;
    }

    // ── Real-time validation on blur / clear on input ────────────────────────
    Object.entries(FIELDS).forEach(([id, cfg]) => {
        const input = document.getElementById(id);
        if (!input) return;

        input.addEventListener('blur', function () {
            const val = this.value.trim();
            if (!val) {
                setError(id, cfg.label + ' is required.');
            } else if (cfg.validate && !cfg.validate(val)) {
                setError(id, cfg.msg);
            } else {
                setValid(id);
            }
        });

        // Clear error styling while the user is typing
        input.addEventListener('input', function () {
            if (this.classList.contains('input-error')) clearState(id);
        });
    });

    // ── Loading / reset helpers ──────────────────────────────────────────────
    function setLoading(on) {
        submitBtn.disabled = on;
        submitBtn.classList.toggle('loading', on);
    }

    function showErrorBanner(msg) {
        errorBannerMsg.textContent = msg;
        errorBanner.classList.add('visible');
        errorBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ── Submit handler ───────────────────────────────────────────────────────
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Hide any previous error banner
        errorBanner.classList.remove('visible');

        // Collect + validate
        const raw  = Object.fromEntries(new FormData(contactForm));
        if (!validateAll(raw)) return;

        setLoading(true);

        const params = new URLSearchParams({
            formId:      GHL_FORM_ID,
            location_id: GHL_LOCATION,
            first_name:  raw.first_name.trim(),
            last_name:   raw.last_name.trim(),
            email:       raw.email.trim(),
            phone:       raw.phone.trim(),
            message:     (raw.message || '').trim(),
        });

        try {
            const res = await fetch(GHL_ENDPOINT, {
                method:  'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body:    params.toString(),
            });

            if (!res.ok) throw new Error('HTTP ' + res.status);

            // Success — swap form for confirmation
            contactForm.classList.add('form-hidden');
            successEl.classList.add('visible');

        } catch (err) {
            console.error('GHL form submit error:', err);
            showErrorBanner(
                'Something went wrong. Please try again or call us at (516) 780-1385.'
            );
            setLoading(false);
        }
    });
}());

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.feature-card, .package-card, .process-card, .guarantee-card, .template-card, .service-panel, .addon-card, .tier-step, .faq-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add hover effect to stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(10px) scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0) scale(1)';
    });
});

// Package card hover effects
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        packageCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0.7';
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        packageCards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});
