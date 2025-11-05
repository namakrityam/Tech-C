// Carousel functionality for Top Cars
function prevCar() {
    const carousel = document.getElementById('topCarsCarousel');
    carousel.scrollBy({
        left: -250,
        behavior: 'smooth'
    });
}

function nextCar() {
    const carousel = document.getElementById('topCarsCarousel');
    carousel.scrollBy({
        left: 250,
        behavior: 'smooth'
    });
}

// Carousel functionality for Categories
function prevCategory() {
    const carousel = document.getElementById('categoriesCarousel');
    carousel.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function nextCategory() {
    const carousel = document.getElementById('categoriesCarousel');
    carousel.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

// Social media link interactions
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button hover effects
document.querySelectorAll('.hero-btn, .view-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});