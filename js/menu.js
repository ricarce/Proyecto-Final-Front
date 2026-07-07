const bar=document.getElementById("bar");

const close=document.getElementById("close");

const nav=document.getElementById("navbar");

if(bar){

bar.onclick=()=>{

nav.classList.add("active");

}

}

if(close){

close.onclick=()=>{

nav.classList.remove("active");

}

}