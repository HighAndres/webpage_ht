document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const solucionesToggle = document.getElementById("soluciones-toggle");
    const solucionesMenu = document.getElementById("soluciones-menu");
  
    // Toggle menú principal móvil
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  
    // Ocultar menú móvil al hacer clic en cualquier enlace
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
      });
    });
  
    // Activar submenú con clic solo en móviles
    solucionesToggle.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        solucionesMenu.classList.toggle("opacity-0");
        solucionesMenu.classList.toggle("invisible");
        solucionesMenu.classList.toggle("opacity-100");
        solucionesMenu.classList.toggle("visible");
      }
    });
  });