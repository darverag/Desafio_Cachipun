/*1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, cuántas veces deberá jugar contra la computadora.Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar. */

/*2. Solicitar al usuario que indique su jugada. Las opciones son las siguientes: -Piedra  - Papel  - Tijera*/

/*3. Generar una jugada automática para la máquina usando la función Math.random()
de Javascript.*/

/*4. Definir a un ganador considerando la jugada del usuario y la generada
automáticamente para la máquina.*/

/*5. Indicar el resultado de la partida dependiendo del caso: -Felicitar al ganador en caso de ser el usuario.●Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
la que gane. -Declarar un empate.*/



function aleatorio(minimo, maximo) {
    var num = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
    return num;

}

var piedra = 0;
var papel = 1;
var tijera = 2;
var alternativas = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0, 2);

var contador = 0;
var acumulador = 0;

alert("Bienvenido a Cachipun 2.0 ¿Te animas a jugar contra la máquina?")
var vecesjugar = parseInt(prompt("¿Cuántos juegos deseas realizar? Ingresa tu opción"));
alert("¿Estás listo?..............¡Comencemos!")
while (contador != vecesjugar) {
    contador++;
    acumulador += vecesjugar;


    opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
    alert("Escogiste " + alternativas[opcionUsuario]);
    alert("La máquina escogió " + alternativas[opcionMaquina]);


    if (opcionUsuario == piedra) {

        if (opcionMaquina == piedra) {
            alert("Empate");

        } else if (opcionMaquina == papel) {
            alert("Perdiste!");

        } else if (opcionMaquina == tijera) {
            alert("Ganaste!");
        }

    } else if (opcionUsuario == papel) {

        if (opcionMaquina == piedra) {
            alert("Ganaste!");

        } else if (opcionMaquina == papel) {
            alert("Empate!");

        } else if (opcionMaquina == tijera) {
            alert("Perdiste!");
        }

    } else if (opcionUsuario == tijera) {

        if (opcionMaquina == piedra) {
            alert("Perdiste");

        } else if (opcionMaquina == papel) {
            alert("Ganaste!");

        } else if (opcionMaquina == tijera) {
            alert("Empate!");
        }

    } else {
        alert("Ups!! Has ingresado una opción NO válida, intentalo de nuevo!");

    }
}

document.write("Gracias por jugar con nosotros...!!");