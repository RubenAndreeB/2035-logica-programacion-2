let listaNumerosSorteados = [];
let intentos = 1;
let numeroMaximo = 1;
let numeroSecreto = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Si ya sorteamos todos los números, reiniciamos la lista
    if (listaNumerosSorteados.length === numeroMaximo) {
        listaNumerosSorteados = [];
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles. Reinicia la pagina para seguir jugando.');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(`Número secreto generado: ${numeroGenerado}`);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
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
    intentos = 1;
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limpiarCaja();
    return;
}

condicionesIniciales();
