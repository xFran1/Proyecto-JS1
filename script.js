let ordenarApariencia=false;
let ordenarApariencia2=false;
let ordenarApariencia3=false;

let opcionesBotonOrdenar = document.getElementById("opcionesBotonOrdenar")
let opcionesBotonOrdenar1 = document.getElementById("opcionesBotonOrdenar1")
let opcionesBotonOrdenar2 = document.getElementById("opcionesBotonOrdenar2")


let ordenar = document.getElementById("ordenar")
let ordenar1 = document.getElementById("ordenar1")
let ordenar2 = document.getElementById("ordenar2")

let triangulo = document.getElementById("triangulo1")
let triangulo2 = document.getElementById("triangulo2")
let triangulo3 = document.getElementById("triangulo3")

let trianguloApariencia=false;
let trianguloApariencia2=false;
let trianguloApariencia3=false;

document.getElementById("ordenar").addEventListener("click",() =>{
if(ordenarApariencia){
  opcionesBotonOrdenar.style.display="block";

}else{
  opcionesBotonOrdenar.style.display="none";

}

if(trianguloApariencia){
triangulo.innerHTML="▲"
}else{
  triangulo.innerHTML="▼"

}
trianguloApariencia=!trianguloApariencia;
ordenarApariencia = !ordenarApariencia;
opcionesBotonOrdenar1.style.display="none";
opcionesBotonOrdenar2.style.display="none";

});

document.getElementById("ordenar1").addEventListener("click",() =>{
if(ordenarApariencia2){
  opcionesBotonOrdenar1.style.display="block";

}else{
  opcionesBotonOrdenar1.style.display="none";

}

if(trianguloApariencia2){
  triangulo2.innerHTML="▲"
}else{
  triangulo2.innerHTML="▼"

}
trianguloApariencia2=!trianguloApariencia2;
ordenarApariencia2 = !ordenarApariencia2;
opcionesBotonOrdenar.style.display="none";
opcionesBotonOrdenar2.style.display="none";


});

document.getElementById("ordenar2").addEventListener("click",() =>{
if(ordenarApariencia3){
  opcionesBotonOrdenar2.style.display="block";

}else{
  opcionesBotonOrdenar2.style.display="none";

}

if(trianguloApariencia3){
  triangulo3.innerHTML="▲"
}else{
  triangulo3.innerHTML="▼"

}
trianguloApariencia3=!trianguloApariencia3;
ordenarApariencia3 = !ordenarApariencia3;
opcionesBotonOrdenar1.style.display="none";
opcionesBotonOrdenar.style.display="none";

});



