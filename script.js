/* === Main Sidebar Menu Functionality === */

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Get all the necessary elements
    const menuToggleButton = document.getElementById('menu-toggle-btn');
    const sidebar = document.getElementById('sidebar-menu');
    const closeButton = sidebar.querySelector('.close-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const body = document.body;
    
    // --- NEW: Get all sidebar links ---
    const sidebarLinks = sidebar.querySelectorAll('ul li a');

    // Function to toggle the sidebar's state
    function toggleSidebar() {
        sidebar.classList.toggle('is-open');
        sidebarOverlay.classList.toggle('is-visible');
        body.classList.toggle('no-scroll'); // Prevents body scrolling when menu is open
    }

    // --- NEW: Function to CLOSE the sidebar (if it's open) ---
    function closeSidebar() {
        if (sidebar.classList.contains('is-open')) {
            toggleSidebar();
        }
    }

    // Add click listeners to open/close the sidebar
    if (menuToggleButton && sidebar && closeButton && sidebarOverlay) {
        menuToggleButton.addEventListener('click', toggleSidebar);
        closeButton.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar); // Also close when clicking the overlay
    }

    // --- NEW: Add click listener to all sidebar links ---
    // This makes the menu close when a link is clicked on mobile
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });


    // --- Current Year for Footer ---
    // Find all elements with the ID 'current-year' and set their text
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});