// lista 1 div
var divLista1 = document.getElementById('divlista1');
// lista-change
var divListaChange = document.getElementById('div-change');
// boton guardar
var botonGuardar = document.getElementById('boton-guardar');
// input
var input = document.getElementById('input');
// main
var main = document.body.children[2];

console.log(main);

divLista1.addEventListener('click', function(event) {
  divLista1.classList.add('display-div');
  divListaChange.classList.add('visible')
});

botonGuardar.addEventListener('click', function(event) {
  // Para que desaparezcan elementos y se muevan
  divLista1.classList.add('ocultar');
  divListaChange.classList.toggle('visible');
  divListaChange.classList.add('movimiento');
  // div contenedor
  var crearDiv = document.createElement('div');
  // div contenedor de la nueva tarea
  var nuevaTarea = document.createElement('div');
  // obtener lo escrito en el input
  var tarea = document.createElement('p');
  // barra de abajo
  var nuevaTarjeta = document.createElement('p');

  //ahora la funcion en sí
  if (input.value) {

  // para añadir nueva tarjeta
  nuevaTarjeta.textContent = 'Añadir tarjeta...';
  nuevaTarjeta.classList.add('anchor-decoration');
  nuevaTarjeta.classList.add('agregar-tarjeta');
  nuevaTarjeta.classList.add('agregar-tarjeta');
  //agregamos la tarea
  tarea.textContent = input.value;
  tarea.classList.add('tarea');
  //ponemos los 2 hijos al div
  crearDiv.appendChild(tarea);
  crearDiv.appendChild(nuevaTarjeta);
  crearDiv.classList.add('div-tarea');
  //agregamos el div 
  main.appendChild(crearDiv);
  input.value = ' ';  
  }
});

