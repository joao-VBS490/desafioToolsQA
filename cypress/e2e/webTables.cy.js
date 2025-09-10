import pInicial from "../support/pages/paginaInicial"
import webTables from "../support/pages/webTables"
// import webTables from "../support/pages/webTables"
describe('Preenchimento de Web Tables', () => {
    it('acessando web tables via submenu', () => {
        pInicial.visitaSite();
        pInicial.cards();
        webTables.ListaMenu();
        
    })
})