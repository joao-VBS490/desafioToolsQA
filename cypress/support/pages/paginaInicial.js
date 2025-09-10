const variables = require('./variaveis dinamicas/var_practiceForm');
class Toolsqa {
    visitaSite() {
        cy.visit('https://demoqa.com/');
        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible');
    }
    cards() {
        cy.get('.card-body').then((cards) => {
            cy.wrap(cards).each((card) => {
                cy.wrap(card).find('h5').then((titulo) => {
                    const textoTitulo = titulo.text();
                    cy.log(textoTitulo);
                });
            });
        });
        
    }
}
export default new Toolsqa();