const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
