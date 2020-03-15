const smoothScrollTo = (link, target) => {

    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
        })
        if (target.id) {
            setTimeout(() => {
                window.location.replace(`#${target.id}`);
            }, 1000);
        }


    })
}

//ScrollTo chosen category
const categoryLinks = document.querySelectorAll('.pets__link');
const categorySection = document.querySelector('.category');


setTimeout(() => {
    console.log('foo');
    categoryLinks.forEach((categoryLink) => {
        smoothScrollTo(categoryLink, categorySection);
    })
}, 10);

//scrollTo Chosen Section

const servicesLink = document.querySelector('#uslugi');
const aboutLink = document.querySelector('#o-nas');
const contactLink = document.querySelector('#kontakt');
const navigationLinks = document.querySelectorAll('.navigation__link');

smoothScrollTo(navigationLinks[1], servicesLink);
smoothScrollTo(navigationLinks[2], aboutLink);
smoothScrollTo(navigationLinks[3], contactLink);