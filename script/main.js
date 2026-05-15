// ===== TYPEWRITER EFFECT =====
const phrases = [
    'Développeur Full-Stack',
    'Développeur Web',
    'Développeur Mobile',
    'Développeur API RESTful',
    'Développeur Node.js',
    'Développeur React.Js & React Native ',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const target = document.getElementById('typewriter-text');

function typeWrite() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
        target.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        target.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = isDeleting ? 60 : 90;
    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }
    setTimeout(typeWrite, speed);
}
setTimeout(typeWrite, 800);

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-delay').forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const p = bar.getAttribute('data-p');
            bar.style.width = p + '%';
            barObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.sk-fill').forEach(b => barObserver.observe(b));

// ===== HEADER ON SCROLL =====
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== MOBILE MENU =====
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== HERO FADE IN =====
document.querySelector('.hero-text').style.animation = 'heroFadeIn 0.9s ease both';
const style = document.createElement('style');
style.textContent = `
    @keyframes heroFadeIn {
        from { opacity:0; transform:translateY(30px); }
        to { opacity:1; transform:translateY(0); }
    }
    @keyframes photoFadeIn {
        from { opacity:0; transform:scale(0.9); }
        to { opacity:1; transform:scale(1); }
    }
`;
document.head.appendChild(style);
if (document.querySelector('.hero-photo-zone')) {
    document.querySelector('.hero-photo-zone').style.animation = 'photoFadeIn 1s 0.3s ease both';
    document.querySelector('.hero-photo-zone').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.hero-photo-zone').style.opacity = '';
    }, 50);
}