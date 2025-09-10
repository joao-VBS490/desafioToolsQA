class menuLateral{

    navegaMenu(niveis) {
        niveis.forEach(nivel => {
            nivel.forEach((texto, i) => {
                cy.get('.header-text, .text').contains(texto).click();

                if (i < nivel.length - 1) {
                    cy.get('.text').contains(nivel[i + 1]).should('be.visible');
                }   
            });
        });
    }
}





export default new menuLateral()