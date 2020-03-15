"use strict";

//hamburger menu
var nav = document.querySelector('.nav');
var hamburgerToggle = document.querySelector('#toggle');
var hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', function () {
  if (hamburgerButton.style.color !== "rgb(114, 255, 79)") {
    hamburgerButton.style.color = "rgb(114, 255, 79)";
  } else {
    hamburgerButton.style.color = "#424242";
  }

  setTimeout(function () {
    if (hamburgerToggle.checked) {
      nav.style.transition = 'all linear .2s';
      nav.style.opacity = '1';
    } else {
      nav.style.opacity = '0';
    }
  }, 20);
});
window.addEventListener('resize', function () {
  setTimeout(function () {
    if (window.innerWidth >= 768) {
      nav.style.opacity = '1';
    }
  }, 20);
}); //sticky navigation

var navigation = document.querySelector('.navigation');
var body = document.querySelector('body');

var changeToFixed = function changeToFixed() {
  if (navigation.style.position !== 'fixed') {
    navigation.style.position = 'fixed';
    navigation.style.transform = 'translateY(-70px)';
    setTimeout(function () {
      navigation.style.transition = 'transform .2s linear';
      navigation.style.transform = 'translateY(0px)';
    }, 1000);
  }
};

var changeToAbsolute = function changeToAbsolute() {
  navigation.style.transition = 'transform 0s linear';
  navigation.style.position = 'absolute';
  navigation.style.transform = 'translateY(0px)';
};

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    changeToFixed();
  } else {
    changeToAbsolute();
  }
});