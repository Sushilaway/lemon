// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section, index) => {
        // Add animation class based on even/odd index
        if (index % 2 === 0) {
            section.classList.add("animate-left");
        } else {
            section.classList.add("animate-right");
        }
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Your existing code...
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const animateCards = (selector) => {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, index) => {
            card.style.setProperty("--animation-order", index);
        });
    };

    animateCards(".service-card");
    animateCards(".product-card");
    animateCards(".facility-card");
    animateCards(".testimonial-card");
    animateCards(".gallery-item");
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("products-carousel");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const cards = carousel.querySelectorAll(".product-card");

    let currentIndex = 0;
    let cardsPerView = 3; // Default for desktop

    // Function to update the carousel position
    function updateCarousel() {
        // Calculate the width of one card + gap
        const cardWidth = carousel.querySelector(".product-card").offsetWidth;
        const gap = 30; // Same as the gap in CSS

        // Set the transform to move carousel
        carousel.style.transform = `translateX(-${currentIndex * (cardWidth + gap)
            }px)`;

        // Update button states
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= cards.length - cardsPerView;
    }

    // Calculate cards per view based on viewport
    function calculateCardsPerView() {
        const viewportWidth = window.innerWidth;

        if (viewportWidth <= 576) {
            return 1; // Mobile view
        } else if (viewportWidth <= 992) {
            return 2; // Tablet view
        } else {
            return 3; // Desktop view
        }
    }

    // Initialize and recalculate on window resize
    function initializeCarousel() {
        cardsPerView = calculateCardsPerView();
        currentIndex = Math.min(currentIndex, cards.length - cardsPerView);
        updateCarousel();
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < cards.length - cardsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize on page load
    initializeCarousel();

    // Update on window resize
    window.addEventListener("resize", initializeCarousel);
});