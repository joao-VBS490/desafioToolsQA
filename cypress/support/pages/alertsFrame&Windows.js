class afw {
    visitaafw() {
        cy.get('.card-body').contains('Alerts, Frame & Windows').click();
        cy.url().should('include', 'alertsWindows');
    //     cy.navegaMenu(["Alerts, Frame & Windows"],
    //         ["Browser Windows"]);
    }
}

export default new afw();