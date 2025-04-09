const wrapper = document.querySelector('.scrolling-wrapper');
let scrollInterval;

// Auto scroll cada 3 segundos
function startAutoScroll() {
  scrollInterval = setInterval(() => {
    wrapper.scrollBy({ left: 200, behavior: 'smooth' });
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
}

wrapper.addEventListener('mouseover', stopAutoScroll);
wrapper.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();

// Botones
document.getElementById('prevClients').onclick = () => {
  wrapper.scrollBy({ left: -300, behavior: 'smooth' });
};
document.getElementById('nextClients').onclick = () => {
  wrapper.scrollBy({ left: 300, behavior: 'smooth' });
};