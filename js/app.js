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

var pLista = document.getElementById('nombre-lista');

var divTarea = document.getElementById('div-tarea');

var addTarjeta = document.getElementById('add-tarjeta');

var textTarea = document.getElementById('text-tarea');

var botonAnadir = document.getElementById('boton-anadir');

var equis = document.getElementById('equis');


divLista1.addEventListener('click', function(event) {
  divLista1.classList.add('display-div');
  divListaChange.classList.add('visible');
});

botonGuardar.addEventListener('click', function(event) {  
  // Para que desaparezcan elementos y se muevan
 
  divLista1.classList.add('ocultar');
  divListaChange.classList.toggle('visible');
  divListaChange.classList.add('movimiento');

  
  divTarea.classList.add('visible-div-tarea'); 
  
  pLista.textContent = input.value;
  input.value = ' '; 
});

addTarjeta.addEventListener('click', function(event) {
  // hacer visible text tarea
  textTarea.classList.add('visible-div-tarea');
  // hacer visible boton añadir y equis
  botonAnadir.classList.add('visible-dos');
  equis.classList.add('visible-dos');
  addTarjeta.classList.add('ocultar');
});

botonAnadir.addEventListener('click', function(event) {
  var pNuevaTarjeta = document.createElement('p');

  var areaValue = document.createTextNode(textTarea.value);


  pNuevaTarjeta.appendChild(areaValue);
  pNuevaTarjeta.classList.add('tarea-agregada');
  divTarea.insertBefore(pNuevaTarjeta, textTarea);

  textTarea.value = ' ';
});

 
