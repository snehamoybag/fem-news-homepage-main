// STYLESHEET
import '/scss/style.scss';

// Hamburger Menu
const navBar = document.querySelector('#nav-bar');
const navBtn = document.querySelector('#nav-btn');
let isNavOpen = false;

navBtn.addEventListener('click', () => {
  (!isNavOpen) ? openNavigation(): closeNavigation();
});

function openNavigation() {
  isNavOpen = true;
  navBtn.setAttribute('aria-expanded', 'true');
  navBtn.classList.add('open-nav');
  navBar.classList.add('open-nav');
}

function closeNavigation() {
  isNavOpen = false;
  navBtn.setAttribute('aria-expanded', 'false');
  navBtn.classList.remove('open-nav');
  navBar.classList.remove('open-nav');
}