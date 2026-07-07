document.querySelectorAll(".agregar").forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        agregarCarrito(nombre, precio);

    });

});