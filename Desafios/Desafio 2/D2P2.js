let numeroUsuario = prompt("Ingresa un Numero");

if (0 < numeroUsuario){
    alert("ESTE NUMERO ES POSITIVO");
} else if (0 > numeroUsuario){
    alert("ESTE NUMERO ES NEGATIVO");
} else if (0 == numeroUsuario){
    alert('ESTE NUMERO ES NEUTRO, 0');
} else {
    alert("ERROR");
}