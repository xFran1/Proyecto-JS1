let ordenarApariencia=false;
let ordenar = document.getElementById("ordenar")
let triangulo = document.getElementById("triangulo1")
let trianguloApariencia=false;

document.getElementById("ordenar").addEventListener("click",() =>{
  let opcionesBotonOrdenar = document.getElementById("opcionesBotonOrdenar")
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
});



