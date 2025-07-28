import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.getElementById("mainNavbar");
  const closeBtn = document.getElementById("closeNavbar");

  // Desktop hover open/close
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 991) {
        const menu = this.querySelector(".dropdown-menu");
        const toggle = this.querySelector(".dropdown-toggle");
        if (menu && toggle) {
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 991) {
        const menu = this.querySelector(".dropdown-menu");
        const toggle = this.querySelector(".dropdown-toggle");
        if (menu && toggle) {
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Mobile dropdown click toggle
  dropdowns.forEach((dropdown) => {
    const toggleLink = dropdown.querySelector(".dropdown-toggle");

    toggleLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const menu = dropdown.querySelector(".dropdown-menu");
        const isOpen = menu.classList.contains("show");

        // Close all dropdowns first
        dropdowns.forEach((d) => {
          d.querySelector(".dropdown-menu")?.classList.remove("show");
        });

        // Toggle current one
        if (!isOpen) {
          menu.classList.add("show");
        }
      }
    });
  });

  // Mobile navbar toggler
  toggler?.addEventListener("click", function () {
    document.body.classList.add("menu-open");
  });

  // Close button (mobile)
  closeBtn?.addEventListener("click", function () {
    navbar.classList.remove("show");
    document.body.classList.remove("menu-open");

    // Close all dropdowns too
    dropdowns.forEach((d) => {
      d.querySelector(".dropdown-menu")?.classList.remove("show");
    });
  });
});
 