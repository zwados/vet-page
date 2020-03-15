"use strict";

var categoryTitle = document.querySelector('.categoryTitle');
var categorySubtitle = document.querySelector('.categorySubtitle');
var categoryServicesList = document.querySelector('.categoryServicesList');
var categoryServicesItems = document.querySelectorAll('.categoryServicesItem');
var categorySelectButtons = document.querySelectorAll('.pets__link');
var categoryEnterLink = document.getElementById('categoryEnter');
var ctaSection = document.querySelector('.category__cta');
var interfaceElements = [categoryTitle, categorySubtitle, categoryEnterLink, categoryServicesList, ctaSection];
var animals = {
  dogs: {
    title: "Zadbaj o swojego psa",
    subtitle: "Najczęstsze potrzeby psów",
    servicesList: ["Szczepienia", "Badanie krwii", "USG", "Zdjęcie X-Ray", "Karmy weterynaryjne", "Odrobaczanie"],
    categoryLink: "pages/psy.html",
    ctaBgImg: "url(../img/dog-bg.svg)"
  },
  cats: {
    title: "Zadbaj o swojego kota",
    subtitle: "Najczęstsze potrzeby kotów",
    servicesList: ["Szczepienia", "Badanie krwii", "Przycinanie pazurków", "Zdjęcie X-Ray", "Karmy weterynaryjne", "Odrobaczanie"],
    categoryLink: "pages/koty.html",
    ctaBgImg: "url(../img/cat-bg.png)"
  },
  rodents: {
    title: "Zadbaj o swojego mysza",
    subtitle: "Najczęstsze potrzeby myszów",
    servicesList: ["Szczepienia", "Badanie krwii", "Przycinanie pazurków", "Zdjęcie X-Ray", "Piłowanie zębów", "Odrobaczanie"],
    categoryLink: "pages/gryzonie.html",
    ctaBgImg: "url(../img/rabit-bg.png)"
  },
  birds: {
    title: "Zadbaj o swojego ptaszka",
    subtitle: "Najczęstsze potrzeby ptaszków",
    servicesList: ["Szczepienia", "Badanie krwii", "Przycinanie pazurków", "Zdjęcie X-Ray", "Piłowanie zębów", "Odrobaczanie"],
    categoryLink: "pages/ptaki.html",
    ctaBgImg: "url(../img/bird-bg.png)"
  },
  fish: {
    title: "Zadbaj o swoje rybki",
    subtitle: "Najczęstsze potrzeby rybek",
    servicesList: ["Szczepienia", "Badanie krwii", "Przycinanie pazurków", "Zdjęcie X-Ray", "Piłowanie zębów", "Odrobaczanie"],
    categoryLink: "pages/akwariowe.html",
    ctaBgImg: "url(../img/fish-bg.png)"
  }
};
var categoryChoice = animals["dogs"];
categorySelectButtons.forEach(function (categorySelectButton) {
  categorySelectButton.addEventListener('click', function (e) {
    categoryChoice = e.target.id;
    hideElement();
    setTimeout(function () {
      handleContentChange(categoryChoice);
    }, 300);
    setTimeout(function () {
      showElement();
    }, 300);
  });
});

var hideElement = function hideElement() {
  interfaceElements.forEach(function (element) {
    element.style.transition = '.2s opacity linear';
    element.style.opacity = '0';
  });
};

var showElement = function showElement() {
  interfaceElements.forEach(function (element) {
    element.style.opacity = '1';
  });
};

var handleContentChange = function handleContentChange(activePet) {
  var activeCategory = animals[activePet];
  categoryTitle.textContent = "".concat(activeCategory.title);
  categorySubtitle.textContent = "".concat(activeCategory.subtitle);
  categoryEnterLink.href = activeCategory.categoryLink;
  ctaSection.style.backgroundImage = activeCategory.ctaBgImg;
  categoryServicesList.innerHTML = null;
  activeCategory.servicesList.forEach(function (listItem) {
    var newItem = document.createElement('li');
    newItem.classList.add('categoryServicesItem');
    newItem.textContent = listItem;
    categoryServicesList.appendChild(newItem);
  });
};