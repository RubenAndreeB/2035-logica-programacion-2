let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `¡Felicidades! Has acertado en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        // El usuario no ha acertado
    } else {
        if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    valorCaja = document.getElementById('valorUsuario').value = '';
    document.getElementById('valorUsuario').focus();
    return;
}

function condicionesIniciales() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', 'Indica un número entre 1 y 10');
}

function reiniciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limpiarCaja();
    return;
}

condicionesIniciales();

/*
// Ejercicios de funciones en JavaScript pt 1
// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludarMundo() {
    console.log("¡Hola, mundo!");
}
const saludarMundoFlecha = () => console.log("¡Hola, mundo!");

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
const saludarFlecha = nombre => console.log(`¡Hola, ${nombre}!`);

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(numero) {
    return numero * 2;
}
const duplicarNumeroFlecha = numero => numero * 2;

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
const calcularPromedioFlecha = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
const mayorNumeroFlecha = (num1, num2) => num1 > num2 ? num1 : num2;

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
let elevarAlCuadrado = x => x * x;
const elevarAlCuadradoFlecha = x => x * x;

saludarMundo();
saludar("Ruben");
console.log(duplicarNumero(5));
console.log(calcularPromedio(4, 8, 11));
console.log(mayorNumero(7, 3));
console.log(elevarAlCuadrado(6));
*/


Ejercicios de funciones en JavaScript pt 2
// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
let calcularIMC = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
