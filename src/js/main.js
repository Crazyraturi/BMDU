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

 let hasAnimated = false; // Prevent multiple animations

        // Counter animation function
        function animateCounter(element, target, suffix = '') {
            let current = 0;
            const increment = target / 100; // Adjust speed by changing denominator
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.innerHTML = target + suffix;
                    clearInterval(timer);
                } else {
                    element.innerHTML = Math.floor(current) + suffix;
                }
            }, 20); // Adjust timing for smoother/faster animation
        }

        // Function to start the counter animation
        function startCounterAnimation() {
            if (hasAnimated) return; // Prevent re-animation
            
            hasAnimated = true;
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach((element, index) => {
                const target = parseInt(element.getAttribute('data-target'));
                const suffix = element.querySelector('span').textContent;
                
                // Clear the initial content
                element.innerHTML = '0' + suffix;
                
                // Start animation with slight delay for each card
                setTimeout(() => {
                    animateCounter(element, target, suffix);
                }, index * 100);
            });
        }

        // Intersection Observer to detect when section comes into view
        const observerOptions = {
            threshold: 0.5, // Trigger when 50% of the section is visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounterAnimation();
                    // Optional: Stop observing after first trigger
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Start observing when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            const statsContainer = document.querySelector('.stats-container');
            observer.observe(statsContainer);
        });

        // Optional: Reset and restart animation on double-click (for testing)
        document.addEventListener('dblclick', () => {
            hasAnimated = false;
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(element => {
                const suffix = element.querySelector('span').textContent;
                element.innerHTML = '0' + suffix;
            });
            
            startCounterAnimation();
        });
