let contador = 0;
let numeroUsuario = prompt("Coloca un numero.");

if (numeroUsuario < 0) {  //Validamos sin el numero el negativo
    while (contador >= numeroUsuario) {
        alert(`#${contador}`);
        contador--;
    }
} else {
    while (contador <= numeroUsuario) {
        alert(`#${contador}`);
        contador++;
    }
}