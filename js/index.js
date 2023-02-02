/* eslint-disable no-unused-vars */
const pageTimeout = setTimeout(() => {
  const navBtn = document.querySelector('.open-nav');
  const mobileNavigation = document.querySelector('.mobile-navigation');
  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const sidebarMenuContent = document.querySelector('.sidebar-menu');
  const navigationBar = document.querySelector('#navbar');

  const infoSections = document.querySelectorAll('.info-section');
  const mainNavigationLinks = document.querySelectorAll('.nav-link');

  const contactForm = document.querySelector('form');
  const errorMessage = document.querySelector('.error-message');
  const submitBtn = document.querySelector('.project-btn.submit-btn');

  const contactInfo = localStorage.getItem('contact-info') ? JSON.parse(localStorage.getItem('contact-info')) : {};

  function removeAllActiveClasses() {
    Array.from(mainNavigationLinks).forEach((link) => {
      link.classList.remove('active');
    });
  }

  function setActiveClass(index) {
    if (Array.from(mainNavigationLinks)[index]) {
      Array.from(mainNavigationLinks)[index].classList.add('active');
    }
  }

  const sectionMargin = 100;
  let currentActive = 0;

  window.addEventListener('scroll', () => {
    const current = infoSections.length - [...infoSections]
      .reverse()
      .findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

    if (current !== currentActive) {
      removeAllActiveClasses();
      currentActive = current;
      setActiveClass(current);
    }

    if (window.scrollY > 150) {
      navigationBar.classList.add('navbar-shadow');
    } else {
      navigationBar.classList.remove('navbar-shadow');
    }
  });

  function openToggleClass(e) {
    e.stopPropagation();
    mobileNavigation.classList.toggle('open-menu');
  }

  navBtn.addEventListener('click', openToggleClass);
  navToggleBtn.addEventListener('click', openToggleClass);

  sidebarMenuContent.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      openToggleClass(e);
    }
  });

  // CONTACT FORM VALIDATION
  submitBtn.addEventListener('click', () => {
    if (contactForm.email.value !== contactForm.email.value.toLowerCase()) {
      errorMessage.textContent = 'The email entered must be in lowercase. Check email to submit!';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
      localStorage.setItem('contact-info', JSON.stringify(contactInfo));
    }
  });
}, 1000);

window.addEventListener('beforeunload', () => {
  clearTimeout(pageTimeout);
});