document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav ul li a'); // Get all nav links

    // Function to toggle the menu
    function toggleMenu() {
        mainNav.classList.toggle('active'); // Adds/removes 'active' class
        // Optionally, change the hamburger icon to a close icon
        if (mainNav.classList.contains('active')) {
            menuToggle.querySelector('i').classList.remove('fa-bars');
            menuToggle.querySelector('i').classList.add('fa-times'); // 'X' icon
        } else {
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars'); // Back to hamburger
        }
    }

    // Add event listener to the menu toggle button
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Add event listeners to each navigation link to close the menu on click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) { // Only close if menu is open
                toggleMenu(); // Use the same toggle function to close
            }
        });
    });
});