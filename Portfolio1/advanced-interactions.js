document.addEventListener('DOMContentLoaded', function() {
    // Custom Typed Text Effect (Vanilla JS)
    function typeWriter() {
        const textElement = document.getElementById('typed-output');
        const phrases = [
            'UI/UX Designer', 
            'Technical Recruiter', 
            'Software Engineer', 
            'Creative Problem Solver'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(type, isDeleting ? 50 : 100);
        }

        type();
    }

    // Skill Bar Animation
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(skill => {
            const percentage = skill.getAttribute('data-skill');
            skill.style.width = '0%';
            
            setTimeout(() => {
                skill.style.width = `${percentage}%`;
            }, 500);
        });
    }

    // Parallax Effect
    function parallaxEffect() {
        const parallaxBg = document.querySelector('.parallax-bg');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    }

    // Custom Cursor
    function customCursor() {
        const cursor = document.querySelector('.custom-cursor');
        const hoverElements = document.querySelectorAll('a, button, .hover-lift');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }

    // Reveal on Scroll
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(element => observer.observe(element));
    }

    // Glitch Text Effect
    function glitchTextEffect() {
        const glitchTexts = document.querySelectorAll('.glitch-text');
        glitchTexts.forEach(text => {
            text.setAttribute('data-text', text.textContent);
        });
    }

    // Smooth Scroll
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }

    // Form Submission Handler
    function formSubmissionHandler() {
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully! I will get back to you soon.');
            form.reset();
        });
    }

    // Initialize all functions
    typeWriter();
    animateSkillBars();
    parallaxEffect();
    customCursor();
    revealOnScroll();
    glitchTextEffect();
    smoothScroll();
    formSubmissionHandler();
});