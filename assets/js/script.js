// Function to handle the Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a');

    const OPEN_ICON_SRC = 'assets/images/hamburger-menu.png';
    const CLOSE_ICON_SRC = 'assets/images/cancel.png';

    // 1. Toggle the menu and icon on click
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        // Toggle the image source
        if (mainNav.classList.contains('active')) {
             menuToggle.src = CLOSE_ICON_SRC;
             menuToggle.alt = "Close Menu";
        } else {
             menuToggle.src = OPEN_ICON_SRC;
             menuToggle.alt = "Menu";
        }
    });

    // 2. Close the menu and reset icon when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only close if the menu is active (mobile view)
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                
                // Reset icon to open state
                menuToggle.src = OPEN_ICON_SRC;
                menuToggle.alt = "Menu";
            }
        });
    });

    // 3. Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission
            
            // In a real application, you would send this data to a server (e.g., using fetch or XMLHttpRequest)
            alert('Thank you for your message! I will get back to you soon.');

            // Clear the form after submission
            contactForm.reset();
        });
    }
});