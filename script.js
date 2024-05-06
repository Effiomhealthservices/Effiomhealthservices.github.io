// Scroll to section
document.querySelectorAll('.navigation-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Perform input validation and form submission tasks here
});
