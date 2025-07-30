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


//Ejercicios de funciones en JavaScript pt 2
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
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajes() {
    console.log('Lenguajes de Programación:');
    lenguagesDeProgramacion.forEach((lenguaje, index) => {
        console.log(`${index + 1}. ${lenguaje}`);
    });
}

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesInverso() {
    console.log('Lenguajes de Programación en orden inverso:');
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(`${i + 1}. ${lenguagesDeProgramacion[i]}`);
    }
}

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedios(listaNumeros) {
    let suma = 0;
    listaNumeros.forEach((numero, index) => {
        suma += numero;
    });
    return (suma / listaNumeros.length);        
}
//Funcion flecha para calcular el promedio
const calcularPromediosFlecha = listaNumeros => {
    listaNumeros.length === 0 ? 0 : listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0) / listaNumeros.length;
}

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMinimoMaximo(listaNumeros) {
    if (listaNumeros.length === 0) {
        console.log('La lista está vacía.');
        return;
    }
    let maximo = Math.max(...listaNumeros);
    let minimo = Math.min(...listaNumeros);
    console.log(`Número más grande: ${maximo}`);
    console.log(`Número más pequeño: ${minimo}`);
}

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
const sumarElementos = (listaNumeros) => {
    return listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
};

console.log(sumarElementos([1, 2, 3, 4, 5])); // Ejemplo de uso)

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o - 1 si no existe en la lista.
function encontrarPosicionElemento(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;
}

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error('Las listas deben tener el mismo tamaño');
    }
    const ListaSuma = (lista1, lista2) => { 
        return lista1.map((numero, index) => numero + lista2[index]);
    }
    return ListaSuma(lista1, lista2);
}

//Ejemplo de uso
let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
let resultadoSuma = sumarListas(lista1, lista2);
console.log(resultadoSuma); // [5, 7, 9]

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
const elevarAlCuadradoLista = (listaNumeros) => {
    return listaNumeros.map(numero => numero * numero);
}