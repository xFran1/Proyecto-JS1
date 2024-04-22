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
      let imagenEncontrada=document.getElementById(imagen);


      if (imagenEncontrada) {
        imagenEncontrada.src = elemento.foto;
      let nombre=nombreLibro+""+contador;
      let tapa=tipoTapa+""+contador;
      let diner=dinero+""+contador;
      let auto=autor+""+contador;
      let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

      let nombreEncontrada=document.getElementById(nombre); 
      let tapaEncontrada=document.getElementById(tapa);
      let dineroEncontrada=document.getElementById(diner);
      let autorEncontrada=document.getElementById(auto);
      let productoEncontrada=document.getElementById(product)

      nombreEncontrada.textContent=elemento.nombre;
      tapaEncontrada.textContent=elemento.tapa
      dineroEncontrada.textContent=elemento.precio
      autorEncontrada.textContent=elemento.autor
      productoEncontrada.style.display="block";
    }
      

      contador++;
  });
});




let productos = [
  {
    autor:"RUNYX",
    nombre: "EL CAZADOR",
    tipo:"Novela Romance",
    precio: 18.90,
    foto: "imgProductos/Elcazador.webp",
    tapa:"Tapa blanda",
    novedad:true

  },
  {
    autor:"MEGAN MAXWELL",
    nombre: "LAS GUERRERAS MAXWELL",
    tipo:"Romance",
    precio: 17.10,
    foto: "imgProductos/Las guerreras maxwell.webp",
    tapa:"Tapa dura",
    novedad:true

  },
  {
    autor:"HANNAH GRACE",
    nombre: "SALTAN CHISPAS",
    tipo:"Novela Romance",
    precio: 18.90,
    foto: "imgProductos/Saltan chispas.webp",
    tapa:"Tapa blanda",
    novedad:false
  } ,
  {
    autor:"ANA HUANG",
    nombre: "PECADOS 1. REY DE LA IRA.",
    tipo:"Novela",
    precio: 22.75,
    foto: "imgProductos/Pecados.jpg",
    tapa:"Tapa dura",
    novedad:true
  } ,
  {
    autor:"TAMARA MOLINA",
    nombre: "DONDE NO PUEDAS ENCONTRARME",
    tipo:"Novela Romance",
    precio: 16.05,
    foto: "imgProductos/DONDE.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"FREIDA MCFADDEN",
    nombre: "EL SECRETO DE LA ASISTENTA",
    tipo:"Novela",
    precio: 19.85,
    foto: "imgProductos/ElSECRETO.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"JUAN GOMEZ JURADO",
    nombre: "TODO ARDE",
    tipo:"Novela",
    precio: 14.20,
    foto: "imgProductos/TODOARDE.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"CIXIN LIU",
    nombre: "EL PROBLEMA DE LOS TRES CUERPOS",
    tipo:"Novela Ciencia-Ficción",
    precio: 25.55,
    foto: "imgProductos/ELPROBLEMADE.webp",
    tapa:"Tapa dura",
    novedad:false
  },
  {
    autor:"CIXIN LIU",
    nombre: "LA TIERRA ERRANTE",
    tipo:"Ciencia-Ficción",
    precio: 14.20,
    foto: "imgProductos/latierraerrante.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"DMITRY GLUKHOVSKY",
    nombre: "OUTPOST Nº 02",
    tipo:"Ciencia-Ficción",
    precio: 18.95,
    foto: "imgProductos/OUTPOST.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"OLAF STAPLEDON",
    nombre: "HACEDOR DE ESTRELLAS",
    tipo:"Novela Ciencia-Ficción",
    precio: 18,
    foto: "imgProductos/HACEDOR.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"XIRAN JAY ZHAO",
    nombre: "HEAVENLY TYRANT",
    tipo:"Ciencia-Ficción",
    precio: 18.52,
    foto: "imgProductos/HEAVENLY.jpg",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"FRANK HERBERT",
    nombre: "DUNE (EDICIÓN PELÍCULA)",
    tipo:"Ciencia-Ficción",
    precio: 11.35,
    foto: "imgProductos/DUNE.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"XAVIER MARTINEZ BALLESTER",
    nombre: "LOS HEREDEROS DEL MUNDO",
    tipo:"Novela Ciencia-Ficción",
    precio: 11.35,
    foto: "imgProductos/losherederos.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"KRISTIN HANNAH",
    nombre: "LAS MUJERES DE LA GUERRA",
    tipo:"Novela Romance",
    precio: 20.80,
    foto: "imgProductos/lasmujeres.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"EMILY HENRY",
    nombre: "UN LUGAR FELIZ",
    tipo:"Novela Romance",
    precio: 18.05,
    foto: "imgProductos/UNLUGAR.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"INMA RUBIALES",
    nombre: "EL ARTE DE SER NOSOTROS",
    tipo:"Novela Romance",
    precio: 17.95,
    foto: "imgProductos/ELARTE.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"ALOMA MARTINEZ",
    nombre: "EL SÍNDROME DE LA CHICA CON SUERTE",
    tipo:"Novela Romance",
    precio: 19.85,
    foto: "imgProductos/ELSINDROME.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"ALICE KELLEN",
    nombre: "EL DIA QUE DEJO DE NEVAR EN ALASKA",
    tipo:"Novela Romance",
    precio: 15.19,
    foto: "imgProductos/ELDIAQUE.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"ANA ALVAREZ",
    nombre: "UN ROMANCE PROHIBIDO",
    tipo:"Novela Romance",
    precio: 4.74,
    foto: "imgProductos/UNROMANCE.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"TOM FOWLER",
    nombre: "REDLINE",
    tipo:"Thriller",
    precio: 3.99,
    foto: "imgProductos/redline.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"MARTA MARTIN GIRON",
    nombre: "DAMA BLANCA",
    tipo:"Thriller",
    precio: 9.49,
    foto: "imgProductos/damab.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"GUILLERMO GALVAN",
    nombre: "EL CLUB DE LAS VIUDAS.",
    tipo:"Novela Thriller",
    precio: 10.44,
    foto: "imgProductos/elclubd.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"MORGAN RICE",
    nombre: "TRANSMISIÓN",
    tipo:"Thriller",
    precio: 2.84,
    foto: "imgProductos/TRANSMI.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"MARK ROY ADÁN",
    nombre: "EL ENIGMA DE ROSWELL.",
    tipo:"Thriller",
    precio: 4.99,
    foto: "imgProductos/ELENIGMADE.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"JONAS HERLIN",
    nombre: "EL GABINETE DE LAS BRUJAS DE NORDERNEY",
    tipo:"Novela Thriller",
    precio: 2.84,
    foto: "imgProductos/elgabi.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"STHEPEN KING",
    nombre: "SI TE GUSTA LA OSCURIDAD",
    tipo:"Novela Terror",
    precio: 23.65,
    foto: "imgProductos/sitegusta.webp",
    tapa:"Tapa dura",
    novedad:false
  },
  
  {
    autor:"CHARLAINE HARRIS",
    nombre: "EL DÍA DEL JUICIO MORTAL",
    tipo:"Novela Terror",
    precio: 12.30,
    foto: "imgProductos/ELDIADEL.webp",
    tapa:"Tapa dura",
    novedad:false
  },
  {
    autor:"VICTORIA ALVAREZ",
    nombre: "HOJAS DE DEDALERA",
    tipo:"Terror",
    precio: 18.95,
    foto: "imgProductos/HOJASDE.webp",
    tapa:"Tapa dura",
    novedad:false
  },
  {
    autor:"ALMA KATSU",
    nombre: "THE DEEP. LAS PROFUNDIDADES",
    tipo:"Terror",
    precio: 18.95,
    foto: "imgProductos/THEDEEP.webp",
    tapa:"Tapa blanda",
    novedad:false
  },
  {
    autor:"IKER UNZU",
    nombre: "ESCAPANDO DE LA MANSIÓN EMBRUJADA",
    tipo:"Terror",
    precio: 14.15,
    foto: "imgProductos/escapandode.webp",
    tapa:"Tapa blanda",
    novedad:true
  },
  {
    autor:"GOLDY MOLDAVSKY",
    nombre: "EL CLUB DE MARY SHELLEY",
    tipo:"Terror",
    precio: 20.80,
    foto: "imgProductos/elclubde.webp",
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
    let imagenEncontrada=document.getElementById(imagen);


    if (imagenEncontrada) {
      imagenEncontrada.src = elemento.foto;
    let nombre=nombreLibro+""+contador;
    let tapa=tipoTapa+""+contador;
    let diner=dinero+""+contador;
    let auto=autor+""+contador;
    let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

    let nombreEncontrada=document.getElementById(nombre); 
    let tapaEncontrada=document.getElementById(tapa);
    let dineroEncontrada=document.getElementById(diner);
    let autorEncontrada=document.getElementById(auto);
    let productoEncontrada=document.getElementById(product)

    nombreEncontrada.textContent=elemento.nombre;
    tapaEncontrada.textContent=elemento.tapa
    dineroEncontrada.textContent=elemento.precio
    autorEncontrada.textContent=elemento.autor
    productoEncontrada.style.display="block";
  }
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
    let imagenEncontrada=document.getElementById(imagen);


    if (imagenEncontrada) {
      imagenEncontrada.src = elemento.foto;
    let nombre=nombreLibro+""+contador;
    let tapa=tipoTapa+""+contador;
    let diner=dinero+""+contador;
    let auto=autor+""+contador;
    let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

    let nombreEncontrada=document.getElementById(nombre); 
    let tapaEncontrada=document.getElementById(tapa);
    let dineroEncontrada=document.getElementById(diner);
    let autorEncontrada=document.getElementById(auto);
    let productoEncontrada=document.getElementById(product)

    nombreEncontrada.textContent=elemento.nombre;
    tapaEncontrada.textContent=elemento.tapa
    dineroEncontrada.textContent=elemento.precio
    autorEncontrada.textContent=elemento.autor
    productoEncontrada.style.display="block";
  }
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
  let imagenEncontrada=document.getElementById(imagen);


  if (imagenEncontrada) {
    imagenEncontrada.src = elemento.foto;
  let nombre=nombreLibro+""+contador;
  let tapa=tipoTapa+""+contador;
  let diner=dinero+""+contador;
  let auto=autor+""+contador;
  let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro

  let nombreEncontrada=document.getElementById(nombre); 
  let tapaEncontrada=document.getElementById(tapa);
  let dineroEncontrada=document.getElementById(diner);
  let autorEncontrada=document.getElementById(auto);
  let productoEncontrada=document.getElementById(product)

  nombreEncontrada.textContent=elemento.nombre;
  tapaEncontrada.textContent=elemento.tapa
  dineroEncontrada.textContent=elemento.precio
  autorEncontrada.textContent=elemento.autor
  productoEncontrada.style.display="block";

  if(elemento.novedad==false){
    productoEncontrada.style.display="none";
  }
}
    

    contador++;
  });
   
    });

    document.getElementById("Novela").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

            for(let i=0;i<palabraTipo.length;i++){
              if(palabraTipo[i]===("Novela")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("novela")
              }
              if (contador1 ===0){
                productoEncontrada.style.display="none";

              }
            }
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado novela")
      });

      document.getElementById("Thriller").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

            for(let i=0;i<palabraTipo.length;i++){
              if(palabraTipo[i]===("Thriller")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("Thriller")
              }
              if (contador1 ===0){
                productoEncontrada.style.display="none";

              }
            }
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado Thriller")
      });

      document.getElementById("Ciencia Ficcion").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

            for(let i=0;i<palabraTipo.length;i++){
              if(palabraTipo[i]===("Ciencia-Ficción")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("Ciencia Ficcion")
              }
              if (contador1 ===0){
                productoEncontrada.style.display="none";

              }
            }
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado Ciencia Ficcion")
      });      

      document.getElementById("Romance").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

            for(let i=0;i<palabraTipo.length;i++){
              if(palabraTipo[i]===("Romance")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("Romance")
              }
              if (contador1 ===0){
                productoEncontrada.style.display="none";

              }
            }
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado Romance")
      });      


      document.getElementById("Terror").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

            for(let i=0;i<palabraTipo.length;i++){
              if(palabraTipo[i]===("Terror")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("Terror")
              }
              if (contador1 ===0){
                productoEncontrada.style.display="none";

              }
            }
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado Terror")
      });     
      
      document.getElementById("tapa dura").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

           
              if(elemento.tapa===("Tapa dura")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("tapa dura")
              }else{
                productoEncontrada.style.display="none";

              }
             
            
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado tapa dura")
      });      
      document.getElementById("tapa blanda").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";

            let palabraTipo=elemento.tipo.split(" ");
            let contador1 = 0;

           
              if(elemento.tapa===("Tapa blanda")){
                productoEncontrada.style.display="block";
                contador1++;
                console.log("tapa blanda")
              }else{
                productoEncontrada.style.display="none";

              }
             
            
          }
      
           

            

            contador++;
        });
      
      console.log("filtrado tapa blanda")
      });   

      document.getElementById("filtrarPrecio").addEventListener("click",() =>{

      
        let contador = 1;
        let nombreImagen="imagen";
        let nombreLibro="container-grid-producto-titulo-";
        let tipoTapa="container-grid-producto-tapa-";
        let dinero="container-grid-producto-precio-";
        let autor="container-grid-producto-autor-";
        let producto="container-grid-producto-";
      
        let precioMinimo=document.getElementById("preciominimo").value
        let precioMaximo=document.getElementById("preciomaximo").value

        let contador1 = 0;
        
          productos.forEach(elemento =>{
            let imagen=nombreImagen+""+contador;
            let imagenEncontrada=document.getElementById(imagen);
           
            if (imagenEncontrada) {
              imagenEncontrada.src = elemento.foto;
            let nombre=nombreLibro+""+contador;
            let tapa=tipoTapa+""+contador;
            let diner=dinero+""+contador;
            let auto=autor+""+contador;
            let product=producto+""+contador; //Con esto todos los que no sean novedad los filtro
      
            let nombreEncontrada=document.getElementById(nombre); 
            let tapaEncontrada=document.getElementById(tapa);
            let dineroEncontrada=document.getElementById(diner);
            let autorEncontrada=document.getElementById(auto);
            let productoEncontrada=document.getElementById(product)
      
            nombreEncontrada.textContent=elemento.nombre;
            tapaEncontrada.textContent=elemento.tapa
            dineroEncontrada.textContent=elemento.precio
            autorEncontrada.textContent=elemento.autor
            productoEncontrada.style.display="block";


           
              if(elemento.precio>=precioMinimo&&elemento.precio<=precioMaximo){
                productoEncontrada.style.display="block";
                console.log("filtrado")
                console.log(elemento.precio)
                contador1++;
              }else{
                productoEncontrada.style.display="none";

              }
             
            
          }
      
           

            

            contador++;
        });
        if(contador1===0){
          alert("No se ha encontrado ningun libro")
         }
      console.log("filtrado dinero")
      });   
