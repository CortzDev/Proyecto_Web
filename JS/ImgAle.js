var imagenes = [
    'IMG/Vest1.jpg',
    'IMG/Vest2.png',
    'IMG/Vest3.jpg',
    'IMG/Vest4.png',
    'IMG/Vest5.png',
    'IMG/Vest6.png'

];

function cargarMostrarImagenAleatoria() {
    var indice = Math.floor(Math.random() * imagenes.length);
    var imagen = document.createElement("img");
    imagen.src = imagenes[indice];
    document.getElementById("imagen").appendChild(imagen);
    imagenes.splice(indice, 1);
}

window.onload = function() {
    for (var i = 0; i < 3; i++) {
        cargarMostrarImagenAleatoria();
    }
};