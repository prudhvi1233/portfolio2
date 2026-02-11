// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-element');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const elementsToAnimate = document.querySelectorAll('section h2, .about-container, .skills div, .project, .list li, .contact p, .contact-container, .project-video, .timeline-item');
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('hidden-element');
        // Add staggered delays for grid items if they are siblings
        if (el.classList.contains('skills') || el.classList.contains('project')) {
           // Basic delay logic if needed, but CSS transition-delay approach often simpler directly on classes
        }
        observer.observe(el);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create success message element
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = `Thank you ${name}! Your message has been sent successfully.`;
            document.body.appendChild(successMsg);
            
            // Show the success message with animation
            setTimeout(() => {
                successMsg.classList.add('show');
            }, 10);
            
            // Hide the message after 3 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
                successMsg.classList.add('hide');
                
                // Remove the element after animation completes
                setTimeout(() => {
                    document.body.removeChild(successMsg);
                }, 400);
            }, 3000);
            
            // Reset the form
            contactForm.reset();
        });
    }
});

console.log("Portfolio Loaded Successfully with Animations!");