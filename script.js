document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Navbar on scroll
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Add 'scrolled' class after scrolling 50px
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    }


    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            // Store preference in localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
        });

        // Check for saved theme preference on load
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }


    // Back to Top button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Basic Contact Form Handling (Client-side validation only)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // For a real-world scenario, you would send this data to a backend
            // (e.g., using Fetch API, AJAX, or a service like Formspree, Netlify Forms)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! I will get back to you soon.');
                contactForm.reset(); // Clear the form
                // In a real application, you'd send this to a server
                console.log('Form Submitted:', { name, email, message });
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

});