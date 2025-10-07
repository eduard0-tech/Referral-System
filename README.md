# 🏆 Sistema de Indicação - Desafio Vortex

![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen)

Este projeto é uma aplicação web de página única (SPA) desenvolvida como parte do processo seletivo para estágio do Laboratório Vortex. O objetivo é um sistema de cadastro de usuários com um programa de pontos por indicação (Referral System), construído do zero, seguindo todos os requisitos técnicos e funcionais propostos.

---

## 🚀 Funcionalidades

* **Autenticação de Usuários:** Interface com formulários de Cadastro e Login.
* **Animação de Interface:** Transição suave entre os formulários de autenticação em desktop.
* **Validação de Formulários:** Validação em tempo real no front-end para garantir a qualidade dos dados (formato de e-mail, complexidade da senha).
* **Painel do Usuário:** Após o login, o usuário é direcionado para uma página de perfil que exibe suas informações.
* **Sistema de Pontos:** Lógica de back-end para atribuir pontos a usuários que indicam novos membros.
* **Link de Indicação Único:** Cada usuário possui um link único para compartilhar.
* **Funcionalidade "Copiar Link":** Um botão que copia o link de indicação para a área de transferência do usuário.
* **Testes Automatizados (Front-end):** Testes de ponta-a-ponta com **Cypress** para validar a jornada completa do usuário, desde o cadastro até o logout.
* **Design Responsivo:** A aplicação é totalmente funcional e visualmente agradável tanto em desktops quanto em dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
* **React (com Vite):** *Justificativa:* Escolhido por sua vasta popularidade no mercado, ecossistema robusto e arquitetura baseada em componentes, que facilita a criação de interfaces complexas e reutilizáveis. O Vite foi utilizado como ferramenta de build por sua incrível velocidade de desenvolvimento.
* **CSS Puro:** *Justificativa:* Para atender ao requisito da "pegadinha" do desafio. Demonstra conhecimento profundo dos fundamentos do CSS, incluindo Flexbox, animações e media queries para responsividade, sem a dependência de frameworks.
* **Cypress:** *Justificativa:* Para garantir a qualidade e a robustez da aplicação, implementei testes de ponta-a-ponta que simulam a interação real do usuário, validando o fluxo completo de cadastro, visualização de perfil e logout.

### Back-end
* **Node.js com Express:** *Justificativa:* Para manter a consistência do ecossistema JavaScript (full-stack), facilitando a comunicação entre front e back. O Express é um framework minimalista e poderoso, ideal para a construção de APIs RESTful de forma rápida e eficiente.
* **MongoDB (com Mongoose e Atlas):** *Justificativa:* Sua natureza NoSQL e orientada a documentos (JSON) se alinha perfeitamente com o JavaScript. O Mongoose foi utilizado para modelagem dos dados, e o MongoDB Atlas para a hospedagem do banco de dados na nuvem.

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação completa na sua máquina.

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [Git](https://git-scm.com/)
* Um editor de código (ex: [VS Code](https://code.visualstudio.com/))

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/eduard0-tech/Referral-System.git
    cd vortex-referral-system 
    ```
2.  **Instale as dependências do Back-end:**
    ```bash
    cd backend
    npm install
    ```

3.  **Configure as Variáveis de Ambiente do Back-end:**
    * Na pasta `backend`, crie um arquivo `.env`.
    * Adicione as variáveis `PORT` e `MONGO_URI`.

4.  **Instale as dependências do Front-end:**
    ```bash
    cd ../frontend
    npm install
    ```

5.  **Rode a Aplicação:**
    * Você precisará de **dois terminais**.
    * No **primeiro terminal**, na pasta `backend`, inicie a API:
        ```bash
        npm run dev
        ```
    * No **segundo terminal**, na pasta `frontend`, inicie a aplicação React:
        ```bash
        npm run dev
        ```
    * Acesse `http://localhost:5173` no seu navegador.

### Rodando os Testes

* **Para rodar os testes do Front-end (Cypress):**
    * Com a aplicação front-end rodando (`npm run dev`), abra um novo terminal na pasta `frontend`.
    ```bash
    npm run cy:run
    ```

---

## 🤖 Colaboração com IA

Neste projeto, utilizei o Google Gemini como uma ferramenta de aceleração e "pair programming partner". A IA foi empregada estrategicamente para otimizar o tempo e validar decisões técnicas, permitindo um foco maior na qualidade do código e na resolução de problemas complexos.

A colaboração se deu nos seguintes pontos:

* **Validação de Arquitetura:** Utilizei a IA para discutir e validar a arquitetura inicial do projeto, como a decisão de usar um monorepo para organizar o front-end e o back-end, alinhando a estrutura com as práticas de mercado para projetos full-stack.

* **Diagnóstico de Bugs:** Em momentos de depuração, a IA atuou como uma ferramenta de diagnóstico. Ao encontrar bugs complexos (como conflitos de especificidade em CSS, erros de `non-fast-forward` no Git ou seletores ambíguos no Cypress), eu apresentava o problema e a IA sugeria possíveis causas, comandos de verificação e diferentes abordagens para a solução, o que acelerou a identificação da causa raiz.

* **Exploração de Boas Práticas:** Ao decidir ir além dos requisitos e implementar testes, consultei a IA para entender as melhores práticas para estruturar testes E2E com Cypress em um ambiente React, otimizando o tempo de pesquisa e setup.

### Principal Resultado da Colaboração

O uso da IA como ferramenta de apoio me permitiu iterar sobre o código em alta velocidade. Em vez de gastar tempo excessivo em pesquisas para resolver problemas específicos de configuração ou bugs, pude obter insights direcionados, validar minhas próprias hipóteses e focar meu tempo na aplicação dos conceitos e na construção de um produto final de maior qualidade. A ferramenta atuou como um catalisador para minha própria capacidade de resolução de problemas e aprendizado contínuo.
