/*
Menu_drink
==============================================================*/
const menuImage = document.querySelector('figure img');
const menuName = document.querySelector('#drink-name');
const menuText = document.querySelectorAll('.drink-item');

const keyframes_1 = {
    filter: ['blur(20px)', 'blur(0)'],
    opacity: [0, 1]
};
const options_1 = {
    duration: 1500,
};

for (let i = 0; i < menuText.length; i++) {
    menuText[i].addEventListener('mouseenter', (event) => {
        const newImageSrc = event.target.dataset.src;
        const newDrinkName = event.target.dataset.caption;

        if (newImageSrc) {
            menuImage.src = newImageSrc;
            menuImage.animate(keyframes_1, options_1);
        }

        if (newDrinkName) {

            menuName.textContent = '';

            const delayOffset = 1.0;


            [...newDrinkName].forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.classList.add('char-animate');
                span.style.animationDelay = `${delayOffset + index * 0.1}s`;
                menuName.appendChild(span);

                menuName.classList.remove('show-underline');
                void menuName.offsetWidth;
                menuName.classList.add('show-underline');

            });
        }
    });
}


/*
Menu_others
=================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const slideImg = document.getElementById('slide-img');

    if (slideImg) {
        console.log("wheel event attached");
        slideImg.addEventListener('wheel', function(e) {
            e.preventDefault();
            slideImg.scrollLeft += (e.deltaY) * 5.0;
            console.log("scrollLeft:", slideImg.scrollLeft);
        });
    }
});
/*
GALLERY
===================================================================*/
const showAllGalleryItems = () => {
    document.querySelectorAll('.gallery-item').forEach((item, i) => {
        const keyframes = {
            opacity: [0, 1],
            transform: ['translateY(50px)', 'translateY(0)'],
        };
        const options = {
            duration: 600,
            delay: i * 300,
            fill: 'forwards',
            easing: 'ease-out',
        };
        item.animate(keyframes, options);
    });
};


const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
        showAllGalleryItems();
        observer.disconnect();
    }
});


const firstItem = document.querySelector('.gallery-item');
if (firstItem) {
    observer.observe(firstItem);
}

/*
CONTACT
================================================================*/

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("modal").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

/*
LOADING
===============================================================*/
const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.animate({
        opacity: [1, 0],
        visibility: 'hidden',
    }, {
        duration: 2000,
        delay: 1200,
        easing: 'ease',
        fill: 'forwards'
    });
});
/*
OPENING
================================================================*/
setTimeout(() => {
    document.querySelector('#mainvisual').classList.add('active');
}, 3500);
setTimeout(() => {
    document.querySelectorAll('.opening').forEach(el => {
        el.classList.add('active');
    });
}, 3500);

/*
FADEIN
==================================================================*/
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate({
                opacity: [0, 1],
                flter: ['blur(.4rem)', 'blur(0)'],
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