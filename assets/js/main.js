var cerrar = document.getElementsByClassName("close");

for(var i = 0; i<cerrar.length; i++){
 cerrar[i].addEventListener("click",cerrarImagen)
}

function cerrarImagen(){
 var div= this.parentElement;
 div.style.display = "none";
}

var btnRestaurar = document.getElementById("btnRestaurar");
btnRestaurar.addEventListener("click", restaurarImagenes);

function restaurarImagenes(){
 for(var i = 0; i<cerrar.length; i++){
   cerrar[i].parentElement.style.display = "inline-block";
 }

 //para mostrar y quitar parrafos
}
var textoIzq = document.getElementById("izq");
var textoDer = document.getElementById("der");
//Función que verifica los links
var btn1=document.getElementById("boton1");
var btn2=document.getElementById("boton2");
    btn1.addEventListener("click",ocultarDer);
    btn1.addEventListener("dblclick",mostrarDer);
    btn2.addEventListener("click",ocultarIzq);
    btn2.addEventListener("dblclick",mostrarIzq);


// Función para ocultar elementos
function ocultarDer() {
   //textoIzq.style.visibility = "hidden";
   textoDer.style.visibility = "hidden";
}
function ocultarIzq() {
   textoIzq.style.visibility = "hidden";
   //textoDer.style.visibility = "hidden";
}

// Función para mostrar el texto
function mostrarDer() {
   textoDer.style.visibility = "visible"
 }
 function mostrarIzq() {
   textoIzq.style.visibility = "visible";

}


/*function origen(){                 //modificar el html con onclick="origen()"  onclick="extincion()"para cada uno de los botones
  var textoIzquierda = document.getElementById("textoIzq");
  if (textoIzquierda.style.display == "none") {
    textoIzquierda.style.display = "inline-block"
  } else {
      textoIzquierda.style.display = "none"
  }
}

function extincion(){
  var textoDerecha = document.getElementById("textoDer");
  if (textoDerecha.style.display == "none") {
    textoDerecha.style.display = "inline-block"
  } else {
      textoDerecha.style.display = "none"
  }
}
*/
