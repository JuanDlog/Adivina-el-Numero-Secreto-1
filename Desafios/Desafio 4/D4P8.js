// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt(`Escribe cualquier numero`);

if (numero > 0) {
    alert(`Numero POSITIVO`);
} else if (numero < 0){
    alert(`Numero NEGATIVO`);
} else {
    alert(`NUMERO NEUTRO 0`);
}