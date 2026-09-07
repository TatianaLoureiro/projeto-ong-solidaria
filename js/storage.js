const CHAVE = 'patas_amor_adocao_db';

export const storage = {
  obterAdocoes: () => {
    const dados = localStorage.getItem(CHAVE);
    return dados ? JSON.parse(dados) : [];
  },

  salvarAdocao: (solicitacao) => {
    const lista = storage.obterAdocoes();
    lista.push(solicitacao);
    localStorage.setItem(CHAVE, JSON.stringify(lista));
  }
};