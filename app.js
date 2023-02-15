let carta = document.querySelectorAll('.img');
const primeraCarta = carta[0];
const segonaCarta = carta[1];
const terceraCarta = carta [2];
let onlyOneOption = false

// segonaCarta.style.removeProperty('background-color');

while (onlyOneOption == false) {

    switch (onlyOneOption) {
        case false:
            primeraCarta.addEventListener('click', () => {
                primeraCarta.style.backgroundColor = 'green';
                onlyOneOption = true;
                console.log(onlyOneOption);
            });
            break;
        case false:
            segonaCarta.addEventListener('click', () => {
                segonaCarta.style.backgroundColor = 'green';
                onlyOneOption = true;
                console.log(onlyOneOption);
            });
            break;
        case false:
            terceraCarta.addEventListener('click', () => {
                terceraCarta.style.backgroundColor = 'green';
                onlyOneOption = true;
                console.log(onlyOneOption);
            });
            break;
    }
    break;
};
