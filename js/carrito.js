// ===============================
// CARRITO.JS
// ===============================

console.log(localStorage.getItem("carrito"));
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ===============================
// AGREGAR PRODUCTOS
// ===============================

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    guardarCarrito();

    alert(nombre + " agregado al carrito.");

}

// ===============================
// GUARDAR
// ===============================

function guardarCarrito(){

    localStorage.setItem("carrito", JSON.stringify(carrito));

}

// ===============================
// MOSTRAR CARRITO
// ===============================

function mostrarCarrito(){

    const tabla = document.getElementById("tablaCarrito");

    if(!tabla) return;

    tabla.innerHTML="";

    let total = 0;

    carrito.forEach((producto,index)=>{

        total += producto.precio;

        tabla.innerHTML +=`

        <tr>

            <td>${producto.nombre}</td>

            <td>$ ${producto.precio.toLocaleString("es-AR")}</td>

            <td>

                <button
                class="btn btn-danger btn-sm"
                onclick="eliminarProducto(${index})">

                Eliminar

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("total").innerHTML="$ "+total.toLocaleString("es-AR");

}

// ===============================
// ELIMINAR
// ===============================

function eliminarProducto(index){

    carrito.splice(index,1);

    guardarCarrito();

    mostrarCarrito();

}

// ===============================
// VACIAR
// ===============================

function vaciarCarrito(){

    if(confirm("¿Desea vaciar el carrito?")){

        carrito=[];

        guardarCarrito();

        mostrarCarrito();

    }

}

// ===============================
// AL CARGAR
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    mostrarCarrito();

});
// ===============================
// FINALIZAR COMPRA
// ===============================

function finalizarCompra(){

    if(carrito.length===0){

        alert("El carrito está vacío.");

        return;

    }

    let total=0;

    let detalle="";

    carrito.forEach(producto=>{

        total+=producto.precio;

        detalle+=`

        <p>

        ✔ ${producto.nombre}

        <strong style="float:right">

        $ ${producto.precio.toLocaleString("es-AR")}

        </strong>

        </p>

        `;

    });

    document.getElementById("detalleFactura").innerHTML=detalle;

    document.getElementById("totalFactura").innerHTML=

    "$ "+total.toLocaleString("es-AR");

    document.getElementById("factura").style.display="block";

    carrito=[];

    guardarCarrito();

    mostrarCarrito();

    window.scrollTo({

        top:document.body.scrollHeight,

        behavior:"smooth"

    });

}
function agregarCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    guardarCarrito();
    /*actualizarContador();*/

    alert(nombre + " agregado al carrito.");
    

}
