import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'


  document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdowns
    const dropdowns = document.querySelectorAll(".navbar .dropdown");

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        const menu = this.querySelector(".dropdown-menu");
        const toggle = this.querySelector(".dropdown-toggle");
        if (menu && toggle) {
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      });

      dropdown.addEventListener("mouseleave", function () {
        const menu = this.querySelector(".dropdown-menu");
        const toggle = this.querySelector(".dropdown-toggle");
        if (menu && toggle) {
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

document.querySelector('.navbar-toggler').addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});


 document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById("closeNavbar");
    const navbar = document.getElementById("mainNavbar");
    const toggler = document.querySelector(".navbar-toggler");

    // Close button click
    closeBtn?.addEventListener("click", function () {
      navbar.classList.remove("show");
      document.body.classList.remove("menu-open");
    });

    // When toggler opens menu
    toggler?.addEventListener("click", function () {
      document.body.classList.add("menu-open");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.getElementById("mainNavbar");
  const closeBtn = document.getElementById("closeNavbar");

  // Desktop hover functionality
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 991) {  // Only desktop
        const menu = this.querySelector(".dropdown-menu");
        const toggle = this.querySelector(".dropdown-toggle");
        if (menu && toggle) {
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 991) { // Only desktop
        const menu = this.querySelector(".dropdown-menu");
        const toggle = this.querySelector(".dropdown-toggle");
        if (menu && toggle) {
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });

    // Mobile click toggle (open/close)
    const toggleLink = dropdown.querySelector(".dropdown-toggle");
    toggleLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault(); // stop link redirect
        const menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.toggle("show");
      }
    });
  });

  // Mobile toggler slide-in
  toggler?.addEventListener("click", function () {
    document.body.classList.add("menu-open");
  });

  // Close button
  closeBtn?.addEventListener("click", function () {
    navbar.classList.remove("show");
    document.body.classList.remove("menu-open");
  });
});
