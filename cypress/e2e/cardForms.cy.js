import CardForms from "../support/pages/cardForms";
describe('Preenchimento de Forms', () => {

    it('Acessa a pagina de Practice Form, preenche o formulario e recupera o mmodal de sucesso', () => {
        CardForms.acessaPracticeForm();
        CardForms.preencheForm();
        CardForms.modalSucesso();
    });
})