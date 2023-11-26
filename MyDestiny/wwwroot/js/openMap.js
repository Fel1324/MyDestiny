const btnOpenMap = document.querySelector('#btnOpenMap');
const btnCloseMap = document.querySelector('#btnCloseMap');
const map = document.querySelector('.city-map');
const mapOverlay = document.querySelector('#map-overlay');

btnOpenMap.addEventListener('click', () => {
    map.classList.add('city-map--open');
    btnCloseMap.style.display = 'block';
    mapOverlay.style.display = 'block';

    document.body.style.overflow = 'hidden';
});

btnCloseMap.addEventListener('click', () => {
    map.classList.remove('city-map--open');
    btnCloseMap.style.display = 'none';
    mapOverlay.style.display = 'none';

    document.body.style.overflow = 'auto';
});
