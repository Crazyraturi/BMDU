import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.getElementById("mainNavbar");
  const closeBtn = document.getElementById("closeNavbar");

  // ---------- Desktop hover open/close ----------
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 991) {
        const menu = this.querySelector(".dropdown-menu");
        menu?.classList.add("show");
        this.classList.add("open");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 991) {
        const menu = this.querySelector(".dropdown-menu");
        menu?.classList.remove("show");
        this.classList.remove("open");
      }
    });
  });

  // ---------- Mobile dropdown toggle ----------
  dropdowns.forEach((dropdown) => {
    const toggleLink = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggleLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const isOpen = menu.classList.contains("show");

        // Close all menus first
        dropdowns.forEach((d) => {
          d.querySelector(".dropdown-menu")?.classList.remove("show");
          d.classList.remove("open");
        });

        // Toggle current one
        if (!isOpen) {
          menu.classList.add("show");
          dropdown.classList.add("open");
        }
      }
    });
  });

  // ---------- Close if clicked outside ----------
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 991 && !e.target.closest(".dropdown") && !e.target.closest(".navbar-toggler")) {
      dropdowns.forEach((d) => {
        d.querySelector(".dropdown-menu")?.classList.remove("show");
        d.classList.remove("open");
      });
    }
  });

  // ---------- Mobile navbar toggler ----------
  toggler?.addEventListener("click", function () {
   
    document.body.classList.add("menu-open");
  });

  // ---------- Close button (mobile) ----------
  closeBtn?.addEventListener("click", function () {
    navbar.classList.remove("show");
    document.body.classList.remove("menu-open");

    // Close all dropdowns
    dropdowns.forEach((d) => {
      d.querySelector(".dropdown-menu")?.classList.remove("show");
      d.classList.remove("open");
    });
  });

  // ---------- Reset when resizing ----------
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      navbar.classList.remove("show");
      document.body.classList.remove("menu-open");
      dropdowns.forEach((d) => {
        d.querySelector(".dropdown-menu")?.classList.remove("show");
        d.classList.remove("open");
      });
    }
  });
});
