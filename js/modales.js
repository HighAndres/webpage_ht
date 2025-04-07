// js/modales.js

export function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.toggle("hidden");
    }
  }