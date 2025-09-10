class afw {
    visitaafw() {
        cy.get('.card-body').contains('Alerts, Frame & Windows').click();
        cy.url().should('include', 'alertsWindows');
    }
    btnNewWindow(){
        cy.get('#windowButton').click();
    }
    popupNewWindow(){
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
            cy.get('@windowOpen').should('be.called');
            cy.contains('This is a sample page').should('be.visible');
        });
    }
    
}

export default new afw();