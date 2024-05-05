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


if(ordenar){

  

  document.getElementById("ordenar").addEventListener("click",() =>{//Esto es simplemente el boton de ordenar para que tenga una minima animacion
    if(ordenarApariencia){                                         //En caso de que otro boton ordenar este abierto y se clicke este se cerrara el otro 
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
    
    document.getElementById("ordenar1").addEventListener("click",() =>{//Esto es simplemente el boton de ordenar para que tenga una minima animacion
    if(ordenarApariencia2){                                          //En caso de que otro boton ordenar este abierto y se clicke este se cerrara el otro
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
    
    document.getElementById("ordenar2").addEventListener("click",() =>{//Esto es simplemente el boton de ordenar para que tenga una minima animacion
    if(ordenarApariencia3){                                          //En caso de que otro boton ordenar este abierto y se clicke este se cerrara el otro
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
    
    document.getElementById("ordenar3").addEventListener("click",() =>{ //Esto es simplemente el boton de ordenar para que tenga una minima animacion
      if(ordenarApariencia4){                                           //En caso de que otro boton ordenar este abierto y se clicke este se cerrara el otro
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
    

    
    
   
    
    //region InicioSesion zona sensible
    let usuarioInicio = document.getElementById("usuarioInicio")
    let usuarioInicioSesionBlock =  document.getElementById("usuarioIncioSesionBlock")
    let barrita =  document.getElementById("barrita") //Esta barrita es para quitar una parte del border-top y que quede bien 
    let cerrarSesionDiv =document.getElementById("cerrarSesionDiv")
    var storedUsername = sessionStorage.getItem('username');                         //si no esta registrado y si si lo esta podra cerrar sesion

    document.getElementById("usuarioGrande").addEventListener('mouseenter', function() { //En caso de que el raton se quite del simbolo se abrira el div donde puede iniciar sesion 
     
    
      if(storedUsername){
        usuarioInicio.style.border="2px solid black"
        usuarioInicio.style.borderBottom="none"
        cerrarSesionDiv.style.display="block"

    }else{
      usuarioInicio.style.border="2px solid black"
      usuarioInicio.style.borderBottom="none"
      usuarioInicioSesionBlock.style.display="block"
    }
    
    
    
    });
    
    document.getElementById("usuarioGrande").addEventListener('mouseleave', function() { //En caso de que el raton se quite del simbolo se cerrara el div
      var storedUsername = sessionStorage.getItem('username');

      if(storedUsername){
        usuarioInicio.style.border="0px"
        cerrarSesionDiv.style.display="none"
      }else{
        usuarioInicio.style.border="0px"
        usuarioInicioSesionBlock.style.display="none"
      }
     
    
    
    });

    document.getElementById("usuarioIncioSesionBlock").addEventListener('mouseenter', function() { //En caso de que el raton se quite del simbolo se abrira el div donde puede iniciar sesion 
      var storedUsername = sessionStorage.getItem('username');                         //si no esta registrado y si si lo esta podra cerrar sesion
    
   
     if(storedUsername){
       usuarioInicio.style.border="2px solid black"
       usuarioInicio.style.borderBottom="none"
       cerrarSesionDiv.style.display="block"

   }else{
     usuarioInicio.style.border="2px solid black"
     usuarioInicio.style.borderBottom="none"
     usuarioInicioSesionBlock.style.display="block"

   }
   
   
   
   });
   
   document.getElementById("usuarioIncioSesionBlock").addEventListener('mouseleave', function() { //En caso de que el raton se quite del simbolo se cerrara el div
     var storedUsername = sessionStorage.getItem('username');

     if(storedUsername){
       usuarioInicio.style.border="0px"
       cerrarSesionDiv.style.display="none"
     }else{
       usuarioInicio.style.border="0px"
       usuarioInicioSesionBlock.style.display="none"
     }
    
   
   
   });
    
   document.getElementById("barrita").addEventListener('mouseenter', function() { //Esto es para la barrita que separa el div de arriba con el de abajo porque como esta superpuesta con z-index al pasar no detecta que esta en el otro div por lo que con esto consigo que se mantenga mostrando los divs
    var storedUsername = sessionStorage.getItem('username');                     
  
 
   if(storedUsername){
     usuarioInicio.style.border="2px solid black"
     usuarioInicio.style.borderBottom="none"
     cerrarSesionDiv.style.display="block"

 }else{
   usuarioInicio.style.border="2px solid black"
   usuarioInicio.style.borderBottom="none"
   usuarioInicioSesionBlock.style.display="block"

 }
 
 
 
 });
 
 
    
    //region Buscar
    let buscadorInput =document.getElementById("buscador");
    
    document.getElementById("buscador1").addEventListener("click",function(){

      console.log("qda asi")
      productos.forEach(element => {
        let nombre=element.nombre;
        console.log(nombre)

        if(nombre.toLowerCase().includes(buscadorInput.value.toLowerCase())){
          element.mostrar=true;

        }
        else{
          element.mostrar = false;

        }
      });
      actualizarProductos();

      productos.forEach(element => {
       

        if(element.mostrar===true){
          console.log("he mostrado"+element.nombre)
        }
        
      });
    });
    
    //Grid Padre
    var containerGrid=document.getElementById("container-grid")//Este es el grid padre
    
    //region windowLoader
    let divNombreUsuario = document.getElementById("divNombreUsuario") //Este es el div del nombre del usuario

    window.addEventListener('load', function() {
      var storedUsername = sessionStorage.getItem('username'); //Se obtiene el usuario en caso de que haya

      actualizarProductos()
      if(storedUsername){ //Si hay usuario almacenado se muestra su nombre al lado del simbolo de usuario
        let nombreInteriorUsuario=document.getElementById("nombreInteriorUsuario")
        nombreInteriorUsuario.textContent=storedUsername;
        divNombreUsuario.style.display="block"

      }else{ //En caso de que no haya usuario no se muestra nada
        divNombreUsuario.style.display="none"
      }
    
    });
    
    //region BorrarTodo 
    //Con esto borro todos los hijos del containerGrid asi puedo volverlos 
    //a añadir en caso de que los ordene 
    let estaCarro = true;
    document.getElementById("carritoCompra").addEventListener("click",function(){ //Con este evento si se clicka en el carro este se mostrará y si se vuelve a clickar se ocultará
      let carro = document.getElementById("cesta")
      let carro1 = document.getElementById("cesta1")


      if(estaCarro){
        carro.style.display="block"
        carro1.style.display="block"

      }else{
        carro.style.display="none"
        carro1.style.display="none"

      }

      estaCarro=!estaCarro;
    });

    function borrar(){ //Se borran todos los libros disponibles para así poder actualizarlos mejor
      while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
    }
    }

        //region ListaCompras

    let listaCompras = [];  //Este es el array de la lista de compras del usuario

    let interiorScroll = document.getElementById("interiorScroll")
    let textoInterior = document.getElementById("textoInterior")
    textoInterior.value=0;

    function actualizarCesta(){ //Con esto actualizo la cesta
      let valorTodosProductos = 0;
      let valor = 0;
      while(interiorScroll.firstChild){  //Con esto quito todas las compras que se hayan hecho para actualizarlas y evitar que se dupliquen
        interiorScroll.removeChild(interiorScroll.firstChild)
      }

      let listaProductosIndividualesComprados=[] //Este es el array de productos individuales es decir si hay 3 manzanas y 2 peras en este array solo habra 1 manzana y 1 pera ya que coge uno de cada tipo

      listaCompras.forEach(elemento=>{ //Con esto veo todos los libros que se han comprado pero sin duplicados es decir si hay 2 libros de "La fantasia" y 1 de "El patio" se mete en el array 1 de cada uno para luego poderlos contar
        if(!listaProductosIndividualesComprados.includes(elemento)){ //Con esta logica compruebo que si el elemento que seria del array ListaCompras no esta en el array listaProductosIndividualesComprados se le incluye
          listaProductosIndividualesComprados.push(elemento);
        }
      });

      listaProductosIndividualesComprados.forEach(productoIndividual=>{ //Se recorre uno a uno comprobando cuantos hay de cada
       //Se refrescan las variables en cada bucle
        let contador = 0;
        let nAutor = "";
        let nLibro = "";
        let nPrecio = "";
        let nImagen = "";

        listaCompras.forEach(elemento=>{ //Con esto consigo saber cuantos productos de cada tipo ha comprado el cliente
          if(elemento===productoIndividual){
            contador++;

          }

        });

        
        valor+=contador //Sumo la cantidad de libros de cada tipo a la variable valor
        

       

        productos.forEach(producto =>{ //En caso de que productoNombre sea igual que productoIndividual se cogen sus instancias del constructor

          if(producto.nombre===productoIndividual){ //Asigno los valores del libro en cuestion a estas variables
            nAutor=producto.autor
            nLibro=producto.nombre
            nPrecio=producto.precio
            nImagen=producto.foto
          }
        
        });

        //Creo todos los productos que se hayan añadido al carrito

        let comprasDiv = document.createElement("div")
        comprasDiv.classList.add("comprasDiv")

        let divFoto = document.createElement("div")
        divFoto.classList.add("divFoto")

        let fotoBorde = document.createElement("img")
        fotoBorde.classList.add("fotoBorde")
        fotoBorde.src=nImagen
        fotoBorde.style.width="70px"
        fotoBorde.style.height="80px"

        let nombreLibro = document.createElement("div")
        nombreLibro.classList.add("nombreLibro")
        nombreLibro.textContent=nLibro

        let nombreAutor = document.createElement("div")
        nombreAutor.classList.add("nombreAutor")
        nombreAutor.textContent=nAutor

        let unidades = document.createElement("div")
        unidades.classList.add("unidades")

        let unidadInput = document.createElement("input")
        unidadInput.classList.add("unidadInput")
        unidadInput.value=contador

                  unidadInput.addEventListener("input", function() { //Con esto actualizo la cantidad de libros que quiero a tiempo real en caso de 0 se borra el libro ya que se quita del array
              
                    unidadInput.value=unidadInput.value //Esto coge el input nuevo y lo refresca

                  

                    listaCompras=listaCompras.filter(function(elemento){ //Con esto borro todos los elementos que sean igual a nLibro 
                      return elemento !== nLibro;

                    });

                    for(let i = 0; i<unidadInput.value;i++){ //Despues de borrarlos se vuelven a introducir para evitar duplicados
                      listaCompras.push(nLibro);
                    }

                    actualizarCesta(); //Se actualiza la cesta

          
                     });

        let coste = document.createElement("div")
        coste.classList.add("coste")

        let textoCoste = document.createElement("div")
        textoCoste.classList.add("textoCoste")
        textoCoste.textContent="Coste:"

        let precioCoste = document.createElement("div")
        precioCoste.classList.add("precioCoste")
        let precioFinal = contador*nPrecio
        let PrecioTotal = document.getElementById('PrecioTotal');

        precioFinal = precioFinal.toFixed(2)
        precioFinal = parseFloat(precioFinal)
        precioCoste.textContent=precioFinal
        valorTodosProductos+=precioFinal
        PrecioTotal.textContent=valorTodosProductos;
        let simboloEuro = document.createElement("div")
        simboloEuro.classList.add("simboloEuro")
        simboloEuro.textContent="€"
        let envio = document.getElementById("envio")
        let contenido = document.getElementById("contenidoEnvio")
         let envio1 = 0;
        if(valorTodosProductos<30){
          envio1=5;
        }

        if(envio1==5){
          envio.style.display="block"
          contenido.textContent=envio1+"€";
        }else{
          contenido.textContent="Gratis"
        }
        
        
        let precioFinal1 = document.getElementById("PrecioFinal");
        precioFinal1.textContent=valorTodosProductos+envio1;
        if(valorTodosProductos!=0){
          let precioFinal = document.getElementById("precioFinal")
          precioFinal.style.display="block"
        }else{
          precioFinal.style.display="none"

        }
        divFoto.appendChild(fotoBorde)

        comprasDiv.appendChild(divFoto);

        comprasDiv.appendChild(nombreLibro);
       
        comprasDiv.appendChild(nombreAutor);
       
        unidades.appendChild(unidadInput)

        comprasDiv.appendChild(unidades);
        
        coste.appendChild(textoCoste);
        coste.appendChild(precioCoste);
        coste.appendChild(simboloEuro);

        comprasDiv.appendChild(coste)

        interiorScroll.appendChild(comprasDiv)




      });
      let carritoSimbolo=document.getElementById("container-carrito-texto") //Este es el circulo rojo que esta al lado del carrito este circulo muestra el número de libros que tengas en tu carrito
      if(valor===0){ //Este circulo rojo solo se mostrara si hay algun libro
        carritoSimbolo.style.display="none"
      }else{
        carritoSimbolo.style.display="block"
        
      }
      textoInterior.textContent=valor //Se asigna al circulo rojo al lado de la cesta la cantidad de libros en la cesta
      //console.log("tengo"+textoInterior.value)


     
    }
   
    document.getElementById("botonReiniciar").addEventListener("click",function(){
      productos.forEach(element => {
        element.mostrar=true;
      });
      actualizarProductos();
      console.log("reiniciado")
    });


    document.getElementById("pagar").addEventListener("click",function(){

      if(storedUsername){
        alert("Pedido realizado con exito")
      }else{
        alert("Debe iniciar sesión para poder realizar pedidos")
      }
    

    });

    //region Funcion Actualizar
    function actualizarProductos(){ //Con esta funcion creo todos los libros que esten en el array
      borrar() //Al actualizar borro todo lo que contenga containergrid("Es el div donde almaceno todos los libros al mostrarlos") para evitar que se amontonen los datos 

      productos.forEach(elemento =>{
    if(elemento.mostrar===true){ //Depende del filtrado que se haya realizado si el elemento tiene mostrar como true se mostrara
      console.log(elemento.nombre);
      var containerGridProducto = document.createElement("div")
      containerGridProducto.classList.add("container-grid-producto")
  
      var containerGridProductoImagen = document.createElement("div")
      containerGridProductoImagen.style.marginTop="20px"
  
      var boxShadowImage = document.createElement("img")
      boxShadowImage.style.boxShadow="1px 2px 2px grey";
      boxShadowImage.style.width="170px"
      boxShadowImage.style.height="230px"
      boxShadowImage.src=elemento.foto
  
      var containerGridProductoTapa = document.createElement("div")
      containerGridProductoTapa.style.marginTop="5px"
      containerGridProductoTapa.style.textAlign="left"
      containerGridProductoTapa.style.marginLeft="60px"
      containerGridProductoTapa.style.marginRight="60px"
      containerGridProductoTapa.style.color="rgb(102, 102, 102)"
      containerGridProductoTapa.style.fontSize="14px"
      containerGridProductoTapa.textContent=elemento.tapa
  
      
      var espacioGrid = document.createElement("div")
      espacioGrid.style.height="1px"
      espacioGrid.style.width="200px"
      espacioGrid.style.backgroundColor="rgb(180, 178, 178)"
      espacioGrid.style.margin="0 auto";
      espacioGrid.style.marginTop="8px"
  
      var containerGridProductoTitulo = document.createElement("div")
      containerGridProductoTitulo.style.marginTop="5px"
      containerGridProductoTitulo.style.textAlign="left"
      containerGridProductoTitulo.style.marginLeft="60px"
      containerGridProductoTitulo.style.marginRight="60px"
      containerGridProductoTitulo.style.fontSize="18px"
      containerGridProductoTitulo.textContent=elemento.nombre
  
      
      var containerGridProductoAutor = document.createElement("div")
      containerGridProductoAutor.style.marginTop="5px"
      containerGridProductoAutor.style.textAlign="left"
      containerGridProductoAutor.style.marginLeft="60px"
      containerGridProductoAutor.style.marginRight="60px"
      containerGridProductoAutor.style.color="rgb(102, 102, 102)"
      containerGridProductoAutor.style.fontSize="13px"
      containerGridProductoAutor.style.fontStyle="italic"
      containerGridProductoAutor.textContent=elemento.autor
  
      var juntar = document.createElement("div")
      juntar.style.display="flex"
  
      var containerGridProductoPrecio=document.createElement("div")
      containerGridProductoPrecio.style.marginLeft="60px"
      containerGridProductoPrecio.style.marginTop="5px"
      containerGridProductoPrecio.style.fontSize="22px"
      containerGridProductoPrecio.style.textAlign="left"
      containerGridProductoPrecio.style.display="flex"
      containerGridProductoPrecio.style.color="(202, 48, 48)"
      containerGridProductoPrecio.textContent=elemento.precio;
  
  
      var simbolo=document.createElement("div")
      simbolo.style.marginTop="3px"
      simbolo.style.fontSize="19px"
      simbolo.style.marginLeft="5px"
      simbolo.style.color="rgb(202, 48, 48)"
      simbolo.textContent="€"
  
      var juntar1 = document.createElement("div")
      juntar1.style.display="flex"
      juntar1.style.position="absolute"
      juntar1.style.marginTop="400px"
      juntar1.style.marginLeft="214px"
  
      var circulo = document.createElement("div")
      circulo.style.backgroundColor="rgba(184, 184, 184, 0)"
      circulo.style.height="30px"
      circulo.style.width="30px"
      circulo.style.borderRadius="50%"
  
      var simbolo1 = document.createElement("div")
      simbolo1.style.backgroundColor="rgba(152, 152, 152, 0)"
      simbolo1.style.borderRadius="50%"
      simbolo1.style.height="20px"
      simbolo1.style.width="20px"
      simbolo1.style.marginTop="6.5px"
      simbolo1.style.marginLeft="4.4px"
      simbolo1.style.fontSize="17px"
      simbolo1.style.position="absolute"
  
      var iconoCarrito = document.createElement("i");
      iconoCarrito.className ="bx bx-cart";
  
      var botoncito = document.createElement("button")
     
      //region BotonComprar
      botoncito.onclick = function(){ //En caso de que se clicke el boton de compra este libro se añadirá a la cesta
        listaCompras.push(elemento.nombre) 
       
        
        actualizarCesta()
      }
      botoncito.classList.add("botoncito")
          
      juntar1.appendChild(circulo)

      circulo.appendChild(simbolo1)
  
      simbolo1.appendChild(iconoCarrito)
  
  
      juntar1.appendChild(botoncito)
  
      containerGridProducto.appendChild(juntar1)
  
  
    containerGridProductoImagen.appendChild(boxShadowImage);
  
    containerGridProducto.appendChild(containerGridProductoImagen);
    
    containerGridProducto.appendChild(containerGridProductoTapa);
    
    containerGridProducto.appendChild(espacioGrid);
  
    containerGridProducto.appendChild(containerGridProductoTitulo);
  
    containerGridProducto.appendChild(containerGridProductoAutor)
  
    containerGridProductoPrecio.appendChild(simbolo);
  
    juntar.appendChild(containerGridProductoPrecio)
  
    containerGridProducto.appendChild(juntar)
  
  
    containerGrid.appendChild(containerGridProducto);
    }
       
      
      
      
      
      });
      
    }

    //region cerrarSesion
    document.getElementById("botonCerrarSesion").addEventListener("click",function(){ //Con esto se cierra sesion
      sessionStorage.clear(); //Se limpia el sesion storage
      divNombreUsuario.textContent="";
      cerrarSesionDiv.style.display="none";
    });

    //region Array
    
    let productos = [
      {
        autor:"RUNYX",
        nombre: "EL CAZADOR",
        tipo:"Novela Romance",
        precio: 18.90,
        foto: "imgProductos/Elcazador.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
    
      },
      {
        autor:"MEGAN MAXWELL",
        nombre: "LAS GUERRERAS MAXWELL",
        tipo:"Romance",
        precio: 17.10,
        foto: "imgProductos/Las guerreras maxwell.webp",
        tapa:"Tapa dura",
        novedad:true,
        mostrar:true
    
      },
      {
        autor:"HANNAH GRACE",
        nombre: "SALTAN CHISPAS",
        tipo:"Novela Romance",
        precio: 18.90,
        foto: "imgProductos/Saltan chispas.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      } ,
      {
        autor:"ANA HUANG",
        nombre: "PECADOS 1. REY DE LA IRA.",
        tipo:"Novela",
        precio: 22.75,
        foto: "imgProductos/Pecados.jpg",
        tapa:"Tapa dura",
        novedad:true,
        mostrar:true
      } ,
      {
        autor:"TAMARA MOLINA",
        nombre: "DONDE NO PUEDAS ENCONTRARME",
        tipo:"Novela Romance",
        precio: 16.05,
        foto: "imgProductos/DONDE.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"FREIDA MCFADDEN",
        nombre: "EL SECRETO DE LA ASISTENTA",
        tipo:"Novela",
        precio: 19.85,
        foto: "imgProductos/ElSECRETO.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"JUAN GOMEZ JURADO",
        nombre: "TODO ARDE",
        tipo:"Novela",
        precio: 14.20,
        foto: "imgProductos/TODOARDE.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"CIXIN LIU",
        nombre: "EL PROBLEMA DE LOS TRES CUERPOS",
        tipo:"Novela Ciencia-Ficción",
        precio: 25.55,
        foto: "imgProductos/ELPROBLEMADE.webp",
        tapa:"Tapa dura",
        novedad:false,
        mostrar:true
      },
      {
        autor:"CIXIN LIU",
        nombre: "LA TIERRA ERRANTE",
        tipo:"Ciencia-Ficción",
        precio: 14.20,
        foto: "imgProductos/latierraerrante.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"DMITRY GLUKHOVSKY",
        nombre: "OUTPOST Nº 02",
        tipo:"Ciencia-Ficción",
        precio: 18.95,
        foto: "imgProductos/OUTPOST.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"OLAF STAPLEDON",
        nombre: "HACEDOR DE ESTRELLAS",
        tipo:"Novela Ciencia-Ficción",
        precio: 18,
        foto: "imgProductos/HACEDOR.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"XIRAN JAY ZHAO",
        nombre: "HEAVENLY TYRANT",
        tipo:"Ciencia-Ficción",
        precio: 18.52,
        foto: "imgProductos/HEAVENLY.jpg",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"FRANK HERBERT",
        nombre: "DUNE (EDICIÓN PELÍCULA)",
        tipo:"Ciencia-Ficción",
        precio: 11.35,
        foto: "imgProductos/DUNE.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"XAVIER MARTINEZ BALLESTER",
        nombre: "LOS HEREDEROS DEL MUNDO",
        tipo:"Novela Ciencia-Ficción",
        precio: 11.35,
        foto: "imgProductos/losherederos.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"KRISTIN HANNAH",
        nombre: "LAS MUJERES DE LA GUERRA",
        tipo:"Novela Romance",
        precio: 20.80,
        foto: "imgProductos/lasmujeres.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"EMILY HENRY",
        nombre: "UN LUGAR FELIZ",
        tipo:"Novela Romance",
        precio: 18.05,
        foto: "imgProductos/UNLUGAR.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"INMA RUBIALES",
        nombre: "EL ARTE DE SER NOSOTROS",
        tipo:"Novela Romance",
        precio: 17.95,
        foto: "imgProductos/ELARTE.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"ALOMA MARTINEZ",
        nombre: "EL SÍNDROME DE LA CHICA CON SUERTE",
        tipo:"Novela Romance",
        precio: 19.85,
        foto: "imgProductos/ELSINDROME.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"ALICE KELLEN",
        nombre: "EL DIA QUE DEJO DE NEVAR EN ALASKA",
        tipo:"Novela Romance",
        precio: 15.19,
        foto: "imgProductos/ELDIAQUE.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"ANA ALVAREZ",
        nombre: "UN ROMANCE PROHIBIDO",
        tipo:"Novela Romance",
        precio: 4.74,
        foto: "imgProductos/UNROMANCE.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"TOM FOWLER",
        nombre: "REDLINE",
        tipo:"Thriller",
        precio: 3.99,
        foto: "imgProductos/redline.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"MARTA MARTIN GIRON",
        nombre: "DAMA BLANCA",
        tipo:"Thriller",
        precio: 9.49,
        foto: "imgProductos/damab.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"GUILLERMO GALVAN",
        nombre: "EL CLUB DE LAS VIUDAS.",
        tipo:"Novela Thriller",
        precio: 10.44,
        foto: "imgProductos/elclubd.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"MORGAN RICE",
        nombre: "TRANSMISIÓN",
        tipo:"Thriller",
        precio: 2.84,
        foto: "imgProductos/TRANSMI.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"MARK ROY ADÁN",
        nombre: "EL ENIGMA DE ROSWELL.",
        tipo:"Thriller",
        precio: 4.99,
        foto: "imgProductos/ELENIGMADE.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"JONAS HERLIN",
        nombre: "EL GABINETE DE LAS BRUJAS DE NORDERNEY",
        tipo:"Novela Thriller",
        precio: 2.84,
        foto: "imgProductos/elgabi.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"STHEPEN KING",
        nombre: "SI TE GUSTA LA OSCURIDAD",
        tipo:"Novela Terror",
        precio: 23.65,
        foto: "imgProductos/sitegusta.webp",
        tapa:"Tapa dura",
        novedad:false,
        mostrar:true
      },
      
      {
        autor:"CHARLAINE HARRIS",
        nombre: "EL DÍA DEL JUICIO MORTAL",
        tipo:"Novela Terror",
        precio: 12.30,
        foto: "imgProductos/ELDIADEL.webp",
        tapa:"Tapa dura",
        novedad:false,
        mostrar:true
      },
      {
        autor:"VICTORIA ALVAREZ",
        nombre: "HOJAS DE DEDALERA",
        tipo:"Terror",
        precio: 18.95,
        foto: "imgProductos/HOJASDE.webp",
        tapa:"Tapa dura",
        novedad:false,
        mostrar:true
      },
      {
        autor:"ALMA KATSU",
        nombre: "THE DEEP. LAS PROFUNDIDADES",
        tipo:"Terror",
        precio: 18.95,
        foto: "imgProductos/THEDEEP.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      },
      {
        autor:"IKER UNZU",
        nombre: "ESCAPANDO DE LA MANSIÓN EMBRUJADA",
        tipo:"Terror",
        precio: 14.15,
        foto: "imgProductos/escapandode.webp",
        tapa:"Tapa blanda",
        novedad:true,
        mostrar:true
      },
      {
        autor:"GOLDY MOLDAVSKY",
        nombre: "EL CLUB DE MARY SHELLEY",
        tipo:"Terror",
        precio: 20.80,
        foto: "imgProductos/elclubde.webp",
        tapa:"Tapa blanda",
        novedad:false,
        mostrar:true
      }
    ];
    
    //region Ordenar MayorMenor
    document.getElementById("ordenarMayorMenor").addEventListener("click",() =>{
    
    productos.sort(function(a,b){
    return b.precio-a.precio;
    });
    
   
    
    console.log("mayor a menor")
    actualizarProductos()

    });
    
    //region ordenarMenorMayor
    
    document.getElementById("ordenarMenorMayor").addEventListener("click",() =>{
    
      productos.sort(function(a,b){
      return a.precio-b.precio;
      });
      
     
      
      console.log("menor a mayor")
      actualizarProductos()
    
      });
    //Novedad
    document.getElementById("novedad").addEventListener("click",() =>{
    
    
    productos.forEach(elemento =>{
    
    
      if(elemento.novedad==false){
        elemento.mostrar=false;
      }

    
        
    
     
      actualizarProductos()
    
    });
  });
    
        document.getElementById("Novela").addEventListener("click",() =>{
    
          
        
          
            
              productos.forEach(elemento =>{
                let palabraTipo=elemento.tipo.split(" ");

                let contador = 0;
                for(let i=0;i<palabraTipo.length;i++){
                  if(palabraTipo[i]===("Novela")){
                    console.log("novela")
                    contador++;
                  }
                 
                }
                if(contador!==0){
                  elemento.mostrar=true;
                }else{
                  elemento.mostrar=false;

                }
              
          
               
    
                
    
            });
          
          console.log("filtrado novela")
          actualizarProductos()
    
          });
    
          document.getElementById("Thriller").addEventListener("click",() =>{
    
          
            productos.forEach(elemento =>{
              let palabraTipo=elemento.tipo.split(" ");

              let contador = 0;
              for(let i=0;i<palabraTipo.length;i++){
                if(palabraTipo[i]===("Thriller")){
                  contador++;
                }
               
              }
              if(contador!==0){
                elemento.mostrar=true;
              }else{
                elemento.mostrar=false;

              }
            
        
             
  
              
  
          });
          
          console.log("filtrado Thriller")
          actualizarProductos()
    
          });
    
          document.getElementById("Ciencia Ficcion").addEventListener("click",() =>{
    
          
            productos.forEach(elemento =>{
              let palabraTipo=elemento.tipo.split(" ");

              let contador = 0;
              for(let i=0;i<palabraTipo.length;i++){
                if(palabraTipo[i]===("Ciencia-Ficción")){
                  contador++;
                }
               
              }
              if(contador!==0){
                elemento.mostrar=true;
              }else{
                elemento.mostrar=false;

              }
            
        
             
  
              
  
          });
          
          console.log("filtrado Ciencia Ficcion")
          actualizarProductos()
    
          });      
    
          document.getElementById("Romance").addEventListener("click",() =>{
    
          
            productos.forEach(elemento =>{
              let palabraTipo=elemento.tipo.split(" ");

              let contador = 0;
              for(let i=0;i<palabraTipo.length;i++){
                if(palabraTipo[i]===("Romance")){
                  contador++;
                }
               
              }
              if(contador!==0){
                elemento.mostrar=true;
              }else{
                elemento.mostrar=false;

              }
            
        
             
  
              
  
          });
          
          console.log("filtrado Romance")
          actualizarProductos()
    
          });      
    
    
          document.getElementById("Terror").addEventListener("click",() =>{
    
          
            productos.forEach(elemento =>{
              let palabraTipo=elemento.tipo.split(" ");

              let contador = 0;
              for(let i=0;i<palabraTipo.length;i++){
                if(palabraTipo[i]===("Terror")){
                  contador++;
                }
               
              }
              if(contador!==0){
                elemento.mostrar=true;
              }else{
                elemento.mostrar=false;

              }
            
        
             
  
              
  
          });
          
          console.log("filtrado Terror")
          actualizarProductos()
    
          });     
          
          document.getElementById("tapa dura").addEventListener("click",() =>{
    
          
           
            
              productos.forEach(elemento =>{
              
    
               
                  if(elemento.tapa===("Tapa dura")){
elemento.mostrar=true;
                  }else{
elemento.mostrar=false;    
                  }
                 
                
              });
          
               
    
                
    
            
          
          console.log("filtrado tapa dura")
          actualizarProductos()
    
          });      
          document.getElementById("tapa blanda").addEventListener("click",() =>{
    
          
            productos.forEach(elemento =>{
              
    
               
              if(elemento.tapa===("Tapa blanda")){
elemento.mostrar=true;
              }else{
elemento.mostrar=false;    
              }
             
            
          });
      
           
          
          console.log("filtrado tapa blanda")
          actualizarProductos()
    
          });   
    
          document.getElementById("filtrarPrecio").addEventListener("click",() =>{
    
          
          
            let precioMinimo=document.getElementById("preciominimo").value
            let precioMaximo=document.getElementById("preciomaximo").value
    
            
              productos.forEach(elemento =>{
              
              
    
               
                  if(elemento.precio>=precioMinimo&&elemento.precio<=precioMaximo){
                   elemento.mostrar=true
                  }else{
                    elemento.mostrar=false
    
                  }
                 
                
              });
          
               
    
                
    
         
           
          actualizarProductos()
    
          });   
    
    
document.getElementById("inicioSesionReal").addEventListener('click', function() {
            // Cambiar la ubicación de la página a otro HTML
            window.location.href = "inicioSesion/inicioSesion.html";
        });
}else{

}
let divOjo = document.getElementById("mostrar")
let perderContra = document.getElementById("perderContra")

 if(perderContra){
//region Inicio Sesion
let divOjoApariencia = false;
var spanElementNoVer = document.createElement("span");
spanElementNoVer.className = "material-symbols-outlined";
spanElementNoVer.textContent = "visibility_off";

var spanElementVer = document.createElement("span");
spanElementVer.className = "material-symbols-outlined";
spanElementVer.textContent = "visibility";

let password = document.getElementById("password")


document.addEventListener("DOMContentLoaded", function() { //Al refrescarse la pagina primero esta puesto para que tu contraseña este oculta
    divOjo.appendChild(spanElementNoVer);

   


    });

    document.getElementById("mostrar").addEventListener("click",function(){ //Esto es para ver la contraseña que estas escribiendo
     while (divOjo.firstChild) {
      divOjo.removeChild(divOjo.firstChild);
  }
      if(divOjoApariencia){
        divOjo.appendChild(spanElementNoVer);
        password.type="password"

      }else{
        divOjo.appendChild(spanElementVer);
        password.type="text"

      }
      divOjoApariencia=!divOjoApariencia;

    });

    document.getElementById("botoncito").addEventListener("click",function(){
      let valido = true; //Sera true hasta que se falle en algun apartado

      let usuarioIDValue = document.getElementById("usuarioID").value; //Se necesita el .value para poder hacer un .trim
      let usuarioID = document.getElementById("usuarioID");

      let passwordValue = document.getElementById("password").value;
      let password = document.getElementById("password");

      let usuarioInvalido = document.getElementById("divErrorUsuario")
      let contraInvalida = document.getElementById("divErrorContraseña")

     
      if(usuarioIDValue.trim()===""){
        usuarioInvalido.style.display="block";
        valido=false;
        console.log("error1")
        
      }

     if(passwordValue.trim()===""){
      contraInvalida.style.display="block";
      valido=false;
      console.log("error2")

     }

     if(valido===false){
      usuarioID.value=""
      password.value=""


      alert("Vuelva a introducir los datos")

     }else{
      alert("Usted ha iniciado sesion como: "+usuarioID.value)
    
      sessionStorage.setItem('username', usuarioID.value);
      window.location.href = "../index.html";

     }

    });
}else{

}
var continueCheckbox = document.getElementById("continueCheckbox") 
if(continueCheckbox){ //Este es el apartado de registrarse
  let usuarioCorreo = document.getElementById("usuarioCorreo")
  let divOjo1 = document.getElementById("mostrar1")
    let divOjoApariencia = false; //Este es para la apariencia de la primera contraseña
    let divOjoApariencia1 = false; //Este es para la apariencia de la segunda contraseña
  
    var spanElementNoVer = document.createElement("span");
    spanElementNoVer.className = "material-symbols-outlined";
    spanElementNoVer.textContent = "visibility_off";
    var spanElementNoVer1 = document.createElement("span");
    spanElementNoVer1.className = "material-symbols-outlined";
    spanElementNoVer1.textContent = "visibility_off";
    
    var spanElementVer = document.createElement("span");
    spanElementVer.className = "material-symbols-outlined";
    spanElementVer.textContent = "visibility";
    var spanElementVer1 = document.createElement("span");
    spanElementVer1.className = "material-symbols-outlined";
    spanElementVer1.textContent = "visibility";
    
    let password = document.getElementById("password")
    let passwordVerificar = document.getElementById("passwordVerificar")
  
    
    document.addEventListener("DOMContentLoaded", function() { //Se ocultan las contraseñas por defecto
        divOjo.appendChild(spanElementNoVer);
        divOjo1.appendChild(spanElementNoVer1);
  
       
    
    
        });
    
        document.getElementById("mostrar").addEventListener("click",function(){//Cada vez que se clicke en el boton para ver la contraseña se borra todos los hijos para que solo se vea una imagen
         while (divOjo.firstChild) {
          divOjo.removeChild(divOjo.firstChild);
      }
     
          if(divOjoApariencia){
            divOjo.appendChild(spanElementNoVer);
            password.type="password"
    
          }else{
            divOjo.appendChild(spanElementVer);
            password.type="text"
    
          }
          divOjoApariencia=!divOjoApariencia;
    
        });
  
        document.getElementById("mostrar1").addEventListener("click",function(){//Cada vez que se clicke en el boton para ver la contraseña se borra todos los hijos para que solo se vea una imagen
          while (divOjo1.firstChild) {
           divOjo1.removeChild(divOjo1.firstChild);
       }
           if(divOjoApariencia1){
             divOjo1.appendChild(spanElementNoVer1);
             password.type="password"
     
           }else{
             divOjo1.appendChild(spanElementVer1);
             passwordVerificar.type="text"
     
           }
           divOjoApariencia1=!divOjoApariencia1;
     
         });
         
        document.getElementById("botoncito").addEventListener("click",function(){//Se comprueba todos los inputs que cumplan las conficiones
          let valido = true;
          let usuarioIDValue = document.getElementById("usuarioID").value;
          let usuarioID = document.getElementById("usuarioID");
    
          let passwordValue = document.getElementById("password").value;
          let passwordValue1 = document.getElementById("passwordVerificar").value;

          let password = document.getElementById("password");
          let passwordVerificar = document.getElementById("passwordVerificar");

          let correoInvalido = document.getElementById("divErrorCorreo")
          let usuarioInvalido = document.getElementById("divErrorUsuario")
          let contraInvalida = document.getElementById("divErrorContraseña")
          let contraInvalida1 = document.getElementById("divErrorContraseña1")

          let correoVerificarValue = document.getElementById("usuarioCorreo").value
          let correoVerificar = document.getElementById("usuarioCorreo")

          if(correoVerificarValue.trim()===""){
            correoInvalido.style.display="block";
            valido=false
          }

          if(!correoVerificarValue.includes("@")){
            correoInvalido.style.display="block";
            valido=false
          }
          
          if(usuarioIDValue.trim()===""){
            usuarioInvalido.style.display="block";
            valido=false;
            
          }
    
         if(passwordValue.trim()===""){
          contraInvalida.style.display="block";
          valido=false;
    
         }

         if(passwordValue1!==passwordValue){
          contraInvalida1.style.display="block";
          valido=false;
    
         }
    
         if(valido===false){
          usuarioID.value=""
                password.value=""
                correoVerificar.value=""
    
          alert("Vuelva a introducir los datos")
          passwordVerificar.value=""
    z
         }else{
          
          if(checkeada===true){
            alert("Usted ha iniciado sesion como: "+usuarioID.value)
            sessionStorage.setItem('username', usuarioID.value);
            window.location.href = "../index.html";



          }else{
            alert("*Usted ha creado la cuenta*")
            window.location.href = "../index.html";

          }
         }
    
        });

       
        var checkedBox = document.getElementById("continueCheckbox");
        let checkeada = false;
        checkedBox.addEventListener("change", function() { // Con esto consigues que si se registra y puede mantener la sesion iniciada
          if (checkedBox.checked) { 
            checkeada=true;
            console.log("El checkbox está marcado");

        } else {
            console.log("El checkbox no está marcado");
            checkeada=false;


        }
        });
  
  
}





