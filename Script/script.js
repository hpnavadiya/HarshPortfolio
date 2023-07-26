var typed = new Typed('#element', {
    strings: ['Content Creator', 'Full-Stack Developer'],
    typeSpeed: 100,
});

// Scroll Reveal 

ScrollReveal({ 
    reset: true,
    distance : '80px', // Distance of element from top/bottom when scrolled.
    duration : 2000, // Duration in milliseconds.
    delay : 350 // Time before animation starts.
});

ScrollReveal().reveal('.left-section', { origin: 'top' });
ScrollReveal().reveal('.right-section, .projectInfo', { origin: 'bottom' });
ScrollReveal().reveal('.first-text, .footer-first, .myInfo, .projectHeading, h2, h3, .abouttHeading', { origin: 'left' });
ScrollReveal().reveal('.head-name, .button, .line', { origin: 'right' });
ScrollReveal().reveal('.projects', { origin: 'right' });
