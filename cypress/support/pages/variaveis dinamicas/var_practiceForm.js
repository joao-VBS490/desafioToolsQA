const { faker } = require('@faker-js/faker/locale/pt_BR');

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const celular = faker.string.numeric(10);
const rua = faker.location.streetAddress()
console.log(celular)

const aniversario = faker.date.between({ from: '2007-01-01', to: '2007-12-31' });
const genero = (($options) =>{
    const gender = Math.floor(Math.random() * $options.length);
    cy.wrap($options[gender]).click({force: true});
});
const hobbies = (($options) =>{
    const hobbie = Math.floor(Math.random() * $options.length);
    cy.wrap($options[hobbie]).click({force: true});
});
const idade = faker.number.int({ min: 18, max: 60 });
const salario = faker.number.int({ min: 1000, max: 10000 });
const departamento = faker.commerce.department();

module.exports = {
    firstName,
    lastName,
    email,
    celular,
    aniversario,
    genero,
    hobbies,
    rua, 
    idade,
    salario,
    departamento
};