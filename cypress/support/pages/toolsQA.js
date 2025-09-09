
class Toolsqa {
    visitaSite() {
        cy.visit('/');
        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
    }
};
export default new Toolsqa();