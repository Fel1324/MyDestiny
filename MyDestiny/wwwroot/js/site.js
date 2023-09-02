// ACTIVES
const navbarLinks = document.querySelectorAll('.navbar__link');
const path = window.location.pathname;

navbarLinks.forEach(navbarLink => {
    if(path === navbarLink.dataset.path){
        navbarLink.classList.add('link-active');
    }
});

const citiesBtn = document.querySelectorAll('.cities__button');

citiesBtn.forEach(cityBtn => {
    cityBtn.addEventListener('click', () => {
        citiesBtn.forEach(cBtn => {
            cBtn.classList.remove('cities__button--active');
        });

        cityBtn.classList.add('cities__button--active');
    });
});

// MENU

// SEARCH