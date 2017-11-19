// lista 1 div
var divLista1 = document.getElementById('divlista1');
// lista-change
var divListaChange = document.getElementById('div-change');
// boton guardar
var botonGuardar = document.getElementById('boton-guardar');
// input
var input = document.getElementById('input');
// ul
var listaTareas = document.getElementById('lista-tareas')

console.log(listaTareas);

divLista1.addEventListener('click', function(event) {
  divLista1.classList.add('display-div');
  divListaChange.classList.add('visible')
});

botonGuardar.addEventListener('click', function(event) {
  divListaChange.classList.add('movimiento');
  listaTareas.classList.add('visible');
  
  if (input.value) { 
    var li = document.createElement('li');
    var tarea = document.createElement('p'); 
    tarea.textContent = input.value;
    tarea.classList.add('li'); 
    li.appendChild(tarea);
    listaTareas.appendChild(tarea);
    input.value = ' ';  
  }
});

