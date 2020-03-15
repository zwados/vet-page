"use strict";

var sectionTitle = document.querySelector('.sectionTitle');
var rangeInput = document.querySelector('.rangeInput');
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var servicesSection = document.querySelector('.offer__services');
var pricesSection = document.querySelector('.offer__prices');
var articlesSection = document.querySelector('.offer__articles');
var sectionBtns = document.querySelectorAll('.offer__btn');
var sections = [servicesSection, pricesSection, articlesSection];
var locations = ['#oferta', '#cennik', '#aktualnosci'];
window.location.hash = '#oferta';
sectionBtns.forEach(function (sectionBtn) {
  sectionBtn.addEventListener('click', function (e) {
    rangeInput.value = e.target.dataset.index;
    handleSectionChange(rangeInput.value);
  });
});
prevBtn.addEventListener('click', function () {
  if (rangeInput.value !== 0) {
    rangeInput.value--;
    handleSectionChange(rangeInput.value);
  }
});
nextBtn.addEventListener('click', function () {
  if (rangeInput.value <= 2) {
    rangeInput.value++;
    handleSectionChange(rangeInput.value);
  }
});

var handleDisplayContent = function handleDisplayContent(section) {
  section.style.display = "flex";
  section.style.transition = "linear opacity .2s";
  setTimeout(function () {
    section.style.opacity = "1";
  });
};

var handleHideContent = function handleHideContent(sections) {
  sections.forEach(function (section) {
    section.style.display = "none";
    section.style.opacity = "0";
  });
};

var handleLocationChange = function handleLocationChange(activeSection) {
  window.location.hash = "".concat(locations[activeSection]);
};

var handleSectionChange = function handleSectionChange(activeSection) {
  handleHideContent(sections);
  handleDisplayContent(sections[activeSection]);
  handleLocationChange(activeSection);
};

rangeInput.addEventListener('change', function () {
  handleSectionChange(rangeInput.value);
});