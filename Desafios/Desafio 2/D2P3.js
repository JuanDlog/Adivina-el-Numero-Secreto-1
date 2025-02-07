let puntuacion = prompt("Escribe la puntuacion sacada en el Juego");

if (100 <= puntuacion){
    alert(`Has sacado ${puntuacion} puntos, ¡Felicidades, has ganado! `);
} else if (100 > puntuacion){
    alert(`Has sacado ${puntuacion} puntos, Intentalo nuevamente para ganar.`);
} else {
    alert('ERROR');
}