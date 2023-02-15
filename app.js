let carta = document.querySelectorAll('.img');
const primeraCarta = carta[0];
const segonaCarta = carta[1];
const terceraCarta = carta [2];


// segonaCarta.style.removeProperty('background-color');

primeraCarta.addEventListener('click', () => {
    primeraCarta.style.backgroundColor = 'green';
    primeraCarta.classList.remove('img:hover');
});

segonaCarta.addEventListener('click', () => {
    segonaCarta.style.backgroundColor = 'green';
});

terceraCarta.addEventListener('click', () => {
    terceraCarta.style.backgroundColor = 'green';
});

