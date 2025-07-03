
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate({
                opacity: [0, 1],
                filter: ['blur(.4rem)', 'blur(0)'], // Corrected 'flter' to 'filter'
                translate: ['0 4rem', 0],
            }, {
                duration: 3000,
                easing: 'ease',
                fill: 'forwards',
            });
            obs.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(animateFade);

const FadeElements = document.querySelectorAll('.fadein');
FadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});