// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typed.js for dynamic typing effect
const typedElement = document.querySelector('.typed');
if (typedElement) {
    const typedStrings = typedElement.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
}

// Highlight active section in the navigation bar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
