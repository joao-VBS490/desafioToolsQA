const variables = require('./variaveis dinamicas/var_practiceForm');

class webTables {
    ListaMenu(){
        cy.get('.card-body').contains('Elements').click();
        cy.navegaMenu(["Elements"], 
            ["Web Tables"]);
    }
    criaRegistro(){
        cy.get('#addNewRecordButton').click();
        cy.get('.modal').should('be.visible');
        cy.get('#firstName').type(variables.firstName)
        cy.wrap(variables.firstName).as('nome');
        cy.get('#lastName').type(variables.lastName);
        cy.get('#userEmail').type(variables.email);
        cy.get('#age').type(variables.idade);
        cy.get('#salary').type(variables.salario);
        cy.get('#department').type(variables.departamento);
        cy.get('#submit').click();
    }
    editaRegistro(){
        cy.get('@nome').then(nome => {
            cy.get('#searchBox').type(nome);
            cy.get('.mr-2').click();
            cy.get('.modal').should('be.visible');
            cy.get('#firstName').type(' editado')
            cy.get('#lastName').type(' editado')
            cy.get('#submit').click();
            
        });
        
    }
    deletaRegistro(){
        cy.get('[data-toggle="tooltip"][title="Delete"]').first().click();
    }
}


export default new webTables();