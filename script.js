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
opcionesBotonOrdenar.style.display="none";
opcionesBotonOrdenar1.style.display="none";
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

//region Objetos



document.addEventListener("DOMContentLoaded", function() {
  let contador = 1;
  let nombreImagen="imagen";
  let nombreLibro="container-grid-producto-titulo-";
  let tipoTapa="container-grid-producto-tapa-";
  let dinero="container-grid-producto-precio-";
  let autor="container-grid-producto-autor-";
  let producto="container-grid-producto-";

  
    productos.forEach(elemento =>{
      let imagen=nombreImagen+""+contador;
      let nombre=nombreLibro+""+contador;
      let tapa=tipoTapa+""+contador;
      let diner=dinero+""+contador;
      let auto=autor+""+contador;
      let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

      let imagenEncontrada=document.getElementById(imagen);
      let nombreEncontrada=document.getElementById(nombre); 
      let tapaEncontrada=document.getElementById(tapa);
      let dineroEncontrada=document.getElementById(diner);
      let autorEncontrada=document.getElementById(auto);
      let productoEncontrada=document.getElementById(product)

      imagenEncontrada.src=elemento.foto;
      nombreEncontrada.textContent=elemento.nombre;
      tapaEncontrada.textContent=elemento.tapa
      dineroEncontrada.textContent=elemento.precio
      autorEncontrada.textContent=elemento.autor
      productoEncontrada.style.display="block";

      contador++;
  });
});




let productos = [
  {
    autor:"Felipe",
    nombre: "El cazador",
    precio: 15,
    foto: "imgProductos/Elcazador.webp",
    tapa:"Tapa blanda",
    novedad:true

  },
  {
    autor:"Juan Martin",
    nombre: "Las guerreras maxwell",
    precio: 30,
    foto: "imgProductos/Las guerreras maxwell.webp",
    tapa:"Tapa dura",
    novedad:true

  },
  {
    autor:"Unamuno Martinez",
    nombre: "Saltan chispas",
    precio: 21.4,
    foto: "imgProductos/Saltan chispas.webp",
    tapa:"Tapa blanda",
    novedad:false
  }
];

document.getElementById("ordenarMayorMenor").addEventListener("click",() =>{

productos.sort(function(a,b){
return b.precio-a.precio;
});

let contador = 1;
  let nombreImagen="imagen";
  let nombreLibro="container-grid-producto-titulo-";
  let tipoTapa="container-grid-producto-tapa-";
  let dinero="container-grid-producto-precio-";
  let autor="container-grid-producto-autor-";
  let producto="container-grid-producto-";

  
    productos.forEach(elemento =>{
      let imagen=nombreImagen+""+contador;
      let nombre=nombreLibro+""+contador;
      let tapa=tipoTapa+""+contador;
      let diner=dinero+""+contador;
      let auto=autor+""+contador;
      let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

      let imagenEncontrada=document.getElementById(imagen);
      let nombreEncontrada=document.getElementById(nombre); 
      let tapaEncontrada=document.getElementById(tapa);
      let dineroEncontrada=document.getElementById(diner);
      let autorEncontrada=document.getElementById(auto);
      let productoEncontrada=document.getElementById(product)

      imagenEncontrada.src=elemento.foto;
      nombreEncontrada.textContent=elemento.nombre;
      tapaEncontrada.textContent=elemento.tapa
      dineroEncontrada.textContent=elemento.precio
      autorEncontrada.textContent=elemento.autor
      productoEncontrada.style.display="block";

      contador++;
  });

console.log("mayor a menor")
});

document.getElementById("ordenarMenorMayor").addEventListener("click",() =>{

  productos.sort(function(a,b){
  return a.precio-b.precio;
  });
  
  let contador = 1;
  let nombreImagen="imagen";
  let nombreLibro="container-grid-producto-titulo-";
  let tipoTapa="container-grid-producto-tapa-";
  let dinero="container-grid-producto-precio-";
  let autor="container-grid-producto-autor-";
  let producto="container-grid-producto-";

  
    productos.forEach(elemento =>{
      let imagen=nombreImagen+""+contador;
      let nombre=nombreLibro+""+contador;
      let tapa=tipoTapa+""+contador;
      let diner=dinero+""+contador;
      let auto=autor+""+contador;
      let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

      let imagenEncontrada=document.getElementById(imagen);
      let nombreEncontrada=document.getElementById(nombre); 
      let tapaEncontrada=document.getElementById(tapa);
      let dineroEncontrada=document.getElementById(diner);
      let autorEncontrada=document.getElementById(auto);
      let productoEncontrada=document.getElementById(product)

      imagenEncontrada.src=elemento.foto;
      nombreEncontrada.textContent=elemento.nombre;
      tapaEncontrada.textContent=elemento.tapa
      dineroEncontrada.textContent=elemento.precio
      autorEncontrada.textContent=elemento.autor
      productoEncontrada.style.display="block";

      contador++;
    });
  
  console.log("menor a mayor")
  });
//Novedad
document.getElementById("novedad").addEventListener("click",() =>{
  let contador = 1;
let nombreImagen="imagen";
let nombreLibro="container-grid-producto-titulo-";
let tipoTapa="container-grid-producto-tapa-";
let dinero="container-grid-producto-precio-";
let autor="container-grid-producto-autor-";
let producto="container-grid-producto-";

  productos.forEach(elemento =>{
    let imagen=nombreImagen+""+contador;
    let nombre=nombreLibro+""+contador;
    let tapa=tipoTapa+""+contador;
    let diner=dinero+""+contador;
    let auto=autor+""+contador;
    let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

    let imagenEncontrada=document.getElementById(imagen);
    let nombreEncontrada=document.getElementById(nombre); 
    let tapaEncontrada=document.getElementById(tapa);
    let dineroEncontrada=document.getElementById(diner);
    let autorEncontrada=document.getElementById(auto);
    let productoEncontrada=document.getElementById(product)
    imagenEncontrada.src=elemento.foto;
    nombreEncontrada.textContent=elemento.nombre;
    tapaEncontrada.textContent=elemento.tapa
    dineroEncontrada.textContent=elemento.precio
    autorEncontrada.textContent=elemento.autor
  
    if(elemento.novedad==false){
      productoEncontrada.style.display="none";
    }

    contador++;
  });
   
    });

document.getElementById("prueba").addEventListener("click",() =>{

console.log("Ordenacion simple")

});

