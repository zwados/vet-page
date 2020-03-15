const sectionTitle = document.querySelector('.sectionTitle');
const rangeInput = document.querySelector('.rangeInput');

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const servicesSection = document.querySelector('.offer__services');
const pricesSection = document.querySelector('.offer__prices');
const articlesSection = document.querySelector('.offer__articles');

const sectionBtns = document.querySelectorAll('.offer__btn');
const sections = [servicesSection, pricesSection, articlesSection];
const locations = ['#oferta', '#cennik', '#aktualnosci'];

window.location.hash = '#oferta';

sectionBtns.forEach((sectionBtn) => {
    sectionBtn.addEventListener('click', (e) => {
        rangeInput.value = e.target.dataset.index;
        handleSectionChange(rangeInput.value);
    })
})

prevBtn.addEventListener('click', () => {
    if (rangeInput.value !== 0) {
        rangeInput.value--;
        handleSectionChange(rangeInput.value);
    }
})

nextBtn.addEventListener('click', () => {
    if (rangeInput.value <= 2) {
        rangeInput.value++;
        handleSectionChange(rangeInput.value);
    }
})

const handleDisplayContent = (section) => {
    section.style.display = "flex";
    section.style.transition = "linear opacity .2s"
    setTimeout(() => {
        section.style.opacity = "1";
    })
}

const handleHideContent = (sections) => {
    sections.forEach((section) => {
        section.style.display = "none";
        section.style.opacity = "0";
    })
}

const handleLocationChange = (activeSection) => {
    window.location.hash = `${locations[activeSection]}`;
}

const handleSectionChange = (activeSection) => {
    handleHideContent(sections);
    handleDisplayContent(sections[activeSection]);
    handleLocationChange(activeSection);
}

rangeInput.addEventListener('change', () => {
    handleSectionChange(rangeInput.value);
})