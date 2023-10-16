const slider = document.querySelector('.slider__container');
let sliderImages = document.querySelector('.slider__images');
let sliderImagesLast = sliderImages[sliderImages - 1];

const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

btnNext.addEventListener('click', () => {
    let sliderImagesFirst = document.querySelector('.slider__images')[0];

    slider.style.transform.translate = '-100%';
});
