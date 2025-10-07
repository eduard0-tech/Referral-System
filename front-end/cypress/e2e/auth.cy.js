// cypress/e2e/auth.cy.js - VERSÃO FINAL COMPLETA

describe('Jornada Completa do Usuário no Front-End', () => {

    it('Deve permitir o cadastro, interagir com o perfil e fazer logout com sucesso', () => {

        // --- 1. ETAPA DE CADASTRO ---
        cy.visit('/');
        cy.contains('h2', 'Login'); // Confirma que a página inicial é de login

        // Troca para o formulário de cadastro
        cy.get('.form-toggle-text .switch-link').contains('Cadastre-se').click();
        cy.contains('h2', 'Crie sua Conta');

        const userName = 'Usuário Final';
        cy.get('.register-container input[placeholder="Nome"]').type(userName);
        cy.get('.register-container input[placeholder="Email"]').type('usuario.final@exemplo.com');
        cy.get('.register-container input[placeholder="Senha"]').type('senhaValida123');

        // Envia o formulário
        cy.get('.register-container button[type="submit"]').contains('Cadastrar').click();


        cy.contains('h1', `Olá, ${userName}!`, { timeout: 2000 });

        cy.get('.score-card .points').should('contain', '0'); // A pontuação inicial deve ser 0
        cy.get('.referral-link-box input').invoke('val').should('not.be.empty'); // O input do link não deve estar vazio
        cy.get('.referral-link-box button').contains('Copiar').click();
        cy.contains('Link copiado com sucesso!');


        cy.get('.logout-button').click();

        cy.contains('h2', 'Login');
    });

});