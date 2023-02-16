//variables
let carta = document.querySelectorAll('.img');
const primeraCarta = carta[0];
const segonaCarta = carta[1];
const terceraCarta = carta [2];

let cartaComp = document.querySelectorAll('.img1');
const primeraCartaComp = cartaComp[0];
const segonaCartaComp = cartaComp[1];
const terceraCartaComp = cartaComp[2];

let win = 0;
let lose = 0;


let onlyOneOption = true;
let carta1 = null;

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
        primeraCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        primeraCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    } else if (segonaCarta.style.backgroundColor == 'green' && segonaCartaComp.style.backgroundColor == 'red') {
        alert("empate");
        segonaCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        segonaCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    } else if(terceraCarta.style.backgroundColor == 'green' && terceraCartaComp.style.backgroundColor == 'red') {
        alert("empate");
        terceraCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        terceraCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    };

    //piedra victoria
    if (primeraCarta.style.backgroundColor == 'green' && segonaCartaComp.style.backgroundColor == 'red') {
        alert('Has perdido');
        lose++;
        comp_score.innerHTML = `${lose}`;
        primeraCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        segonaCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    } else if (primeraCarta.style.backgroundColor == 'green' && terceraCartaComp.style.backgroundColor == 'red') {
        alert ('Has ganado');
        win++;
        user_score.innerHTML = `${win}`;
        primeraCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        terceraCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    };

    //papel victoria
    if (segonaCarta.style.backgroundColor == 'green' && terceraCartaComp.style.backgroundColor == 'red') {
        alert('Has perdido');
        lose++;
        comp_score.innerHTML = `${lose}`;
        segonaCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        terceraCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    } else if (segonaCarta.style.backgroundColor == 'green' && primeraCartaComp.style.backgroundColor == 'red') {
        alert ('Has ganado');
        win++;
        user_score.innerHTML = `${win}`;
        segonaCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        primeraCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    };

    //tijeras victoria
    if (terceraCarta.style.backgroundColor == 'green' && primeraCartaComp.style.backgroundColor == 'red') {
        alert('Has perdido');
        lose++;
        comp_score.innerHTML = `${lose}`;
        terceraCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        primeraCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();

    } else if (terceraCarta.style.backgroundColor == 'green' && segonaCartaComp.style.backgroundColor == 'red') {
        alert ('Has ganado');
        win++;
        user_score.innerHTML = `${win}`;
        terceraCarta.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        segonaCartaComp.style.backgroundColor = 'rgba(128, 128, 128, 0)';
        onlyOneOption = true;
        carta1 = null;
        ganarPerder();
    };
};

function ganarPerder() {
    
    if (win == 10) {
        alert ('Has ganado a la máquina');
        win = 0;
        lose = 0;
        user_score.innerHTML = `${win}`;
        comp_score.innerHTML = `${lose}`;
    }

    if (lose == 10) {
        alert ('La máquina te ha ganado');
        win = 0;
        lose = 0;
        user_score.innerHTML = `${win}`;
        comp_score.innerHTML = `${lose}`;
    };
};