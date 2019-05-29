function paginaCargada() {
    var listaProductos = [];
    if (localStorage.getItem('listaProductos') != null) {
        listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
    }
    var carritoNum = document.querySelector('.carrito__cantidad');
    var listaCarrito = document.querySelector('.carrito-desplegado__lista');
    function actualizarCarrito() {
        carritoNum.innerHTML = listaProductos.length;
        listaCarrito.innerHTML = '';
        listaProductos.forEach(function (producto) {
            listaCarrito.innerHTML += '<img src="' + producto.imagen + '" width="50">' + producto.nombre;
        });
    }
    actualizarCarrito();
    var botonProducto = document.querySelector('.producto__agregar');
    function agregarAlCarrito() {
        var nombre = document.querySelector('.producto__nombre').innerText;
        var precio = document.querySelector('.producto__precio').innerText;
        var imagen = document.querySelector('.producto__imagen').src;
        var producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen,
        };
        listaProductos.push(producto);
        carritoNum.innerHTML = listaProductos.length;
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
    }
    if (botonProducto != null) {
        botonProducto.addEventListener('click', agregarAlCarrito);
    }
}
