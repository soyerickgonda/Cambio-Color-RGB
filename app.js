// MANIPULACION DEL DOM
//titulo
const titulo = document.getElementById('title');
const tituloEnMinuscula = titulo.innerHTML ;
const tituloAmayuscula = tituloEnMinuscula.toUpperCase();
titulo.innerHTML = tituloAmayuscula; //CAMBIA EL COLOR DE FONDO

//inputs
const inputRojo = document.getElementById("rojo"); //input#rojo
const inputVerde = document.getElementById("verde"); //input#verde
const inputAzul = document.getElementById("azul"); //input#azul

const textoRojo = document.getElementById("texto-rojo"); //p#texto-rojo
const textoVerde = document.getElementById("texto-verde"); //p#texto-verde
const textoAzul = document.getElementById("texto-azul"); //p#texto-azul

//Obtenemos los valores actuales de los inputs y lo almacenamos dentro de cada variable con scope global
let rojo = inputRojo.value;   //23
let verde = inputVerde.value; //41
let azul = inputAzul.value;   //56

textoRojo.innerHTML = rojo;
textoVerde.innerHTML = verde;
textoAzul.innerHTML = azul;

//actualizar el texto y color de fondo
function actualizarFondo(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`; //esta es la sintaxis para crear el color RGB
  document.body.style.backgroundColor = colorRGB;  // accedemos al body del html y actualizamos el color de fondo del body
}
// actualizarFondo(rojo, verde, azul);

//escuchamos el evento change para cada input y actualizamos el color de fondo
//e.target hace referencia al elemento de la web que causo el evento 'change' (en este caso es el input)
inputRojo.addEventListener('change', function (e){
    rojo = e.target.value;
    textoRojo.innerHTML = rojo;
    actualizarFondo(rojo, verde, azul)
});

inputVerde.addEventListener('change', function (){
    verde = inputVerde.value;
    textoVerde.innerHTML = verde;
    actualizarFondo(rojo, verde, azul)
});

inputAzul.addEventListener('change', function (){
    azul = inputAzul.value;
    textoAzul.innerHTML = azul;
    actualizarFondo(rojo, verde, azul)
});

//Nota: otra manera de usar el objeto evento 'e' seria usar directamente la variable global ()