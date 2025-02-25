
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal Functionality

// Function to open modal
function openModal(modalId) {
    // Close any open modals first
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');

    // Open the selected modal
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // Use flex to center content
    }
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside the modal-content
window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Hamburger Menu for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close hamburger menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
