document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add a subtle animation/interaction to elements on scroll
    const faders = document.querySelectorAll('.service-item, .pricing-card, .gallery-grid img, .booking-form');

    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.style.opacity = '0';
        fader.style.transform = 'translateY(20px)';
        fader.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        appearOnScroll.observe(fader);
    });

    // Handle booking form submission (example - in a real app, this would send data to a backend)
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Booking request submitted! We will contact you shortly to confirm your appointment.');
            // In a real application, you would collect form data and send it to a server:
            // const formData = new FormData(this);
            // fetch('/api/book', { method: 'POST', body: formData });
            this.reset(); // Clear the form
        });
    }
});
