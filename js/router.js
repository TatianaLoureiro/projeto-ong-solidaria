import { templates } from './templates.js';
import { storage } from './storage.js';
import { validarFormulario, exibirErros, limparErros } from './validator.js';

const app = document.getElementById('app-content');

export function navegar() {
  const rota = window.location.hash.replace('#', '') || 'inicio';

  switch (rota) {
    case 'inicio':
      app.innerHTML = templates.inicio();
      break;
    case 'projetos':
      app.innerHTML = templates.projetos();
      configurarFiltroPets();
      break;
    case 'cadastro':
      app.innerHTML = templates.cadastro();
      configurarFormulario();
      break;
    case 'solicitacoes':
      app.innerHTML = templates.solicitacoes(storage.obterAdocoes());
      break;
    default:
      app.innerHTML = templates.inicio();
  }
}

function configurarFiltroPets() {
  const select = document.getElementById('f-esp');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    const cards = document.querySelectorAll('.card.pet');

    cards.forEach(card => {
      const especie = card.getAttribute('data-e');
      if (val === 'todos' || especie === val) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

function configurarFormulario() {
  const form = document.getElementById('formAdocao');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dados = {
      nome: document.getElementById('nome').value,
      cpf: document.getElementById('cpf').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      cep: document.getElementById('cep').value,
      interesse: document.getElementById('interesse').value,
      data: new Date().toLocaleDateString('pt-BR')
    };

    const resultado = validarFormulario(dados);

    if (!resultado.valido) {
      exibirErros(resultado.erros);
    } else {
      limparErros();
      storage.salvarAdocao(dados);
      
      const msgSucesso = document.getElementById('mensagem-sucesso');
      msgSucesso.textContent = "Solicitação enviada e salva com sucesso!";
      msgSucesso.style.display = 'block';
      
      form.reset();
    }
  });
}