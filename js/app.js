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
  divLista1.classList.add('ocultar');
  divListaChange.classList.toggle('visible');
  divListaChange.classList.add('movimiento');
  listaTareas.classList.add('visible');
  
  if (input.value) { 
    var li = document.createElement('li');
    var atributo = document.createAttribute('href');
    var divLi = document.createElement('div');
    var divAgregar = document.createElement('div');
    var tarea = document.createElement('p'); 
    var anchor = document.createElement('p');
    
    anchor.textContent = 'Añadir tarjeta...';
    anchor.classList.add('anchor-decoration')
    divAgregar.appendChild(anchor);
    divAgregar.classList.add('agregar-tarjeta');
    divAgregar.classList.add('agregar-tarjeta:hover');
    divLi.appendChild(divAgregar);
    divLi.appendChild(tarea);
    divLi.classList.add('div-tarea');
    listaTareas.appendChild(divLi);

    tarea.textContent = input.value;
    
    li.appendChild(tarea);
    listaTareas.appendChild(tarea);
    input.value = ' ';  
  }
});

/*<li>
                <div class="div-tarea">

                    <p>Hola</p>
                    <div class="agregar-tarjeta">
                        <a class="a" href="#">Añadir una tarjeta...</a>   
                    </div>
                    
                </div>
            </li> */