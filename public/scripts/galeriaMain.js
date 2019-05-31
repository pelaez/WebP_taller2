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



$(".producto-galeria__imagenDos").mouseenter(function(){
TweenMax.to(this, 0.5,{
    opacity:1,
    width: 250,
    height: 250,
    left: 0,
    top: 0,
    ease:Back.easeOut.config(1),
});
})

$(".producto-galeria__imagenDos").mouseleave(function(){
    TweenMax.to(this, 0.5,{
        opacity:0,
        width: 200,
        height: 200,
        left: '10%',
        top: '10%',
        ease:Back.easeOut.config(1),
    });
  })
  
}

window.addEventListener('load', paginaCargada);