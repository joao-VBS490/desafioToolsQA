import CardForms from "../support/pages/cardForms";
import pInicial from "../support/pages/paginaInicial";
describe('Preenchimento de Forms', () => {

    beforeEach(() => {
        pInicial.visitaSite();
    });
    it('Acessa a pagina de Practice Form', () => {
        CardForms.acessaPracticeForm();
        CardForms.preencheForm();
        CardForms.modalSucesso();
    });
})