export const templates = {
  inicio: () => `
    <section id="inicio" class="pg">
      <div class="hero">
        <img src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300" alt="Gato">
        <div>
          <h2>Nossa História</h2>
          <p>Fundada em 14/03/2018 por Tatiana Martins Loureiro, a ONG ampara cães e gatos resgatados.</p>
        </div>
      </div>

      <div class="grid-12">
        <div class="col-4 stat-card">
          <h3>+450</h3>
          <p>Resgatados</p>
        </div>
        <div class="col-4 stat-card">
          <h3>+380</h3>
          <p>Adotados</p>
        </div>
        <div class="col-4 stat-card">
          <h3>100%</h3>
          <p>Castrados</p>
        </div>
      </div>
    </section>
  `,

  projetos: () => `
    <section id="adocao" class="pg text-center">
      <h2>Animais para Adoção</h2>
      <div class="filtro-container">
        <select id="f-esp">
          <option value="todos">Todos</option>
          <option value="gato">Gatos</option>
          <option value="cao">Cachorros</option>
        </select>
      </div>

      <div class="grupo-especie" id="grupo-gatos">
        <h3>Gatos</h3>
        <div class="grid-12 grid-pets">
          <article class="card pet col-6" data-e="gato">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600" alt="Mia">
            <h3>Mia</h3>
            <p>🐱 Gato • 1 ano</p>
            <a href="#cadastro" class="btn">Adotar</a>
          </article>
          <article class="card pet col-6" data-e="gato">
            <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600" alt="Oliver">
            <h3>Oliver</h3>
            <p>🐱 Gato • 2 anos</p>
            <a href="#cadastro" class="btn">Adotar</a>
          </article>
        </div>
      </div>

      <div class="grupo-especie" id="grupo-caes">
        <h3>Cães</h3>
        <div class="grid-12 grid-pets">
          <article class="card pet col-6" data-e="cao">
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600" alt="Thor">
            <h3>Thor</h3>
            <p>🐶 Cão • 3 anos</p>
            <a href="#cadastro" class="btn">Adotar</a>
          </article>
          <article class="card pet col-6" data-e="cao">
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600" alt="Luna">
            <h3>Luna</h3>
            <p>🐶 Cão • 1 ano</p>
            <a href="#cadastro" class="btn">Adotar</a>
          </article>
        </div>
      </div>
    </section>
  `,

  cadastro: () => `
    <section id="cadastro" class="pg">
      <h2>Quero Adotar</h2>
      <div id="mensagem-sucesso" class="msg-sucesso" style="display:none;"></div>
      
      <form id="formAdocao" novalidate>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div class="field-group">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" placeholder="Seu nome">
            <span class="erro-campo" id="erro-nome"></span>
          </div>

          <div class="field-group">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" placeholder="000.000.000-00" maxlength="14">
            <span class="erro-campo" id="erro-cpf"></span>
          </div>
        </fieldset>

        <fieldset>
          <legend>Contato e Localização</legend>
          <div class="field-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" placeholder="seu@email.com">
            <span class="erro-campo" id="erro-email"></span>
          </div>

          <div class="field-group">
            <label for="tel">Telefone / WhatsApp:</label>
            <input type="tel" id="tel" placeholder="(00) 00000-0000" maxlength="15">
            <span class="erro-campo" id="erro-tel"></span>
          </div>

          <div class="field-group">
            <label for="cep">CEP:</label>
            <input type="text" id="cep" placeholder="00000-000" maxlength="9">
            <span class="erro-campo" id="erro-cep"></span>
          </div>
        </fieldset>

        <fieldset>
          <legend>Interesse em Adoção</legend>
          <div class="field-group">
            <label for="interesse">Preferência de Pet:</label>
            <select id="interesse">
              <option value="">Selecione...</option>
              <option value="gato">Adotar Gato</option>
              <option value="cao">Adotar Cão</option>
              <option value="indiferente">Indiferente (Gato ou Cão)</option>
            </select>
            <span class="erro-campo" id="erro-interesse"></span>
          </div>
        </fieldset>

        <button type="submit">Enviar Solicitação</button>
      </form>
    </section>
  `,

  solicitacoes: (solicitacoes) => {
    if (!solicitacoes || solicitacoes.length === 0) {
      return `
        <section class="pg text-center">
          <h2>Solicitações Registadas</h2>
          <p>Nenhuma solicitação de adoção foi efetuada até ao momento.</p>
        </section>
      `;
    }

    const linhas = solicitacoes.map(s => `
      <tr>
        <td>${s.nome}</td>
        <td>${s.email}</td>
        <td>${s.tel}</td>
        <td>${s.interesse.toUpperCase()}</td>
        <td>${s.data}</td>
      </tr>
    `).join('');

    return `
      <section class="pg">
        <h2>Solicitações Registadas</h2>
        <div style="overflow-x: auto;">
          <table class="tabela-solicitacoes">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Interesse</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              ${linhas}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }
};