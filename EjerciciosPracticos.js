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


//Ejercicios de funciones en JavaScript pt 2
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
//Crea una funci�n que convierta un valor en d�lares, pasado como par�metro, y devuelva el valor equivalente en reales(moneda brasile�a,si deseas puedes hacerlo con el valor del d�lar en tu pa�s). Para esto, considera la cotizaci�n del d�lar igual a R$4,80.
//Crea una funci�n que muestre en pantalla el �rea y el per�metro de una sala rectangular, utilizando la altura y la anchura que se proporcionar�n como par�metros.
//Crea una funci�n que muestre en pantalla el �rea y el per�metro de una sala circular, utilizando su radio que se proporcionar� como par�metro. Considera Pi = 3,14.
//Crea una funci�n que muestre en pantalla la tabla de multiplicar de un n�mero dado como par�metro.

//1. Crea una lista vac�a llamada "listaGenerica".
let listaGenerica = [];

//2. Crea una lista de lenguajes de programaci�n llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4. Crea una funci�n que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajes() {
    console.log('Lenguajes de Programaci�n:');
    lenguagesDeProgramacion.forEach((lenguaje, index) => {
        console.log(`${index + 1}. ${lenguaje}`);
    });
}

//5. Crea una funci�n que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesInverso() {
    console.log('Lenguajes de Programaci�n en orden inverso:');
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(`${i + 1}. ${lenguagesDeProgramacion[i]}`);
    }
}

//6. Crea una funci�n que calcule el promedio de los elementos en una lista de n�meros.
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

//7. Crea una funci�n que muestre en la consola el n�mero m�s grande y el n�mero m�s peque�o en una lista.
function mostrarMinimoMaximo(listaNumeros) {
    if (listaNumeros.length === 0) {
        console.log('La lista est� vac�a.');
        return;
    }
    let maximo = Math.max(...listaNumeros);
    let minimo = Math.min(...listaNumeros);
    console.log(`N�mero m�s grande: ${maximo}`);
    console.log(`N�mero m�s peque�o: ${minimo}`);
}

//8. Crea una funci�n que devuelva la suma de todos los elementos en una lista.
const sumarElementos = (listaNumeros) => {
    return listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
};

console.log(sumarElementos([1, 2, 3, 4, 5])); // Ejemplo de uso)

//9. Crea una funci�n que devuelva la posici�n en la lista donde se encuentra un elemento pasado como par�metro, o - 1 si no existe en la lista.
function encontrarPosicionElemento(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;
}

//10. Crea una funci�n que reciba dos listas de n�meros del mismo tama�o y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error('Las listas deben tener el mismo tama�o');
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

//11. Crea una funci�n que reciba una lista de n�meros y devuelva una nueva lista con el cuadrado de cada n�mero.
const elevarAlCuadradoLista = (listaNumeros) => {
    return listaNumeros.map(numero => numero * numero);
}