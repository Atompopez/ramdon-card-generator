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