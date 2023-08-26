// Define la función generarCard
function generarCard() {
  const linkImg = [
    './assets/img/corazon.png',
    './assets/img/diamante.png',
    './assets/img/picas.png',
    './assets/img/trebol.png'
  ];

  const numberCard = document.getElementById('number');
  const iconCards = Array.from(document.getElementsByClassName('iconCard'));

  const randomSrcIndex = Math.floor(Math.random() * linkImg.length);

  iconCards.forEach(iconCard => {
    iconCard.src = linkImg[randomSrcIndex];
  });

  const randomCardNumber = Math.floor(Math.random() * 9) + 2;
  numberCard.textContent = randomCardNumber;
}

// Llama a generarCard cuando la página se carga completamente
window.onload = function() {
  generarCard();
};

function reload() {
  generarCard();
}

let inputAncho = document.getElementById('inputAncho');
let inputLargo = document.getElementById('inputLargo');
let botonCambio = document.getElementById('boton');

botonCambio.addEventListener('click', function() {
  document.getElementById('card').style.width = inputAncho.value + 'px';
  document.getElementById('card').style.height = inputLargo.value + 'px';
});
