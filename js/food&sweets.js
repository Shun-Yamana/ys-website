const opens = document.querySelectorAll('.sweets-btn');
const closes = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.sweets-modal');
const masks = document.querySelectorAll('.mask');

console.log(opens);
console.log(closes);
console.log(modals);
console.log(masks);

const showKeyframes = {
    opacity: [0, 1],
    visibility: 'visible',
};
const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
};
const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards',
};

opens.forEach((open, index) => {
    open.addEventListener('click', () => {
        const targetModal = modals[index];
        const targetMask = masks[index];
        targetModal.animate(showKeyframes, options);
        targetMask.animate(showKeyframes, options);
    });
});

closes.forEach((close, index) => {
    close.addEventListener('click', () => {
        const targetModal = modals[index];
        const targetMask = masks[index];
        targetModal.animate(hideKeyframes, options);
        targetMask.animate(hideKeyframes, options);
    });
});

masks.forEach((mask, index) => {
    mask.addEventListener('click', () => {
        closes[index].click();
    });
});


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