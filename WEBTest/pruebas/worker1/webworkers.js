var worker, cajadatos;

function iniciar() {
	cajadatos = document.getElementById("cajadatos");
	var boton = document.getElementById("boton");
	boton.addEventListener("click", enviar);
	worker = new Worker("worker.js");
	worker.addEventListener("message", recibido);
}
function enviar() {
	var nombre = document.getElementById("nombre").value;
	worker.postMessage(nombre);
}
function recibido(evento) {
	cajadatos.innerHTML = evento.data;
}
window.addEventListener("load", iniciar);