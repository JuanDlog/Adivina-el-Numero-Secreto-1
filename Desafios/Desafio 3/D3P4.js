let contador = 0;
let numeroUsuario = prompt(`Coloca un numero para contar`);

if (numeroUsuario < 0) {
    while (contador >= numeroUsuario) {
        console.log(`#${contador}`);
        contador--;
    }
} else { 
    while (contador <= numeroUsuario) {
        console.log(`#${contador}`);
        contador++;
    }
}