const productos = [
    {
        id:1,
        nombre: "Dulce de Leche Artesanal",
        categoria: "Producto artesanal",
        precio: 4500,
        imagen:"../img/dulcedeleche.jpg"

    },
    {
        id: 2,
        nombre: "Miel",
        categoria: "Miel Organica",
        precio: 5500,
        imagen:"../img/miel.jpg",

    },
    {
      id: 3,
        nombre: "Quesos",
        categoria: "Quesos Regionales",
        precio: 15500,
        imagen:"../img/queso.jpg",  
    },
    {
      id: 4,
        nombre: "Salames",
        categoria: "Salames Artesanales",
        precio: 15900,
        imagen:"../img/salame.jpg",   
    },
    {
       id: 5,
        nombre: "Cabalgata Guiada",
        categoria: "Actividades al Aires Libre",
        precio: 10000 ,
        imagen:"../img/cabalgata.jpg",  
    },
    {
       id: 6,
        nombre: "Paseos en Kayak",
        categoria: "Actividades al Aires Libre",
        precio: 15000 ,
        imagen:"../img/kayak.jpg",  
    },
    {
      id: 7,
        nombre: "Trekking",
        categoria: "Actividades al Aires Libre",
        precio: 5000 ,
        imagen:"../img/treking.jpg",  
    },
    {
      id: 8,
        nombre: "Fogon de Noche",
        categoria: "Actividades al Aires Libre",
        precio: 2000 ,
        imagen:"../img/fogon.jpg",  
    }
    ];
      

        const cardsHTML = productos.map(({id, nombre, categoria,precio, imagen}) => { 
            return `

           <div class="producto">

            <img src="${imagen}" alt="${nombre}">

            <div class="producto-descripcion">

                <span>${categoria}</span>

                <h5>${nombre}</h5>

                <h4>$${precio.toFixed(2)}</h4>

            </div>

            <button class="btn-descripcion">

                Ver descripción

            </button>

            <button
               id="btn-agregar-${id}"
                    class="agregar">
               <i class="fal fa-shopping-cart"></i>
                Agregar
            </button>

        </div> 
        `;
        });

        const contenedor = document.querySelector('.productos-container');

contenedor.innerHTML = cardsHTML.join('');


productos.forEach(producto => {

    const boton = document.getElementById(`btn-agregar-${producto.id}`);

    boton.addEventListener("click", () => {

        agregarCarrito(producto.nombre, producto.precio);

    });

});

    

