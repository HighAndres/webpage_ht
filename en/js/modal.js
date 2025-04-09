// Cargar modales externos
document.addEventListener("DOMContentLoaded", () => {
    fetch("modales.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("modales-container").innerHTML = html;
        iniciarModales(); // Llama función que configura eventos
      });
  });
  
  // Activar apertura/cierre de modales
  function iniciarModales() {
    const botones = document.querySelectorAll("[data-modal]");
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const modalId = boton.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.toggle("hidden");
      });
    });
  }