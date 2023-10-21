function direcao(e){
    let direcao = document.getElementById('carouselFilter');
    
    if(e == 1){
        // esquerda
        direcao.scrollLeft = direcao.scrollLeft - 200;

    } else if(e == 2){
        // direita
        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}