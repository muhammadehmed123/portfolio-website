// Enhanced Portfolio JavaScript with Modern Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initWelcomeBanner();
    initSmoothScrolling();
    initTypingAnimation();
    initSkillProgressBars();
    initProjectHoverEffects();
    initScrollAnimations();
    initThemeToggle();
    initMobileMenu();
    initContactForm();
    initLoadingAnimations();
    initParticleBackground();
});

// 1. Enhanced Welcome Banner with Animation
function initWelcomeBanner() {
    const banner = document.createElement("div");
    banner.id = "welcome-banner";
    banner.innerHTML = `
        <div class="banner-content">
            <span class="banner-icon">🚀</span>
            <span class="banner-text">Welcome to Muhammad Ahmed's DevOps Portfolio!</span>
            <span class="close-banner" id="close-banner">✕</span>
        </div>
    `;
    
    banner.className = "welcome-banner slide-down";
    document.body.prepend(banner);
    
    // Close functionality with fade out
    document.getElementById("close-banner").addEventListener("click", () => {
        banner.classList.add('fade-out');
        setTimeout(() => banner.remove(), 300);
    });
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
        if (document.getElementById("welcome-banner")) {
            banner.classList.add('fade-out');
            setTimeout(() => banner.remove(), 300);
        }
    }, 8000);
}

// 2. Smooth Scrolling Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add active state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// 3. Typing Animation for Intro Text
function initTypingAnimation() {
    const introText = document.querySelector('.intro p');
    if (!introText) return;
    
    const originalText = introText.textContent;
    introText.textContent = '';
    introText.style.borderRight = '2px solid #0d47a1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            introText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                introText.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // Start typing animation when intro section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeWriter, 500);
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(introText);
}

// 4. Animated Skill Progress Bars
function initSkillProgressBars() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const skillsList = skillsSection.querySelector('ul');
    const skills = [
        { name: 'AWS (EC2, S3, VPC, IAM, Lambda, CloudWatch)', level: 90 },
        { name: 'CI/CD Pipelines with Jenkins', level: 85 },
        { name: 'Docker & Docker Compose', level: 88 },
        { name: 'Linux Server Management', level: 92 },
        { name: 'Terraform (IaC)', level: 80 },
        { name: 'Microsoft Azure (VMs, App Services)', level: 75 },
        { name: 'Git & GitHub', level: 95 }
    ];
    
    // Replace list with progress bars
    skillsList.innerHTML = skills.map(skill => `
        <li class="skill-item">
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}"></div>
            </div>
        </li>
    `).join('');
    
    // Animate progress bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const level = bar.getAttribute('data-level');
                        bar.style.width = level + '%';
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(skillsSection);
}

// 5. Interactive Project Cards with Hover Effects
function initProjectHoverEffects() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        // Add interactive elements
        project.classList.add('project-card');
        
        // Create overlay for additional info
        const overlay = document.createElement('div');
        overlay.className = 'project-overlay';
        overlay.innerHTML = '<div class="overlay-content"><span>View Details</span></div>';
        project.appendChild(overlay);
        
        // Hover effects
        project.addEventListener('mouseenter', function() {
            this.classList.add('project-hover');
        });
        
        project.addEventListener('mouseleave', function() {
            this.classList.remove('project-hover');
        });
        
        // Click to expand
        project.addEventListener('click', function() {
            this.classList.toggle('project-expanded');
        });
    });
}

// 6. Scroll-triggered Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('section, .project, .cert-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
}

// 7. Dark/Light Theme Toggle
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    document.body.appendChild(themeToggle);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        
        // Add transition effect
        themeToggle.classList.add('theme-switching');
        setTimeout(() => themeToggle.classList.remove('theme-switching'), 300);
    });
}

// 8. Mobile Hamburger Menu
function initMobileMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    
    nav.parentNode.insertBefore(hamburger, nav);
    nav.classList.add('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// 9. Enhanced Contact Form Validation
function initContactForm() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    // Add interactive contact form
    const formHTML = `
        <div class="contact-form-container">
            <form id="contact-form" class="contact-form">
                <div class="form-group">
                    <input type="text" id="name" name="name" required>
                    <label for="name">Your Name</label>
                    <span class="form-bar"></span>
                </div>
                <div class="form-group">
                    <input type="email" id="email" name="email" required>
                    <label for="email">Your Email</label>
                    <span class="form-bar"></span>
                </div>
                <div class="form-group">
                    <textarea id="message" name="message" required></textarea>
                    <label for="message">Your Message</label>
                    <span class="form-bar"></span>
                </div>
                <button type="submit" class="submit-btn">
                    <span>Send Message</span>
                    <div class="btn-loader"></div>
                </button>
            </form>
        </div>
    `;
    
    contactSection.insertAdjacentHTML('beforeend', formHTML);
    
    // Form validation and submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            submitBtn.querySelector('span').textContent = 'Message Sent!';
            
            setTimeout(() => {
                form.reset();
                submitBtn.classList.remove('success');
                submitBtn.querySelector('span').textContent = 'Send Message';
            }, 2000);
        }, 2000);
    });
}

// 10. Loading Animations
function initLoadingAnimations() {
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

// 11. Particle Background Effect
function initParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0d47a1';
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    createParticles();
    animateParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

// Utility function for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scroll-top') || createScrollTopButton();
    
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

function createScrollTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollBtn);
    return scrollBtn;
}
