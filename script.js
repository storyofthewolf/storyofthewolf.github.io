document.addEventListener('DOMContentLoaded', () => {
    
    // --- Set current year in footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Sidebar Menu Functionality ---
    const menuToggleButton = document.getElementById('menu-toggle-btn');
    const sidebar = document.getElementById('sidebar-menu');
    const closeButton = sidebar.querySelector('.close-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const body = document.body;

    // Function to open/close the sidebar
    function toggleSidebar() {
        // Check if elements exist before toggling classes
        if (sidebar) sidebar.classList.toggle('is-open');
        if (sidebarOverlay) sidebarOverlay.classList.toggle('is-visible');
        if (body) body.classList.toggle('no-scroll');
    }

    // Add event listeners only if the elements exist on the page
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', toggleSidebar);
    }
    if (closeButton) {
        closeButton.addEventListener('click', toggleSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleSidebar); // Close when clicking overlay
    }
});