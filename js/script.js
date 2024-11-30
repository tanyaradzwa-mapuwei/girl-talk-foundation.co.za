// JavaScript to toggle the mobile menu and change the icon
const menuToggle = document.getElementById('mobile-menu'); // Hamburger menu button
const navLinks = document.querySelector('nav ul'); // Navigation links container

// Add click event to the menu toggle button
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle 'show' class for the menu
    menuToggle.classList.toggle('active'); // Toggle 'active' class for the icon
});
