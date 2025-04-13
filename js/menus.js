// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    if (toggleButton && navMenu) {
      toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
      });
  
      // Opcional: cerrar el menú cuando se hace clic en un enlace
      navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.add("hidden");
        });
      });
    }
  });
  