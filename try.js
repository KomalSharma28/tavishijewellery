// Boot animation
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('boot').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('boot').style.display = 'none';
        }, 700);
    }, 1800);
});

// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelectorAll('header nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!email || !message) {
        alert('Please fill out all fields.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert('Thank you for contacting Tavishi!');
    this.reset();
});