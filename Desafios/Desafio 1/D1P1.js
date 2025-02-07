alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = 'Lua';
let Edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("Cual es tu nombre?");
Edad = prompt("Cual es tu edad?");

if (Edad >= 18){
    alert('Puedes obtener tu licencia de conducir');
}
