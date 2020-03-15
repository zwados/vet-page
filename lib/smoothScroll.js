"use strict";

var smoothScrollTo = function smoothScrollTo(link, target) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });

    if (target.id) {
      setTimeout(function () {
        window.location.replace("#".concat(target.id));
      }, 1000);
    }
  });
}; //ScrollTo chosen category


var categoryLinks = document.querySelectorAll('.pets__link');
var categorySection = document.querySelector('.category');
setTimeout(function () {
  console.log('foo');
  categoryLinks.forEach(function (categoryLink) {
    smoothScrollTo(categoryLink, categorySection);
  });
}, 10); //scrollTo Chosen Section

var servicesLink = document.querySelector('#uslugi');
var aboutLink = document.querySelector('#o-nas');
var contactLink = document.querySelector('#kontakt');
var navigationLinks = document.querySelectorAll('.navigation__link');
smoothScrollTo(navigationLinks[1], servicesLink);
smoothScrollTo(navigationLinks[2], aboutLink);
smoothScrollTo(navigationLinks[3], contactLink);