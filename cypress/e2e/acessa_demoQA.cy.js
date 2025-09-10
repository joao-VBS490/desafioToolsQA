import toolsQA from '../support/pages/toolsQA';
describe('Automação da aba forms do Demo QA', () => {
  
  beforeEach('Acessa o site Demo QA', () => {
    toolsQA.visitaSite();
  });
  it('valida se o site esta sendo acessado corretamente', () => {
    toolsQA.cards();
  });

  it.only('navegando a aba forms', () => {
    toolsQA.cardForms();
  });
});