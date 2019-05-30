function paginaCargada(){

TweenMax.staggerFrom(".producto-galeria", 1, {
    opacity:0, 
    y:100, 
    ease:Back.easeOut.config(1), 
    delay:0.5
}, 0.2);

TweenMax.from(".titulo-paginas", 1, {
    opacity:0, 
    x:-100, 
    ease:Back.easeOut.config(1), 
});

TweenMax.from(".filtros", 1, {
    opacity:0, 
    x:-100, 
    ease:Back.easeOut.config(1),
    delay:0.3 
});

}

window.addEventListener('load', paginaCargada);