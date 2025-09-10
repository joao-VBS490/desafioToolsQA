const variables = require('../pages/variaveis dinamicas/var_practiceForm');
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
    cardForms(){
        cy.visit('/automation-practice-form');
        cy.get('.text-center').should('have.text', 'Practice Form');
        cy.get('#firstName').type(variables.firstName); 
        cy.get('#lastName').type(variables.lastName); 
        cy.get('#userEmail').type(variables.email); 
        cy.get('#genterWrapper .custom-control-input').then(variables.genero)
        cy.get('#userNumber').type(variables.celular); 
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('January');
        cy.get('.react-datepicker__year-select').select('2007');
        cy.get('.react-datepicker__day--015').click();
        cy.get('#subjectsInput').type('Maths{enter}'); 
        cy.get('#hobbiesWrapper .custom-control-input').then(variables.hobbies);
        cy.get('#uploadPicture').attachFile('musica'); 
        cy.get('#currentAddress').type(variables.rua); 
        cy.get('#state').click();
        cy.get('#react-select-3-option-0').click();
        cy.get('#city').click(); 
        cy.get('#react-select-4-option-0').click();
        cy.get('#submit').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#closeLargeModal').click();
        
    }
};
export default new Toolsqa();