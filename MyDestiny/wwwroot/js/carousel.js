const $slider = document.querySelector('.slider__container');
let sliderImages = document.querySelectorAll('.slider__images');
let sliderImagesLast = sliderImages[sliderImages - 1];

const $btnNext = document.querySelector('#btn-next');
const $btnPrev = document.querySelector('#btn-prev');

function next(){
    let $sliderImagesFirst = document.querySelectorAll('.slider__images')[0];

    $slider.style.marginLeft = '-200%';
    $slider.style.transition = 'margin-left 1s';
    setTimeout(() => {
        $slider.style.transition = 'none';
        $slider.insertAdjacentElement('beforeend', $sliderImagesFirst);
        $slider.style.marginLeft = '-100%';
    }, 1000);
}

function prev(){
    let sliderImages = document.querySelectorAll('.slider__images');
    let sliderImagesLast = sliderImages[sliderImages.length - 1];
    $slider.style.marginLeft = '0';
    $slider.style.transition = 'margin-left 1s';
    setTimeout(() => {
        $slider.style.transition = 'none';
        $slider.insertAdjacentElement('afterbegin', sliderImagesLast);
        $slider.style.marginLeft = '-100%';
    }, 1000);
}

$btnNext.addEventListener('click', function (){
    next();
});

$btnPrev.addEventListener('click', function (){
    prev();
});
