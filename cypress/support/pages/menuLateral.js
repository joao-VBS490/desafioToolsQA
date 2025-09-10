class menuLateral{
    
    ListaMenu(caminho){
        caminho.forEach(nivel => {
            const [grupo, subGrupo] = nivel;
            cy.contains('.group-header', grupo).then($grupo => {
                if ($grupo.attr('aria-expanded') !== 'true') {
                    cy.wrap($grupo).click();
                }
            });
        });
        cy.contains('.group-header + .element-list .menu-list > li', subItem).click();
    }
    
}



export default new menuLateral()