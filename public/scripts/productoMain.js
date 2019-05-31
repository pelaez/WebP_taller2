function paginaCargada(){

    TweenMax.from(".detalles-producto", 1, {
        opacity:0, 
        x:-50, 
        ease:Back.easeOut.config(1), 
    });

    TweenMax.from(".producto__imagen", 1, {
        opacity:0, 
        x:-50, 
        ease:Back.easeOut.config(1), 
    });

}

window.addEventListener('load', paginaCargada);