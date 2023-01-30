const navBtn = document.querySelector(".open-nav");
const mobileNavigation = document.querySelector(".mobile-navigation");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const sidebarMenuContent = document.querySelector(".sidebar-menu");
const navigationBar = document.querySelector("#navbar");

const infoSections = document.querySelectorAll(".info-section");
const mainNavigationLinks = document.querySelectorAll(".nav-link");

document.addEventListener("DOMContentLoaded", (e) => {
  const sectionMargin = 100;
  let currentActive = 0;

  window.addEventListener("scroll", (e) => {
    const current =
      infoSections.length -
      Array.from(infoSections)
        .reverse()
        .findIndex(
          (section) => window.scrollY >= section.offsetTop - sectionMargin
        ) -
      1;

    if (current !== currentActive) {
      removeAllActiveClasses();
      currentActive = current;
      setActiveClass(current);
    }

    if (window.scrollY > 150) {
      navigationBar.classList.add("navbar-shadow");
    } else {
      navigationBar.classList.remove("navbar-shadow");
    }
  });
});

function removeAllActiveClasses() {
  Array.from(mainNavigationLinks).forEach((link) => {
    link.classList.remove("active");
  });
}

function setActiveClass(index) {
  Array.from(mainNavigationLinks)[index].classList.add("active");
}

function openToggleClass(e) {
  e.stopPropagation();
  mobileNavigation.classList.toggle("open-menu");
}

navBtn.addEventListener("click", openToggleClass);
navToggleBtn.addEventListener("click", openToggleClass);

sidebarMenuContent.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    openToggleClass(e);
  }
});
