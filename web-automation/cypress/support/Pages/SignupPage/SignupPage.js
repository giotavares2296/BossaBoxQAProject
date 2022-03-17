import {
    inputName,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    btnSignup,
    errorMessage
} from './SignupPageSelector';

export default class SignupPage {
    inputName = () => cy.get(inputName)
    inputEmail = () => cy.get(inputEmail)
    inputPassword = () => cy.get(inputPassword)
    inputConfirmPassword = () => cy.get(inputConfirmPassword)
    clickBtnSignup = () => cy.get(btnSignup).click()
    validateErrorMessageEmail = () =>  cy.get(errorMessage).should("have.text", "E-mail e/ou senha inválidos")
    validateErrorMessagePassword = () =>  cy.get(errorMessage).should("have.text", "As senhas não correspondem")
    validateErrorMessageEmptyField = () =>  cy.get(errorMessage).should("have.text", "Lembre-se de preencher os campos")
    validateErrorMessageShortPassword = () =>  cy.get(errorMessage).should("have.text", "A senha deve ter pelo menos 8 caracteres")
    validateErrorMessageRepeatedEmail = () =>  cy.get(errorMessage).should("have.text", "E-mail já cadastrado!")
}