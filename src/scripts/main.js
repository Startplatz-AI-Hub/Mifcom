/**
 * STARTPLATZ × MIFCOM AI Workstations - Main JavaScript
 * Version 5.0 - Keyvisual Background + Subtle Particles
 */

// ==========================================================================
// Parallax Scroll Effects
// ==========================================================================

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax], .parallax-bg');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Check if element is in viewport
            if (elementTop < scrollY + windowHeight && elementTop + elementHeight > scrollY) {
                let speed = 0.5; // Default speed
                
                // Get custom speed from data attribute
                if (element.hasAttribute('data-speed')) {
                    speed = parseFloat(element.getAttribute('data-speed'));
                } else if (element.hasAttribute('data-parallax')) {
                    speed = parseFloat(element.getAttribute('data-parallax'));
                }
                
                // Calculate parallax offset
                const yPos = -(scrollY - elementTop) * speed;
                
                // Apply transform
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Throttled scroll listener
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call
    updateParallax();
}

// ==========================================================================
// Keyvisual Background Parallax
// ==========================================================================

function initKeyvisualParallax() {
    const keyvisualBg = document.querySelector('.hero__keyvisual-bg');
    if (!keyvisualBg) return;
    
    let ticking = false;
    
    function updateKeyvisual() {
        const scrollY = window.pageYOffset;
        const speed = 0.3; // Slower parallax for background
        const yPos = scrollY * speed;
        
        keyvisualBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateKeyvisual);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// ==========================================================================
// Particle System Enhancement
// ==========================================================================

function initParticleSystem() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Add random starting positions within bounds
        const randomDelay = Math.random() * 5;
        const randomDuration = 8 + Math.random() * 7; // 8-15 seconds
        
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
        
        // Add random horizontal drift
        const randomDrift = (Math.random() - 0.5) * 40; // -20px to +20px
        particle.style.setProperty('--drift', `${randomDrift}px`);
    });
    
    // Create additional dynamic particles
    createDynamicParticles();
}

function createDynamicParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    const particleCount = 15; // Additional particles
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle particle--dynamic';
        
        // Random positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation timing
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        
        // Random opacity
        particle.style.opacity = `${0.3 + Math.random() * 0.4}`;
        
        container.appendChild(particle);
    }
}

// ==========================================================================
// Intersection Observer for Animations
// ==========================================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Animate perk items with stagger
                if (entry.target.classList.contains('perk-item')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                
                // Animate config cards with stagger
                if (entry.target.classList.contains('config-card')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.perk-item, .config-card, .perf-item, .form-wrapper');
    animateElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// Enhanced Button Interactions
// ==========================================================================

function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// ==========================================================================
// Smooth Scrolling for Anchor Links
// ==========================================================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================================================
// Form Enhancement
// ==========================================================================

function initFormEnhancements() {
    const form = document.getElementById('consultation-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    
    // Add floating label effect
    inputs.forEach(input => {
        const label = input.previousElementSibling;
        
        function checkInput() {
            if (input.value.trim() !== '' || input === document.activeElement) {
                label.style.transform = 'translateY(-20px) scale(0.8)';
                label.style.color = '#A3D55F';
            } else {
                label.style.transform = 'translateY(0) scale(1)';
                label.style.color = '';
            }
        }
        
        input.addEventListener('focus', checkInput);
        input.addEventListener('blur', checkInput);
        input.addEventListener('input', checkInput);
        
        // Initial check
        checkInput();
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Wird gesendet...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            alert('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Reset label positions
            inputs.forEach(input => {
                const label = input.previousElementSibling;
                label.style.transform = 'translateY(0) scale(1)';
                label.style.color = '';
            });
        }, 2000);
    });
}

// ==========================================================================
// Performance Metrics Animation
// ==========================================================================

function initMetricsAnimation() {
    const perfItems = document.querySelectorAll('.perf-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const icon = item.querySelector('.perf-icon');
                
                // Add bounce animation to icon
                icon.style.animation = 'bounce 1s ease-out';
                
                observer.unobserve(item);
            }
        });
    }, { threshold: 0.5 });
    
    perfItems.forEach(item => observer.observe(item));
}

// ==========================================================================
// Hero PC Glow Effect
// ==========================================================================

function initHeroPCGlow() {
    const pcImage = document.querySelector('.hero__pc-image');
    const pcGlow = document.querySelector('.pc-glow');
    
    if (!pcImage || !pcGlow) return;
    
    // Mouse move effect for enhanced glow
    pcImage.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        pcGlow.style.transform = `translate(-50%, -50%) translate(${deltaX * 10}px, ${deltaY * 10}px) scale(1.2)`;
    });
    
    pcImage.addEventListener('mouseleave', function() {
        pcGlow.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

// ==========================================================================
// Perks Overlay Animation
// ==========================================================================

function initPerksOverlay() {
    const perksOverlay = document.querySelector('.perks-overlay-image');
    if (!perksOverlay) return;
    
    // Add subtle hover effect
    const pcContainer = document.querySelector('.hero__pc-container');
    if (!pcContainer) return;
    
    pcContainer.addEventListener('mouseenter', function() {
        perksOverlay.style.transform = 'translateY(-5px)';
        perksOverlay.style.filter = 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.5))';
    });
    
    pcContainer.addEventListener('mouseleave', function() {
        perksOverlay.style.transform = 'translateY(0px)';
        perksOverlay.style.filter = 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))';
    });
}

// ==========================================================================
// Mobile Menu (if needed)
// ==========================================================================

function initMobileMenu() {
    const mobileBreakpoint = 768;
    
    function handleResize() {
        if (window.innerWidth <= mobileBreakpoint) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
}

// ==========================================================================
// Analytics Tracking
// ==========================================================================

function initAnalytics() {
    // Track button clicks
    const trackableElements = document.querySelectorAll('[data-track]');
    
    trackableElements.forEach(element => {
        element.addEventListener('click', function() {
            const eventName = this.getAttribute('data-track');
            
            // Google Analytics 4 event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': eventName,
                    'custom_parameter': 'startplatz_mifcom'
                });
            }
            
            console.log('Analytics Event:', eventName);
        });
    });
    
    // Track scroll depth
    let maxScroll = 0;
    const scrollMilestones = [25, 50, 75, 100];
    const trackedMilestones = new Set();
    
    function trackScrollDepth() {
        const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        maxScroll = Math.max(maxScroll, scrollPercent);
        
        scrollMilestones.forEach(milestone => {
            if (maxScroll >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll', {
                        'event_category': 'engagement',
                        'event_label': `${milestone}%`,
                        'value': milestone
                    });
                }
                
                console.log('Scroll Depth:', `${milestone}%`);
            }
        });
    }
    
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
}

// ==========================================================================
// Initialize Everything
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 STARTPLATZ × MIFCOM AI Workstations - Version 5.0');
    
    // Initialize all modules
    initParallax();
    initKeyvisualParallax();
    initParticleSystem();
    initScrollAnimations();
    initButtonEffects();
    initSmoothScroll();
    initFormEnhancements();
    initMetricsAnimation();
    initHeroPCGlow();
    initPerksOverlay();
    initMobileMenu();
    initAnalytics();
    
    console.log('✅ All modules initialized successfully');
});

// ==========================================================================
// Performance Monitoring
// ==========================================================================

window.addEventListener('load', function() {
    // Measure page performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        console.log('📊 Page Load Time:', `${loadTime}ms`);
        
        // Track Core Web Vitals
        if ('web-vitals' in window) {
            console.log('📈 Core Web Vitals tracking enabled');
        }
    }
});

// ==========================================================================
// Error Handling
// ==========================================================================

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    
    // Track errors in analytics if needed
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.error.toString(),
            'fatal': false
        });
    }
});

// ==========================================================================
// Add CSS animations via JavaScript
// ==========================================================================

const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
        }
        40%, 43% {
            transform: translate3d(0,-15px,0);
        }
        70% {
            transform: translate3d(0,-7px,0);
        }
        90% {
            transform: translate3d(0,-2px,0);
        }
    }
    
    .particle--dynamic {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(163, 213, 95, 0.8);
        border-radius: 50%;
        animation: float-particle 10s linear infinite;
    }
`;
document.head.appendChild(style);

// Scroll-based parallax for perks
document.addEventListener('DOMContentLoaded', () => {
    const perksOverlay = document.querySelector('.perks-overlay');
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.5; // Adjust this value to control parallax speed
                
                if (perksOverlay) {
                    // Move perks down as user scrolls
                    perksOverlay.style.transform = `translateY(${rate}px)`;
                    
                    // Fade out gradually
                    const opacity = Math.max(0, 1 - (scrolled / 1000));
                    perksOverlay.style.opacity = opacity;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}); 