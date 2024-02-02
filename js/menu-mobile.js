export default function InitMenuMobile() {
  const buttonMobile = document.getElementById('button-mobile');
  const nav = document.getElementById('nav');

  function toggleMenu() {
    buttonMobile.classList.toggle('active');
    nav.classList.toggle('active');
  }

  function closeMenuIfClickedOutside(event) {
    if (!nav.contains(event.target) && !buttonMobile.contains(event.target)) {
      buttonMobile.classList.remove('active');
      nav.classList.remove('active');
    }
  }

  nav.addEventListener('click', toggleMenu);

  document.addEventListener('click', closeMenuIfClickedOutside);
}
