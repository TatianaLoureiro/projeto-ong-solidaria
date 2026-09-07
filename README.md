# Projeto ONG Solidária - Patas de Amor

Uma aplicação web no formato *Single Page Application* (SPA) desenvolvida para a gestão e facilitação do processo de adoção de animais resgatados.

---

## 🚀 Sobre o Projeto

O **Patas de Amor** é uma plataforma focada em conectar animais resgatados a novos lares. O sistema foi construído sem dependências de frameworks externos, utilizando JavaScript modular puro para gerenciar o roteamento dinâmico de páginas, a validação de formulários e a persistência de dados.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Design System próprio, variáveis CSS e layout responsivo baseado em Grid de 12 colunas.
* **JavaScript (ES6+):** Arquitetura modular contendo:
* Roteador de páginas via eventos de `hashchange`.
* Motor de validação com expressões regulares (Regex) para CPF, e-mail e telefone.
* Gerenciador de armazenamento via `localStorage`.


* **Git & GitHub:** Versionamento e gestão de projeto seguindo as boas práticas de mercado.

---

## 📐 Estrutura de Ramificação (GitFlow)

O repositório adota o modelo de ramificação **GitFlow** para manter a integridade e rastreabilidade do código:

* **`main`:** Branch de produção contendo apenas versões estáveis e testadas.
* **`develop`:** Branch de integração contínua para centralizar novos desenvolvimentos.
* **`feature/*`:** Branches temporárias utilizadas para a criação isolada de novas funcionalidades (ex.: `feature/validacao-formulario`).

---

## 📌 SemVer e Versionamento

O projeto utiliza **Semantic Versioning** (`MAJOR.MINOR.PATCH`):

* **`v1.0.0`:** Primeira release estável contendo a estrutura SPA, Design System, formulários validados e salvamento em `localStorage`.

---

## ⚙️ Como Executar o Projeto

1. **Clonar o repositório:**
```bash
git clone https://github.com/TatianaLoureiro/projeto-ong-solidaria.git

```


2. **Acessar a pasta do projeto:**
```bash
cd projeto-ong-solidaria

```


3. **Executar a aplicação:**
* Abra o arquivo `index.html` diretamente em seu navegador ou utilize uma extensão de servidor local como o **Live Server** no VS Code.