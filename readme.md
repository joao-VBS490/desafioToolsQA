# Automação Cypress - Demo QA

## Visão Geral

Este projeto tem como objetivo automatizar testes da **página inicial e da aba Forms** do site [Demo QA](https://demoqa.com/), utilizando **Cypress** e **Page Object Model (POM)**. A abordagem busca manter os testes organizados, reutilizáveis e fáceis de manter.

---

## Pagina Inicial

## Estrutura do Projeto

### Pastas e Arquivos Principais

```
cypress/
├─ e2e/
│  └─ paginaInicial.cy.js       # Arquivo de teste principal
├─ support/
│  └─ pages/
│     ├─ paginaInicial.js       # Métodos da página inicial (POM)
│     └─ variaveis dinamicas/
│        └─ var_practiceForm.js # Variáveis dinâmicas do formulário

```

---

## Arquivo `paginaInicial.cy.js`

**Objetivo:** Contém os cenários de teste para a página inicial e a navegação até a aba Forms.

### Pontos de Interesse

- **Importação do POM:** Permite utilizar métodos reutilizáveis da página (`paginaInicial.js`).
- **`beforeEach`:** Garante que o site seja carregado e validado antes de cada teste.
- **Cenários de teste:**
    - Validar se os **cards** da página estão visíveis e logar seus títulos.
    - Navegar para a aba **Forms** e realizar validações específicas (teste em foco com `it.only`).

---

## Arquivo `paginaInicial.js` (POM)

**Objetivo:** Abstrair ações da página inicial para que os testes fiquem limpos e reutilizáveis.

### Pontos de Interesse

- **`visitaSite()`**
    - Abre o site `https://demoqa.com/`.
    - Verifica se o logo da página está visível (`img[src="/images/Toolsqa.jpg"]`).
- **`cards()`**
    - Captura todos os cards na página (`.card-body`).
    - Itera sobre cada card e loga o título (`h5`).
- **Exportação**
    - `export default new Toolsqa()` → Permite utilizar a instância do POM diretamente nos testes.

---

## Arquivo `var_practiceForm.js`

**Objetivo:** Gerar **dados dinâmicos** para preencher formulários de teste usando a biblioteca **Faker**.

### Pontos de Interesse

- **Dados pessoais**
    - `firstName`, `lastName`, `email`, `celular`, `rua`, `aniversario`, `idade`
    - Todos gerados aleatoriamente para testes realistas.
- **Seleção aleatória**
    - `genero($options)` → seleciona aleatoriamente uma opção de gênero.
    - `hobbies($options)` → seleciona aleatoriamente um hobby da lista.
- **Dados profissionais**
    - `salario` → número aleatório entre 1000 e 10000.
    - `departamento` → departamento gerado aleatoriamente via Faker.
- **Integração com os testes**
    - Esses dados são importados e utilizados para preencher formulários na aba **Forms**.
    - Permite executar testes de forma dinâmica sem precisar de dados fixos.

---

## Boas práticas adotadas

- **Page Object Model (POM):** Separa a lógica de interação da página dos testes, facilitando manutenção.
- **Uso de Faker para dados dinâmicos:** Garante testes mais robustos e menos propensos a falsos positivos.
- **`beforeEach` para setup:** Garante que cada teste comece em um estado consistente.
- **`cy.wrap` e `.each()`** → Iteração sobre múltiplos elementos de forma confiável.
- **`it.only` durante desenvolvimento:** Foco em testes específicos sem rodar toda a suite.

## Practice Forms

## Arquivo `cardForms.cy.js`

**Objetivo:** Automatizar o preenchimento do **Practice Form** e validação do modal de sucesso.

**Cenário de teste:**

- `acessaPracticeForm()` → acessa a página e valida o título.
- `preencheForm()` → preenche formulário com dados dinâmicos.
- `modalSucesso()` → valida e fecha o modal de sucesso.

## Arquivo `cardForms.js` (POM)

**Objetivo:** Abstrair ações de preenchimento do formulário.

**Principais métodos:**

- `acessaPracticeForm()` → navegação e validação da página.
- `preencheForm()` → preenche todos os campos do form, incluindo:
    - Nome, sobrenome, email, celular, endereço.
    - Seleção de gênero e hobbies aleatórios.
    - Data de nascimento, upload de arquivo, estado e cidade.
- `modalSucesso()` → valida modal e fecha-o.

**Integração com dados dinâmicos:**

- Usa variáveis do `var_practiceForm.js` para preencher os campos de forma aleatória.

---

# Dados Dinâmicos

## Arquivo `var_practiceForm.js`

**Objetivo:** Gerar dados aleatórios com **Faker** para testes de formulários.

**Variáveis principais:**

- `firstName`, `lastName`, `email`, `celular`, `rua`, `aniversario`, `idade`
- `genero($options)` → seleciona gênero aleatoriamente.
- `hobbies($options)` → seleciona hobby aleatoriamente.
- `salario` e `departamento` → dados adicionais de teste.

**Uso:** Importado nos POMs para preencher formulários com dados realistas.

---

# Boas práticas adotadas

- **POM** para separar lógica de testes e interação.
- **Faker** para dados dinâmicos e realistas.
- Validação visual de elementos importantes (cards, títulos, modais).
- `beforeEach` para garantir estado consistente.
- Iterações confiáveis com `cy.wrap` e `.each()`.

## Web Tables

## Arquivo `webTables.cy.js`

**Objetivo:** Automatizar o fluxo de **Web Tables**, incluindo navegação, criação, edição e exclusão de registros.

**Cenário de teste:**

- Acessa a página inicial via `pInicial.visitaSite()` e valida cards.
- Navega pelo submenu para **Web Tables**.
- Executa os métodos do POM `webTables.js`:
    - `ListaMenu()` → seleciona a opção Elements no menu.
    - `criaRegistro()` → cria um novo registro com dados dinâmicos.
    - `editaRegistro()` → edita o registro criado.
    - `deletaRegistro()` → remove o registro da tabela.

---

## Arquivo `webTables.js` (POM)

**Objetivo:** Abstrair as ações de manipulação de registros na Web Table.

### Pontos de Interesse

- **`ListaMenu()`**
    - Clica no card “Elements” para acessar o menu de Web Tables.
- **`criaRegistro()`**
    - Clica em “Add New Record”.
    - Valida se o modal de registro está visível.
    - Preenche todos os campos usando `var_practiceForm.js`:
        - Nome, sobrenome, email, idade, salário, departamento.
    - Salva o registro e mantém o nome em alias `@nome` para referência futura.
- **`editaRegistro()`**
    - Busca o registro pelo nome salvo (`@nome`).
    - Abre o modal de edição e adiciona “ editado” ao primeiro e último nome.
    - Salva alterações.
- **`deletaRegistro()`**
    - Deleta o primeiro registro da tabela usando o botão de delete.
- **Exportação**
    - `export default new webTables()` → Instância do POM pronta para uso nos testes.

---

## Integração com Dados Dinâmicos

- Reaproveita as variáveis do `var_practiceForm.js` para criar registros únicos e realistas, garantindo testes confiáveis.

---

## Boas práticas adotadas

- Uso de **POM** para separar a lógica da página e testes.
- **Alias (`cy.wrap(...).as()`)** para referenciar dinamicamente dados entre métodos.
- Validação visual de elementos e modais.
- Iteração consistente com Cypress para ações em tabelas dinâmicas.

## API

## Estrutura do módulo

- **Pasta `usuarios`** → endpoints relacionados a usuários:
    1. **criaUsuario**
        - Método: POST
        - Body: `{ "userName": "{{$randomUserName}}", "password": "{{senha}}" }`
        - Pós-requisito: salva `userName` e `userId` em variáveis de coleção (`pm.collectionVariables`).
        - Valida status `201`.
    2. **geraTokenAcesso**
        - Método: POST
        - Body: `{ "userName": "{{userName}}", "password": "{{senha}}" }`
        - Pós-requisito: salva token de acesso (`acessToken`) em variável de coleção.
    3. **Authorized**
        - Método: POST
        - Valida autorização do usuário.
    4. **detalhesUsuario**
        - Método: GET
        - URL: `{{accountBaseUrl}}User/{{userId}}`
        - Recupera detalhes do usuário criado.
- **Pasta `Livraria`** → endpoints relacionados à livraria:
    1. **listaLivros**
        - Método: GET
        - Retorna todos os livros disponíveis na API (`{{booksBaseUrl}}`).
    2. **alugaLivros**
        - Método: POST
        - Body: `{ "userId": "{{userId}}", "collectionOfIsbns": [{"isbn": "9781449365035"}, {"isbn": "9781449337711"}] }`
        - Permite alugar livros para o usuário autenticado.

---

## Variáveis da coleção

- `accountBaseUrl` → Base URL da API de usuários.
- `booksBaseUrl` → Base URL da API da livraria.
- `userId` → ID do usuário criado dinamicamente.
- `userName` → Nome do usuário gerado aleatoriamente.
- `senha` → Senha do usuário.
- `acessToken` → Token de autenticação gerado após login.

---

## Pontos de Interesse

- **Fluxo de usuário completo**
    - Criação → Geração de token → Validação de autorização → Recuperação de detalhes.
- **Integração com testes de front-end**
    - Variáveis como `userId` e `acessToken` podem ser reutilizadas em testes Cypress para login, formulário ou operações na livraria.
- **Testes de livraria**
    - Permite listar e alugar livros programaticamente, simulando cenários de negócio.
- **Postman scripts**
    - `pm.collectionVariables.set(...)` → mantém dados persistentes entre requisições.
    - `pm.response.to.have.status(201)` → valida resposta esperada.

---

## Boas práticas

- Separação de endpoints por funcionalidade (`usuarios`, `Livraria`).
- Uso de variáveis dinâmicas para integração entre requisições e testes front-end.
- Scripts pós-requisição para validar respostas e salvar dados.
- Possibilidade de usar o mesmo fluxo de API em CI/CD para automação contínua.

## Menu Lateral

Além dos módulos anteriores (Página Inicial, Forms e Web Tables), adicionamos um módulo extra **Menu Lateral**, focado em navegação hierárquica utilizando **arrays de níveis**, que permite clicar automaticamente em menus e submenus de forma dinâmica.

---

# Módulo Extra: Menu Lateral com Arrays

## Arquivo `menuLateral.js`

**Objetivo:** Criar um método genérico para navegar em menus hierárquicos, mesmo com múltiplos níveis de submenu.

### Método `navegaMenu(niveis)`

- Recebe um array de arrays, onde cada array interno representa **uma sequência de cliques** no menu/submenu.
- Exemplo de uso:

```jsx
cy.navegaMenu([['Elements'], ['Web Tables']])

```

- O método percorre cada nível do menu, clica no item e garante que o próximo item esteja visível antes de prosseguir.
- Suporta qualquer profundidade de menu, facilitando testes de navegação complexos.

### Lógica Interna

1. Itera pelos **níveis principais** (`niveis.forEach`).
2. Itera pelos itens de cada nível (`nivel.forEach`).
3. Clica no item (`cy.get('.header-text, .text').contains(texto).click()`).
4. Se não for o último item do nível, valida que o próximo item está visível (`should('be.visible')`).

---

## Arquivo `commands.js`

**Objetivo:** Registrar o comando customizado `cy.navegaMenu` para ser usado em qualquer teste.

### Registro do comando

```jsx
Cypress.Commands.add('navegaMenu', (niveis) => {
  niveis.forEach(nivel => {
    nivel.forEach((texto, i) => {
      cy.get('.header-text, .text').contains(texto).click({ force: true });
      if (i < nivel.length - 1) {
        cy.get('.text').contains(nivel[i + 1]).should('be.visible');
      }
    });
  });
});

```

### Pontos de Interesse

- **Reutilizável:** qualquer teste que precise navegar no menu pode usar esse comando.
- **Força o clique (`{ force: true }`)** para lidar com elementos sobrepostos ou escondidos.
- **Validação automática do próximo item** garante que o menu está realmente expandido antes de avançar.
- Integra-se com outros módulos, como **Web Tables** e **Forms**, simplificando a navegação complexa.

---

## Boas práticas adotadas

- Transformar funcionalidades complexas em **comandos Cypress reutilizáveis**.
- Uso de **arrays hierárquicos** para representar menus multi-nível de forma intuitiva.
- Garantia de visibilidade antes do clique no próximo nível para evitar erros de sincronização.
- Permite escrever testes mais limpos, sem repetir lógica de navegação em cada caso.
