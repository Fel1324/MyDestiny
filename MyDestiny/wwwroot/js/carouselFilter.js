const slider = document.querySelector('.cities__buttons');
const prevButton = document.getElementById('carouselF-prev');
const nextButton = document.getElementById('carouselF-next');
console.log(slider);

nextButton.addEventListener('click', () => {
    const firstTopic = slider.firstElementChild;
    slider.appendChild(firstTopic);
    slider.style.transition = "transform 0.3s ease";
    slider.style.transform = "translateX(0)";
    updateButtonVisibility();
});

prevButton.addEventListener('click', () => {
    const lastTopic = slider.lastElementChild;
    slider.prepend(lastTopic);
    slider.style.transition = "transform 0.3s ease";
    slider.style.transform = "translateX(0)";
    updateButtonVisibility();
});

function updateButtonVisibility() {
    if (slider.firstElementChild === slider.firstElementChild.nextElementSibling) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    if (slider.lastElementChild === slider.lastElementChild.previousElementSibling) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

// Chame a função de atualização inicialmente
updateButtonVisibility();
