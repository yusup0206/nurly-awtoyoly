const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});
