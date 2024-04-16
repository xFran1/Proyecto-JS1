let ordenarApariencia=false;

document.getElementById("ordenar").addEventListener("click",() =>{
  let opcionesBotonOrdenar = document.getElementById("opcionesBotonOrdenar")
if(ordenarApariencia){
  opcionesBotonOrdenar.style.display="block";

}else{
  opcionesBotonOrdenar.style.display="none";

}
ordenarApariencia = !ordenarApariencia;


});


