document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value && emailInput.value && messageInput.value) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Create random background colors for gallery placeholders
    const colors = [
        '#6c5ce7', '#74b9ff', '#00cec9', '#55efc4', '#fdcb6e', '#e17055',
        '#d63031', '#e84393', '#00b894', '#0984e3', '#6c5ce7', '#ffeaa7'
    ];
    
    const placeholders = document.querySelectorAll('.image-placeholder');
    
    placeholders.forEach(placeholder => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        placeholder.style.backgroundColor = randomColor;
    });
}); 