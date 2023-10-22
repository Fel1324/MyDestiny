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
const menuLateral = document.querySelector('.menu');
const btnOpen = document.querySelector('#open-menu');
const btnClose = document.querySelector('#close-menu')

btnOpen.addEventListener('click', () => {
    menuLateral.classList.add('menu-open');
    document.body.style.overflowY = 'hidden';
});

btnClose.addEventListener('click', () => {
    menuLateral.classList.remove('menu-open');
    document.body.style.overflowY = 'auto';
});
