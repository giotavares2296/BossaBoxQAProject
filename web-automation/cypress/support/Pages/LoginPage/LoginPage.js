import {
    btnSignup,
} from './LoginPageSelectors';

export default class LoginPage {
    clickBtnSignup = () => cy.get(btnSignup).click()

}