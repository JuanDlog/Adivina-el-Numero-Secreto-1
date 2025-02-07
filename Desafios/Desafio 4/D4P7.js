//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edadUsuario = prompt(`Cual es tu edad?`);

if (edadUsuario < 18){
    console.log(`El usuario tiene ${edadUsuario} y es MENOR de Edad`);

} else {
    console.log(`El usuario tiene ${edadUsuario} y es MAYOR de edad`);
}