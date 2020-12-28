var addBurger = document.querySelector('.header__burger');
var addMenu = document.querySelector('.header__menu');
var bodyLock = document.querySelector('body');

addBurger.addEventListener('click', addClass);

function addClass() {
  addBurger.classList.toggle('active');
  addMenu.classList.toggle('active');
  bodyLock.classList.toggle('lock');
}
