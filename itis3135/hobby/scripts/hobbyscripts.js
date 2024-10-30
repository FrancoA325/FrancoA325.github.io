document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    function showSection(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Show the home section by default
    showSection('home');
});