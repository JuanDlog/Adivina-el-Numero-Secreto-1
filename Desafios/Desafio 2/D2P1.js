let diaSemana = prompt("Que dia de la semana es?");
var Semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
var finDeSemana = ["Sabado", "Domingo"];


if (finDeSemana.includes(diaSemana)){
    alert("¡Buen fin de semana!");
} else if (Semana.includes(diaSemana)) {
    alert("¡Buena semana!");
} else {
    alert("Error");
}