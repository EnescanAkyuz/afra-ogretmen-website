// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for Animations
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

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const animateElements = document.querySelectorAll(`
        .about-paragraph,
        .highlight-item,
        .timeline-item,
        .education-card,
        .skill-category,
        .certificate-card,
        .community-card,
        .contact-item
    `);
    
    // Set initial styles
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Observe elements
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .name-highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 100);
        }, 500);
    }
});

// Floating Math Icons Animation
function createFloatingMathIcons() {
    const mathIcons = ['∞', '√', '+', '÷', '×', 'π', '∑', '∆', '∫', '≈'];
    const heroSection = document.querySelector('.hero');
    
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            const icon = document.createElement('div');
            icon.className = 'floating-math-icon';
            icon.textContent = mathIcons[Math.floor(Math.random() * mathIcons.length)];
            
            // Random position
            icon.style.left = Math.random() * 100 + '%';
            icon.style.animationDuration = (Math.random() * 3 + 2) + 's';
            icon.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
            icon.style.opacity = Math.random() * 0.5 + 0.3;
            
            heroSection.appendChild(icon);
            
            // Remove after animation
            setTimeout(() => {
                if (heroSection.contains(icon)) {
                    heroSection.removeChild(icon);
                }
            }, 5000);
        }
    }, 2000);
}

// Add CSS for floating math icons
const floatingMathCSS = `
    .floating-math-icon {
        position: absolute;
        color: var(--primary-color);
        font-weight: bold;
        pointer-events: none;
        animation: floatUp 5s linear forwards;
        z-index: 1;
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;

// Add the CSS to the page
const style = document.createElement('style');
style.textContent = floatingMathCSS;
document.head.appendChild(style);

// Initialize floating icons
createFloatingMathIcons();

// Skill bars animation (if needed for future enhancement)
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// Initialize skill animations
animateSkillBars();

// Contact form hover effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'linear-gradient(135deg, #f8fcff 0%, #e8f4fd 100%)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.background = '#f8fcff';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add subtle hover effects to cards
document.querySelectorAll('.timeline-content, .certificate-card, .community-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Easter egg: Konami code for special animation
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Special animation for math teacher
        document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradientShift 2s ease infinite';
        
        // Reset after 3 seconds
        setTimeout(() => {
            document.body.style.background = '';
            document.body.style.animation = '';
        }, 3000);
    }
});

// Add gradient animation CSS for easter egg
const easterEggCSS = `
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

const easterEggStyle = document.createElement('style');
easterEggStyle.textContent = easterEggCSS;
document.head.appendChild(easterEggStyle);

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll events
const debouncedScrollHandler = debounce(() => {
    // Any intensive scroll operations can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Print friendly styles
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
});

// Add print CSS
const printCSS = `
    @media print {
        .navbar, .floating-icons, .floating-math-icon {
            display: none !important;
        }
        
        section {
            page-break-inside: avoid;
            padding: 20px 0;
        }
        
        .hero {
            min-height: auto;
            padding: 20px 0;
        }
        
        .hero-content {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        body {
            font-size: 12pt;
            line-height: 1.4;
        }
        
        .section-title {
            font-size: 18pt;
        }
        
        .hero-title {
            font-size: 24pt;
        }
    }
`;

const printStyle = document.createElement('style');
printStyle.textContent = printCSS;
document.head.appendChild(printStyle);
