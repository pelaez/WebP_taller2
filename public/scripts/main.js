function paginaCargada(){

TweenMax.to(".banner-princ__logo", 2, {
    bottom:0,
    opacity:1.0,
    ease:Back.easeOut
});

TweenMax.to(".banner-princ__cont", 2, {
    opacity:1.0
});

var especfs = document.querySelector('.especfs');

function mostrarEspecificaciones(){
    TweenMax.to(especfs, 2, {
        'background-position':100,
        opacity:1.0,
    });
}

especfs.addEventListener('mouseover', mostrarEspecificaciones);

//Galeria

TweenMax.from(".producto-galeria", 1, {opacity:0, y:100, delay:0.5});

}

window.addEventListener('load', paginaCargada);