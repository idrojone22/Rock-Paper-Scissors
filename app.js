//variables
let carta = document.querySelectorAll('.img');
const primeraCarta = carta[0];
const segonaCarta = carta[1];
const terceraCarta = carta [2];

let cartaComp = document.querySelectorAll('.img1');
const primeraCartaComp = cartaComp[0];
const segonaCartaComp = cartaComp[1];
const terceraCartaComp = cartaComp[2];


let onlyOneOption = true;
let carta1;

// segonaCarta.style.removeProperty('background-color');

primeraCarta.addEventListener('click', () => {
    carta1 = 1;
    solesunacarta()
    onlyOneOption = false;
});
        
segonaCarta.addEventListener('click', () => {
    carta1 = 2;
    solesunacarta()
    onlyOneOption = false;
});

terceraCarta.addEventListener('click', () => {
    carta1 = 3;
    solesunacarta()
    onlyOneOption = false;
});


// funciones

function comp() {
    let numeroRandom = Math.floor(Math.random() * 3);
    console.log(numeroRandom);
    if (numeroRandom == 0) {
        primeraCartaComp.style.backgroundColor = 'red';
        setTimeout(() => {
            compararResultat()
        }, 200);
        
    } else if (numeroRandom == 1) {
        segonaCartaComp.style.backgroundColor = 'red';
        setTimeout(() => {
            compararResultat()
        }, 200);
    } else {
        terceraCartaComp.style.backgroundColor = 'red';
        setTimeout(() => {
            compararResultat()
        }, 200);
    };
};

function solesunacarta() {

    if (onlyOneOption == true) {
        if (carta1 == 1) {
            primeraCarta.style.backgroundColor = 'green';
            comp();
        } else if (carta1 == 2) {
            segonaCarta.style.backgroundColor = 'green';
            comp();
        } else {
            terceraCarta.style.backgroundColor = 'green';
            comp();
        };
    };
};

function compararResultat() {

    //empates
    if (primeraCarta.style.backgroundColor == 'green' && primeraCartaComp.style.backgroundColor == 'red') {
        alert("empate");
    } else if (segonaCarta.style.backgroundColor == 'green' && segonaCartaComp.style.backgroundColor == 'red') {
        alert("empate");
    } else if(terceraCarta.style.backgroundColor == 'green' && terceraCartaComp.style.backgroundColor == 'red') {
        alert("empate");
    };

    //piedra victoria
    if (primeraCarta.style.backgroundColor == 'green' && segonaCartaComp.style.backgroundColor == 'red') {
        alert('Has perdido');
    } else if (primeraCarta.style.backgroundColor == 'green' && terceraCartaComp.style.backgroundColor == 'red') {
        alert ('Has ganado');
    };

    //papel victoria
    if (segonaCarta.style.backgroundColor == 'green' && terceraCartaComp.style.backgroundColor == 'red') {
        alert('Has perdido');
    } else if (segonaCarta.style.backgroundColor == 'green' && primeraCartaComp.style.backgroundColor == 'red') {
        alert ('Has ganado');
    };

    //tijeras victoria
    if (terceraCarta.style.backgroundColor == 'green' && primeraCartaComp.style.backgroundColor == 'red') {
        alert('Has perdido');
    } else if (terceraCarta.style.backgroundColor == 'green' && segonaCartaComp.style.backgroundColor == 'red') {
        alert ('Has ganado');
    };
};