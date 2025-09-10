import 'cypress-file-upload';
import menuLateral from './pages/menuLateral';



Cypress.Commands.add('navegaMenu', (niveis) => {
  niveis.forEach(nivel => {
    nivel.forEach((texto, i) => {
      // tenta primeiro no header-text
      cy.get('.header-text, .text').contains(texto).click({ force: true });
      if (i < nivel.length - 1) {
        cy.get('.text').contains(nivel[i + 1]).should('be.visible');
      }
    });
  });
});