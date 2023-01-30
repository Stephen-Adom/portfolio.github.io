const navBtn = document.querySelector('.open-nav');
const mainNavBtn = document.querySelector('.mobile-navigation');
const openBtn = document.querySelector('.nav-toggle-btn');

function openToggleClass(e) {
  e.stopPropagation();
  mainNavBtn.classList.toggle('open-menu');
}

navBtn.addEventListener('click', openToggleClass);
openBtn.addEventListener('click', openToggleClass);
