document.addEventListener('DOMContentLoaded', function() {
    // Example: Show an alert when the contact form is submitted
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        alert('Thank you for your message!');
    });
});
