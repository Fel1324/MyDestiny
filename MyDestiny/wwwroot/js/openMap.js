const btnOpenMap = document.querySelector('#btnOpenMap');
const btnCloseMap = document.querySelector('#btnCloseMap');
const map = document.querySelector('.city-map');

btnOpenMap.addEventListener('click', () => {
    map.classList.add('city-map--open');
    btnCloseMap.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

map.addEventListener('click', () => {
    map.classList.remove('city-map--open');
    btnCloseMap.style.display = 'none';
    document.body.style.overflow = 'auto';
});