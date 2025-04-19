document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const solucionesToggle = document.getElementById("soluciones-toggle");
  const solucionesMenu = document.getElementById("soluciones-menu");

  // Abrir/cerrar menú hamburguesa con animación
  menuToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
      setTimeout(() => navMenu.classList.remove("scale-y-0"), 10);
    } else {
      navMenu.classList.add("scale-y-0");
      setTimeout(() => navMenu.classList.add("hidden"), 300);
    }
  });

  // Mostrar/Ocultar submenú en móvil
  if (window.innerWidth < 768 && solucionesToggle && solucionesMenu) {
    solucionesToggle.addEventListener("click", () => {
      solucionesMenu.classList.toggle("hidden");
    });
  }
});