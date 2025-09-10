import 'cypress-file-upload';
import menuLateral from './pages/menuLateral';

Cypress.Commands.add('navegaMenu', (caminho) => {
    caminho.forEach(nivel => {
        const [grupo, subItem] = nivel;
        cy.contains('.group-header', grupo).then($grupo => {
            if ($grupo.attr('aria-expanded') !== 'true') {
                cy.wrap($grupo).click();
            }
        });
        cy.contains('.group-header + .element-list .menu-list > li', subItem).click();
    });
});