const openBtn = document.getElementById('openComoAjudar');
const closeBtn = document.getElementById('closeComoAjudar');
const modal = document.getElementById('modalComoAjudar');

if (openBtn && modal) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});