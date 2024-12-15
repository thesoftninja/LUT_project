
window.addEventListener('resize', moveHeroImage);

// Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerButtonLine = document.querySelectorAll('.hamburger-line');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Toggle 'line-active' only on click
        hamburgerButtonLine.forEach(line => {
            line.classList.toggle('line-active');
        });
    });
});





function moveHeroImage () {
    const heroHeading = document.querySelector('.hero .hero-heading');
    const heroImage = document.querySelector('.hero .hero-image');
    const heroContent = document.querySelector('.hero-content');

    if (window.innerWidth <= 670) {
        heroHeading.insertAdjacentElement('afterend', heroImage);
    } else {
        heroContent.insertAdjacentElement('afterend', heroImage)
    }
}

moveHeroImage();







