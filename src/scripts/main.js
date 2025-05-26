// ==========================================================================
// STARTPLATZ × MIFCOM AI Workstations - Main JavaScript
// Version: 2.0 - RTX 50 Series Update
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // Smooth Scrolling
    // ==========================================================================
    
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    // ==========================================================================
    // Intersection Observer for Animations
    // ==========================================================================
    
    const animateOnScroll = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all sections and cards
        const elementsToAnimate = document.querySelectorAll(
            '.config-card, .feature-card, .use-case, .testimonial-card, .faq-item'
        );
        
        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    };
    
    // ==========================================================================
    // Performance Counter Animation
    // ==========================================================================
    
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-target]');
        
        const countUp = (counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    };
    
    // ==========================================================================
    // Form Handling
    // ==========================================================================
    
    const handleForms = () => {
        const consultForm = document.getElementById('consultForm');
        
        if (consultForm) {
            consultForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(consultForm);
                const submitButton = consultForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                // Show loading state
                submitButton.disabled = true;
                submitButton.textContent = 'Wird gesendet...';
                
                try {
                    // In production, replace with actual endpoint
                    const response = await fetch('/api/consultation', {
                        method: 'POST',
                        body: formData
                    });
                    
                    if (response.ok) {
                        // Show success message
                        submitButton.textContent = '✓ Erfolgreich gesendet!';
                        submitButton.style.background = '#4CAF50';
                        
                        // Reset form
                        setTimeout(() => {
                            consultForm.reset();
                            submitButton.disabled = false;
                            submitButton.textContent = originalText;
                            submitButton.style.background = '';
                        }, 3000);
                        
                        // Track conversion
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'form_submit', {
                                'event_category': 'engagement',
                                'event_label': 'consultation_form'
                            });
                        }
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    // Show error message
                    submitButton.textContent = '✗ Fehler - Bitte erneut versuchen';
                    submitButton.style.background = '#f44336';
                    
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                        submitButton.style.background = '';
                    }, 3000);
                }
            });
        }
    };
    
    // ==========================================================================
    // FAQ Accordion Enhancement
    // ==========================================================================
    
    const enhanceFAQ = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            // Add keyboard support
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.open = !item.open;
                }
            });
        });
    };
    
    // ==========================================================================
    // Header Scroll Effect
    // ==========================================================================
    
    const headerScrollEffect = () => {
        const header = document.createElement('header');
        header.className = 'site-header';
        header.innerHTML = `
            <div class="container">
                <div class="header-content">
                    <div class="header-logos">
                        <img src="src/assets/icons/aihublogo.png" alt="STARTPLATZ AI Hub" class="header-logo">
                        <span class="header-separator">×</span>
                        <img src="src/assets/icons/Logo_Rechteck_white.png" alt="MIFCOM" class="header-logo">
                    </div>
                    <nav class="header-nav">
                        <a href="#workstations">Konfigurationen</a>
                        <a href="#features">Technologie</a>
                        <a href="#faq">FAQ</a>
                        <a href="#consult" class="btn btn--primary btn--small">Beratung erhalten</a>
                    </nav>
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        `;
        
        // Add header styles
        const headerStyles = `
            <style>
                .site-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: rgba(10, 10, 10, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    z-index: 1000;
                    transform: translateY(-100%);
                    transition: transform 0.3s ease;
                }
                
                .site-header.visible {
                    transform: translateY(0);
                }
                
                .header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 0;
                }
                
                .header-logos {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .header-logo {
                    height: 30px;
                }
                
                .header-separator {
                    color: var(--color-accent);
                    font-weight: bold;
                }
                
                .header-nav {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }
                
                .header-nav a:not(.btn) {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                
                .header-nav a:not(.btn):hover {
                    color: var(--color-accent);
                }
                
                .btn--small {
                    padding: 0.5rem 1.5rem;
                    font-size: 0.875rem;
                }
                
                .mobile-menu-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 4px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                .mobile-menu-toggle span {
                    width: 24px;
                    height: 2px;
                    background: white;
                    transition: all 0.3s;
                }
                
                @media (max-width: 768px) {
                    .header-nav {
                        display: none;
                    }
                    
                    .mobile-menu-toggle {
                        display: flex;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', headerStyles);
        document.body.insertBefore(header, document.body.firstChild);
        
        // Show/hide header on scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
            
            lastScroll = currentScroll;
        });
    };
    
    // ==========================================================================
    // Analytics Tracking
    // ==========================================================================
    
    const trackEvents = () => {
        // Track CTA clicks
        document.querySelectorAll('[data-track]').forEach(element => {
            element.addEventListener('click', () => {
                const action = element.getAttribute('data-track');
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'cta',
                        'event_label': action
                    });
                }
            });
        });
        
        // Track scroll depth
        let scrollDepths = [25, 50, 75, 90];
        let scrolledDepths = [];
        
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            scrollDepths.forEach(depth => {
                if (scrollPercent >= depth && !scrolledDepths.includes(depth)) {
                    scrolledDepths.push(depth);
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll', {
                            'event_category': 'engagement',
                            'event_label': `${depth}%`
                        });
                    }
                }
            });
        });
    };
    
    // ==========================================================================
    // Copy Discount Code
    // ==========================================================================
    
    const copyDiscountCode = () => {
        const discountCode = document.querySelector('.discount-code');
        if (discountCode) {
            discountCode.style.cursor = 'pointer';
            discountCode.addEventListener('click', async () => {
                const code = discountCode.textContent;
                try {
                    await navigator.clipboard.writeText(code);
                    
                    // Show feedback
                    const originalText = discountCode.textContent;
                    discountCode.textContent = '✓ Kopiert!';
                    discountCode.style.color = '#4CAF50';
                    
                    setTimeout(() => {
                        discountCode.textContent = originalText;
                        discountCode.style.color = '';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
            });
        }
    };
    
    // ==========================================================================
    // Initialize Everything
    // ==========================================================================
    
    const init = () => {
        smoothScroll();
        animateOnScroll();
        animateCounters();
        handleForms();
        enhanceFAQ();
        headerScrollEffect();
        trackEvents();
        copyDiscountCode();
        
        // Add loading class removal
        document.body.classList.add('loaded');
    };
    
    init();
});

// ==========================================================================
// Performance Optimization
// ==========================================================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
} 