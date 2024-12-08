
// Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
})

let tl = gsap.timeline ({

})


// Lenis Smooth Scroll

    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
    console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
     lenis.raf(time);
     requestAnimationFrame(raf);
    }




