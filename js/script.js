const categoryTitle = document.querySelector('.categoryTitle');
const categorySubtitle = document.querySelector('.categorySubtitle');
const categoryServicesList = document.querySelector('.categoryServicesList');
const categoryServicesItems = document.querySelectorAll('.categoryServicesItem');
const categorySelectButtons = document.querySelectorAll('.pets__link');
const categoryEnterLink = document.getElementById('categoryEnter');
const ctaSection = document.querySelector('.category__cta');

const interfaceElements = [categoryTitle, categorySubtitle, categoryEnterLink, categoryServicesList, ctaSection];

const animals = {
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
    },
}

let categoryChoice = animals["dogs"];

categorySelectButtons.forEach((categorySelectButton) => {
    categorySelectButton.addEventListener('click', (e) => {
        categoryChoice = e.target.id;
        hideElement();
        setTimeout(() => {
            handleContentChange(categoryChoice);
        }, 300);
        setTimeout(() => {
            showElement()
        }, 300);
    })
})

const hideElement = () => {
    interfaceElements.forEach((element) => {
        element.style.transition = '.2s opacity linear';
        element.style.opacity = '0';
    })
}

const showElement = () => {
    interfaceElements.forEach((element) => {
        element.style.opacity = '1';
    })
}


const handleContentChange = (activePet) => {
    let activeCategory = animals[activePet];
    categoryTitle.textContent = `${activeCategory.title}`;
    categorySubtitle.textContent = `${activeCategory.subtitle}`;
    categoryEnterLink.href = activeCategory.categoryLink;
    ctaSection.style.backgroundImage = activeCategory.ctaBgImg;
    categoryServicesList.innerHTML = null;
    activeCategory.servicesList.forEach(listItem => {
        const newItem = document.createElement('li');
        newItem.classList.add('categoryServicesItem');
        newItem.textContent = listItem;
        categoryServicesList.appendChild(newItem);
    })


}