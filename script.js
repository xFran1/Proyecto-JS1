var select = document.getElementById("miSelect");

// Selecciona el elemento div donde se mostrará el resultado
var resultado = document.getElementById("resultado");

// Agrega un event listener al select que se activa cuando cambia su valor
select.addEventListener("change", function() {
  // Actualiza el contenido del div con el valor seleccionado
  resultado.textContent = "Seleccionaste: " + this.value;
});