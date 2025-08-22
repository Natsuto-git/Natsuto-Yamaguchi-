document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add transition effect
        htmlElement.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            htmlElement.style.transition = '';
        }, 300);
    });
    
    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 1500);
    });

    // Navbar Functionality
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling with offset for navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-animation');
                const delay = element.getAttribute('data-delay');
                
                // Skip animations if user prefers reduced motion
                if (prefersReducedMotion) {
                    element.style.opacity = '1';
                    element.style.transform = 'none';
                    return;
                }
                
                // Apply delay if specified
                if (delay) {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, parseFloat(delay) * 1000);
                } else {
                    element.classList.add('animated');
                }
                
                // Special handling for staggered animations
                if (element.classList.contains('skills-grid')) {
                    const skillCategories = element.querySelectorAll('.skill-category');
                    skillCategories.forEach((category, index) => {
                        setTimeout(() => {
                            category.classList.add('animated');
                        }, index * 200);
                    });
                }

                if (element.classList.contains('about-highlights')) {
                    const highlights = element.querySelectorAll('.highlight-item');
                    highlights.forEach((highlight, index) => {
                        setTimeout(() => {
                            highlight.classList.add('animated');
                        }, index * 150);
                    });
                }

                if (element.classList.contains('sports-grid')) {
                    const sportCards = element.querySelectorAll('.sport-card');
                    sportCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 150);
                    });
                }

                if (element.classList.contains('learning-cards')) {
                    const learningCards = element.querySelectorAll('.learning-card');
                    learningCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 200);
                    });
                }

                if (element.classList.contains('connection-cards')) {
                    const connectionCards = element.querySelectorAll('.connection-card');
                    connectionCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 200);
                    });
                }

                if (element.classList.contains('other-interests')) {
                    const interestCards = element.querySelectorAll('.interest-card');
                    interestCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 300);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        // Initialize elements for reduced motion
        if (prefersReducedMotion) {
            element.style.opacity = '1';
            element.style.transform = 'none';
        }
        animationObserver.observe(element);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    const profileImage = document.querySelector('.profile-image');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
        
        if (profileImage && scrolled < window.innerHeight) {
            profileImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Skill tags interaction
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(19, 83, 137, 0.3)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(19, 83, 137, 0.1)';
        });
    });

    // Profile image hover effect
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });

        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Typing effect for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        setTimeout(() => {
            let index = 0;
            const typeInterval = setInterval(() => {
                heroSubtitle.textContent += originalText[index];
                index++;
                if (index >= originalText.length) {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, 2000);
    }

    // Scroll to top functionality
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.setAttribute('id', 'scrollToTop');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #135389 0%, #6F789D 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(19, 83, 137, 0.3);
    `;
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect for scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
        this.style.boxShadow = '0 8px 25px rgba(19, 83, 137, 0.4)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(19, 83, 137, 0.3)';
    });

    // Add cursor trail effect
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(19, 83, 137, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide cursor trail on mobile devices
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            cursor.style.display = 'none';
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        } else {
            cursor.style.display = 'block';
        }
    });

    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                if (entry.target.classList.contains('timeline-item:nth-child(even)')) {
                    entry.target.style.transform = 'translateX(0)';
                } else {
                    entry.target.style.transform = 'translateX(0)';
                }
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Add floating particles effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(19, 83, 137, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: float-particle 8s linear infinite;
        `;
        
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Add CSS for particle animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // Enhanced hover effects for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(360deg)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Add a subtle fade-in effect for the entire page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 3D Mouse Follow Effect (Desktop only)
    const cards3d = document.querySelectorAll('.card-3d-enhanced');
    
    cards3d.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // Only apply 3D effect on desktop
            if (window.innerWidth > 768) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `
                    translateY(-15px) 
                    scale(1.02) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                `;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        });

        // Touch effect for mobile
        card.addEventListener('touchstart', function() {
            if (window.innerWidth <= 768) {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });

        card.addEventListener('touchend', function() {
            if (window.innerWidth <= 768) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Enhanced hover effects for skill tags (updated)
    const skillTagsEnhanced = document.querySelectorAll('.skill-tag');
    skillTagsEnhanced.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1) rotate(2deg)';
            this.style.boxShadow = '0 10px 25px var(--shadow-medium)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.boxShadow = '0 5px 15px var(--shadow-light)';
        });
    });

    // Skill Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.getAttribute('data-percentage');
                
                // Animate progress bar
                setTimeout(() => {
                    progressBar.style.width = percentage + '%';
                }, 500);
                
                // Unobserve after animation
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all progress bars
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Enhanced progress bar hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.progress-bar');
            const percentage = this.querySelector('.progress-percentage');
            
            // Add glow effect
            progressBar.style.boxShadow = '0 0 10px var(--primary-color)';
            percentage.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.progress-bar');
            const percentage = this.querySelector('.progress-percentage');
            
            // Remove glow effect
            progressBar.style.boxShadow = 'none';
            percentage.style.transform = 'scale(1)';
        });
    });

    // Parallax Effect
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Update parallax backgrounds
        parallaxBgs.forEach(bg => {
            bg.style.transform = `translateY(${rate}px)`;
        });
        
        // Update floating elements with different speeds
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            const yPos = scrolled * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Only apply parallax on desktop and if user doesn't prefer reduced motion
    if (window.innerWidth > 768 && !prefersReducedMotion) {
        window.addEventListener('scroll', requestTick);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 || prefersReducedMotion) {
            // Reset parallax effects
            parallaxBgs.forEach(bg => {
                bg.style.transform = 'translateY(0)';
            });
            floatingElements.forEach(element => {
                element.style.transform = 'translateY(0)';
            });
        }
    });

    console.log('🎉 Natsuto Yamaguchi Portfolio loaded successfully!');
});