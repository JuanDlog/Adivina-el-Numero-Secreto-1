//Variables
let maximosIntentos = 10;
let numeroLimite = parseInt(prompt(`Bienvenido al JUEGO de ADIVINANZA, tienes ${maximosIntentos} intentos para adivinar y para empezar el juego elige hasta que numero quieres adivinar:`));
let numeroSecreto = Math.floor(Math.random()*numeroLimite)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Indicame un número entre 1 y ${numeroLimite} por favor:`));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
       
        document.querySelector('h1').innerHTML = 'Correcto!';
        document.querySelector('h2').innerHTML = 'Descubriste el número secreto!';

        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor.');
        } else {
            alert('El numero secreto es mayor.');
        }
        // Incrementamos el contador cuando no acierta
        intentos++;
        //palabraVeces = 'veces';

        if (intentos > maximosIntentos){
            alert(`Llegastes al numero maximos de ${maximosIntentos} intentos.`);
            break;
        }

    }
}
