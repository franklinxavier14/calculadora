precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function sumarCantidad() {
    let cantidadSpan = document.querySelector(".cantidad");
    let precioSpan = document.querySelector(".precio-inicial");
    let valorTotalSpan = document.querySelector(".valor-total");

    let cantidad = parseInt(cantidadSpan.innerHTML);
    let precio = parseInt(precioSpan.innerHTML);

    cantidad++;
    cantidadSpan.innerHTML = cantidad;

    let precioTotal = cantidad * precio;
    valorTotalSpan.innerHTML = precioTotal;
}

function restarCantidad() {
    let cantidadSpan = document.querySelector(".cantidad");
    let precioSpan = document.querySelector(".precio-inicial");
    let valorTotalSpan = document.querySelector(".valor-total");

    let cantidad = parseInt(cantidadSpan.innerHTML);
    let precio = parseInt(precioSpan.innerHTML);

    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;

        let precioTotal = cantidad * precio;
        valorTotalSpan.innerHTML = precioTotal;
    }
}
