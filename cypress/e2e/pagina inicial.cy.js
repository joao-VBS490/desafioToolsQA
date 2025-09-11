import pInicial from '../support/pages/paginaInicial';
describe('Automação da aba forms do Demo QA', () => {
  
  beforeEach('Acessa o site Demo QA', () => {
    pInicial.visitaSite();
  });
  it('valida os cards visiveis', () => {
    pInicial.cards();
  });


});

