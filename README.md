
---

# Adivina el Número Secreto 1

Este es el primer proyecto desarrollado en el curso "Lógica de programación: sumérgete en la programación con JavaScript", como parte del programa Alura ONE. En este repositorio se encuentran los archivos del proyecto, además de los desafíos propuestos en las clases.

---

## Descripción del proyecto

"Adivina el Número Secreto" es un juego interactivo donde el jugador debe adivinar un número generado aleatoriamente dentro de un rango personalizado. El juego proporciona pistas indicando si el número ingresado es mayor o menor que el número secreto. El jugador tiene un límite de 10 intentos para adivinar correctamente.

Puedes acceder y jugar el juego directamente desde la web en el siguiente enlace:

[**Adivina el Número Secreto 1 - Jugar ahora**](https://juandlog.github.io/Adivina-el-Numero-Secreto-1/)


## Instalación Local

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

```bash
git clone https://github.com/JuanDlog/Adivina-el-Numero-Secreto-1.git
cd Adivina-Numero-Secreto-1
```

Luego, simplemente abre el archivo `index.html` en un navegador para iniciar el juego.

## Cómo jugar

1. **Iniciar el juego**: Al comenzar, el jugador selecciona el límite superior del número secreto (por ejemplo, entre 1 y 100).
2. **Adivinar el número**: El jugador introduce números y recibe pistas en base a si el número ingresado es mayor o menor que el número secreto.
3. **Victoria**: Si el jugador adivina correctamente, aparecerá el mensaje "¡Correcto! Descubriste el número secreto" en pantalla.
4. **Derrota**: Si se alcanzan los 10 intentos sin adivinar el número secreto, el juego finalizará con un mensaje indicando que se ha superado el límite de intentos.

## Características adicionales

- **Personalización del rango**: El jugador puede establecer el límite superior del número a adivinar al inicio del juego.
- **Contador de intentos**: El juego cuenta con un límite de 10 intentos para adivinar el número.
- **Pistas visuales y de texto**: Se muestran mensajes indicando si el número ingresado es mayor o menor que el número secreto, mejorando la jugabilidad.
- **Mensajes dinámicos**: Se ajusta el texto "vez" o "veces" en función de los intentos que lleva el jugador.

## Estructura del proyecto

- `app.js`: Contiene la lógica principal del juego, incluyendo la generación del número secreto, la validación de los intentos, y la visualización de los mensajes en la interfaz.
- `index.html`: Archivo HTML básico que carga el script y estructura la interfaz del juego.

## Mejoras futuras

- **Interfaz gráfica**: Mejorar la interfaz gráfica del juego para hacerlo más atractivo visualmente.

---

## Historial de Versiones


### V1.0 - [7/02/2025]
- Versión inicial del juego siguiendo las indicaciones del curso.
- Permite al jugador establecer un rango personalizado.
- Cuenta con un límite de 10 intentos.
- Mensajes dinámicos dependiendo del resultado del jugador.

---

