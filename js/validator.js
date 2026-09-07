export function validarFormulario(dados) {
  const erros = {};

  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.nome = "Insira um nome válido (mínimo 3 caracteres).";
  }

  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!dados.cpf || !regexCPF.test(dados.cpf)) {
    erros.cpf = "CPF inválido. Use o formato 000.000.000-00.";
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!dados.email || !regexEmail.test(dados.email)) {
    erros.email = "Insira um e-mail válido.";
  }

  const regexTel = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  if (!dados.tel || !regexTel.test(dados.tel)) {
    erros.tel = "Telefone inválido. Use o formato (00) 00000-0000.";
  }

  const regexCEP = /^\d{5}-\d{3}$/;
  if (!dados.cep || !regexCEP.test(dados.cep)) {
    erros.cep = "CEP inválido. Use o formato 00000-000.";
  }

  if (!dados.interesse) {
    erros.interesse = "Selecione uma opção de interesse.";
  }

  return {
    valido: Object.keys(erros).length === 0,
    erros
  };
}

export function limparErros() {
  document.querySelectorAll('.erro-campo').forEach(el => el.textContent = '');
}

export function exibirErros(erros) {
  limparErros();
  for (const [campo, mensagem] of Object.entries(erros)) {
    const elSpan = document.getElementById(`erro-${campo}`);
    if (elSpan) {
      elSpan.textContent = mensagem;
    }
  }
}