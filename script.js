/* ==========================================================================
   SALMA YOUSAF — PORTFOLIO SCRIPT
   Handles: mobile nav toggle, active nav-link highlighting on scroll,
   sticky header shadow, and auto-updating footer year.
   No external dependencies, no backend required.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Mobile hamburger menu ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* Close the mobile menu after a link is tapped */
    navMenu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Highlight the active section in the nav while scrolling ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    var scrollPos = window.scrollY + 140; /* offset for sticky header */
    var current = sections[0] ? sections[0].id : "";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var targetId = link.getAttribute("href").replace("#", "");
      link.classList.toggle("is-active", targetId === current);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Sticky header shadow once the page is scrolled ---------- */
  var header = document.getElementById("site-header");
  function setHeaderShadow() {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 4 ? "0 6px 18px rgba(0,0,0,0.06)" : "none";
  }
  window.addEventListener("scroll", setHeaderShadow, { passive: true });
  setHeaderShadow();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
