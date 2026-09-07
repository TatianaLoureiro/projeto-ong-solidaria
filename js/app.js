import { navegar } from './router.js';

window.addEventListener('hashchange', navegar);
window.addEventListener('DOMContentLoaded', () => {
  navegar();
  configurarEventosGlobais();
});

function configurarEventosGlobais() {
  // Modal "Como Ajudar"
  const modal = document.getElementById('modalComoAjudar');
  
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'openComoAjudar') {
      e.preventDefault();
      if (modal) modal.style.display = 'flex';
    }
    
    if ((e.target && e.target.id === 'closeComoAjudar') || e.target === modal) {
      if (modal) modal.style.display = 'none';
    }
  });

  // Menu Hamburguer Mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
}