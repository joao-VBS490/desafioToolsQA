class webTables {
    ListaMenu(){
        cy.get('.card-body').contains('Elements').click();
        cy.navegaMenu(["Elements"], 
            ["Web Tables"]);
    }
}

export default new webTables();