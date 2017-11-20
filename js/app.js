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

divLista1.addEventListener('click', function(event) {
  divLista1.classList.add('display-div');
  divListaChange.classList.add('visible')
});

botonGuardar.addEventListener('click', function(event) {  
  // Para que desaparezcan elementos y se muevan
 
  divLista1.classList.add('ocultar');
  divListaChange.classList.toggle('visible');
  divListaChange.classList.add('movimiento');

  var divTarea = document.getElementById('div-tarea');
  divTarea.classList.add('visible-div-tarea'); 
  var pLista = document.getElementById('nombre-lista');
  pLista.textContent = input.value;
  input.value = ' '; 
});

var addTarjeta = document.getElementById('add-tarjeta');
var textTarea = document.getElementById('text-tarea');
var botonAnadir = document.getElementById('boton-anadir');
var equis = document.getElementById('equis');

addTarjeta.addEventListener('click', function(event) {
  // hacer visible text tarea
  textTarea.classList.add('visible-div-tarea');
  // hacer visible boton añadir y equis
  botonAnadir.classList.add('visible-dos');
  equis.classList.add('visible-dos');
});


 
  /* // div contenedor
  var crearDiv = document.createElement('div');
  // div contenedor de la nueva tarea
  var nuevaTarea = document.createElement('div');
  // obtener lo escrito en el input
  var tarea = document.createElement('p');
  // barra de abajo
  var nuevaTarjeta = document.createElement('p');
  // div de nueva tarjeta
  var divNuevaTarjeta = document.createElement('div');
  // ahora la funcion en sí
  if (input.value) {

  // para añadir nueva tarjeta
    nuevaTarjeta.textContent = 'Añadir tarjeta...';
    nuevaTarjeta.classList.add('anchor-decoration');
    nuevaTarjeta.classList.add('agregar-tarjeta');
    nuevaTarjeta.classList.add('agregar-tarjeta');
    nuevaTarea.setAttribute('id', 'nuevaTarjeta');
    // agregamos la tarea
    tarea.textContent = input.value;
    tarea.classList.add('tarea');
  
    // ponemos los 2 hijos al div
    crearDiv.appendChild(tarea);
    crearDiv.appendChild(nuevaTarjeta);
    crearDiv.classList.add('div-tarea');
    
    // agregamos el div 
    main.appendChild(crearDiv);
    input.value = ' ';  
  }
});*/
