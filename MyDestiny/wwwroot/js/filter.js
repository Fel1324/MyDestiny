function filter(city) {
    let attractions, i;
    let count = 0;
    attractions = document.getElementsByClassName("attractions__item");
    buttons = document.getElementsByClassName("cities__button--filter");

    for (i = 0; i < attractions.length; i++) {
        attractions[i].parentElement.style.display = 'none';

        if (attractions[i].classList.contains(city) || city === "all") {
            attractions[i].parentElement.style.display = 'block';
            count += 1;
        };
    };
    
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].id == `btn-${city}`) {
            buttons[i].classList.remove("btn-sm");
            buttons[i].classList.add("btn-lg");
        }
        else {
            buttons[i].classList.remove("btn-lg");
            buttons[i].classList.add("btn-sm");
        }
    };

    if (city === "all") {
        document.getElementById("btn-all").classList.remove("btn-sm");
        document.getElementById("btn-all").classList.add("btn-lg");
    };
}    

window.addEventListener('scroll', () => {
    showBackToTopButtonOnScroll();
});

function showBackToTopButtonOnScroll(){
    if(scrollY > 500){
        document.getElementById('backToTopButton').classList.add('show');
    } else{
        document.getElementById('backToTopButton').classList.remove('show');
    }
}