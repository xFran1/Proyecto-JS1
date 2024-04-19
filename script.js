let ordenarApariencia=false;
let ordenarApariencia2=false;
let ordenarApariencia3=false;
let ordenarApariencia4=false;


let opcionesBotonOrdenar = document.getElementById("opcionesBotonOrdenar")
let opcionesBotonOrdenar1 = document.getElementById("opcionesBotonOrdenar1")
let opcionesBotonOrdenar2 = document.getElementById("opcionesBotonOrdenar2")
let opcionesBotonOrdenar3 = document.getElementById("opcionesBotonOrdenar3")


let ordenar = document.getElementById("ordenar")
let ordenar1 = document.getElementById("ordenar1")
let ordenar2 = document.getElementById("ordenar2")
let ordenar3 = document.getElementById("ordenar3")


let triangulo = document.getElementById("triangulo1")
let triangulo2 = document.getElementById("triangulo2")
let triangulo3 = document.getElementById("triangulo3")
let triangulo4 = document.getElementById("triangulo4")


let trianguloApariencia=false;
let trianguloApariencia2=false;
let trianguloApariencia3=false;
let trianguloApariencia4=false;


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
opcionesBotonOrdenar3.style.display="none";


trianguloApariencia2=false;
if(trianguloApariencia2){
  triangulo2.innerHTML="▲"
}else{
  triangulo2.innerHTML="▼"

}

trianguloApariencia3= false;

if(trianguloApariencia3){
  triangulo3.innerHTML="▲"
}else{
  triangulo3.innerHTML="▼"

}

trianguloApariencia4= false;
if(trianguloApariencia4){
 triangulo4.innerHTML="▲"
}else{
 triangulo4.innerHTML="▼"

}

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

 trianguloApariencia=false;
 if(trianguloApariencia){
  triangulo.innerHTML="▲"
  }else{
    triangulo.innerHTML="▼"
  
  }

  trianguloApariencia4= false;
  if(trianguloApariencia4){
   triangulo4.innerHTML="▲"
 }else{
   triangulo4.innerHTML="▼"
 
 }

trianguloApariencia2=!trianguloApariencia2;
ordenarApariencia2 = !ordenarApariencia2;
opcionesBotonOrdenar.style.display="none";
opcionesBotonOrdenar2.style.display="none";
opcionesBotonOrdenar3.style.display="none";


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
opcionesBotonOrdenar3.style.display="none";


trianguloApariencia2=false;
if(trianguloApariencia2){
  triangulo2.innerHTML="▲"
}else{
  triangulo2.innerHTML="▼"

}

trianguloApariencia=false;
if(trianguloApariencia){
 triangulo.innerHTML="▲"
 }else{
   triangulo.innerHTML="▼"
 
 }
 trianguloApariencia4= false;
 if(trianguloApariencia4){
  triangulo4.innerHTML="▲"
}else{
  triangulo4.innerHTML="▼"

}


});

document.getElementById("ordenar3").addEventListener("click",() =>{
  if(ordenarApariencia4){
    opcionesBotonOrdenar3.style.display="block";
  
  }else{
    opcionesBotonOrdenar3.style.display="none";
  
  }
  
  if(trianguloApariencia4){
    triangulo4.innerHTML="▲"
  }else{
    triangulo4.innerHTML="▼"
  
  }
  trianguloApariencia4=!trianguloApariencia4;
  ordenarApariencia4 = !ordenarApariencia4;

  opcionesBotonOrdenar.style.display="none";
  opcionesBotonOrdenar1.style.display="none";
  opcionesBotonOrdenar2.style.display="none";


  trianguloApariencia=false;
  if(trianguloApariencia){
    triangulo.innerHTML="▲"
  }else{
    triangulo.innerHTML="▼"
  
  }

  trianguloApariencia2=false;
if(trianguloApariencia2){
  triangulo2.innerHTML="▲"
}else{
  triangulo2.innerHTML="▼"

}

trianguloApariencia3= false;

if(trianguloApariencia3){
  triangulo3.innerHTML="▲"
}else{
  triangulo3.innerHTML="▼"

}

});


