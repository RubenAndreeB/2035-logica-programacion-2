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
        asignarTextoElemento('p', `�Felicidades! Has acertado en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        // El usuario no ha acertado
    } else {
        if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El n�mero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El n�mero secreto es mayor');
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
    asignarTextoElemento('h1', 'Juego del N�mero Secreto');
    asignarTextoElemento('p', 'Indica un n�mero entre 1 y 10');
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
// 1. Crear una funci�n que muestre "�Hola, mundo!" en la consola.
function saludarMundo() {
    console.log("�Hola, mundo!");
}
const saludarMundoFlecha = () => console.log("�Hola, mundo!");

// 2. Crear una funci�n que reciba un nombre como par�metro y muestre "�Hola, [nombre]!" en la consola.
function saludar(nombre) {
    console.log(`�Hola, ${nombre}!`);
}
const saludarFlecha = nombre => console.log(`�Hola, ${nombre}!`);

// 3. Crear una funci�n que reciba un n�mero como par�metro y devuelva el doble de ese n�mero.
function duplicarNumero(numero) {
    return numero * 2;
}
const duplicarNumeroFlecha = numero => numero * 2;

// 4. Crear una funci�n que reciba tres n�meros como par�metros y devuelva su promedio.
function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
const calcularPromedioFlecha = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// 5. Crear una funci�n que reciba dos n�meros como par�metros y devuelva el mayor de ellos.
function mayorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
const mayorNumeroFlecha = (num1, num2) => num1 > num2 ? num1 : num2;

// 6. Crear una funci�n que reciba un n�mero como par�metro y devuelva el resultado de multiplicar ese n�mero por s� mismo.
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
// 1. Crea una funci�n que calcule el �ndice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibir�n como par�metros.
let calcularIMC = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// 2. Crea una funci�n que calcule el valor del factorial de un n�mero pasado como par�metro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
Crea una funci�n que convierta un valor en d�lares, pasado como par�metro, y devuelva el valor equivalente en reales(moneda brasile�a,si deseas puedes hacerlo con el valor del d�lar en tu pa�s). Para esto, considera la cotizaci�n del d�lar igual a R$4,80.
Crea una funci�n que muestre en pantalla el �rea y el per�metro de una sala rectangular, utilizando la altura y la anchura que se proporcionar�n como par�metros.
Crea una funci�n que muestre en pantalla el �rea y el per�metro de una sala circular, utilizando su radio que se proporcionar� como par�metro. Considera Pi = 3,14.
Crea una funci�n que muestre en pantalla la tabla de multiplicar de un n�mero dado como par�metro.
