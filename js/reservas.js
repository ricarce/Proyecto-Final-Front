const checkin=document.getElementById("checkin");
const checkout=document.getElementById("checkout");
const cabania=document.getElementById("cabania");

document.getElementById("calcular").onclick=function(){

const entrada=new Date(checkin.value);

const salida=new Date(checkout.value);

const noches=(salida-entrada)/(1000*60*60*24);

if(noches<=0){

alert("Seleccione fechas válidas");

return;

}

const precio=Number(cabania.value);

let subtotal=precio*noches;

let descuento=0;

if(noches>=7){

descuento=subtotal*0.15;

}

const total=subtotal-descuento;

document.getElementById("noches").textContent=noches;

document.getElementById("subtotal").textContent=subtotal.toLocaleString("es-AR");

document.getElementById("descuento").textContent=descuento.toLocaleString("es-AR");

document.getElementById("total").textContent=total.toLocaleString("es-AR");

}