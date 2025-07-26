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

