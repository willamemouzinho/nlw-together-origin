/*=============== SHOW MENU ===============*/
const toggle = document.getElementById('menu-toggle'),
  menu = document.getElementById('menu')

function toggleMenu() {
  const menu = document.getElementById('menu')
  const toggle = document.getElementById('menu-toggle')
  menu.classList.toggle('nav__menu')
  if (toggle.classList.contains('ri-menu-3-line')) {
    toggle.classList.remove('ri-menu-3-line')
    toggle.classList.add('ri-close-line')
  } else {
    toggle.classList.remove('ri-close-line')
    toggle.classList.add('ri-menu-3-line')
  }
}

/* Validate if constant exists */
if (menu) {
  toggle.addEventListener('click', toggleMenu)
  toggle.addEventListener('keypress', toggleMenu)
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollNav() {
  const nav = document.getElementById('nav')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 72) {
    nav.classList.add('scroll-nav')
  } else {
    nav.classList.remove('scroll-nav')
  }
}
window.addEventListener('scroll', scrollNav)

/* Executa o script depois que a página carregar
window.onload = function nameFunction(params) {}
*/

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))
