import LoginPage from '../support/Pages/LoginPage/LoginPage'
import SignupPage from '../support/Pages/SignupPage/SignupPage'

const randomString = String(Math.ceil(Math.random()*1000000));
const randomEmail = randomString + "test@mail.com"


describe ('Signup', function () {

    let home
    home = new LoginPage();

    beforeEach(() => {
        cy.visit('dev.app.bossabox.com');
    })
    
    it('Signup Success', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputEmail().type(randomEmail);
        form.inputPassword().type('password@123');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
    })

    it('Try to signup with an incorrect Email', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputEmail().type('teste!mail.com');
        form.inputPassword().type('password@123');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessageEmail();
    })

    it('Try to signup with different password', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputEmail().type(randomEmail);
        form.inputPassword().type('password@12345');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessagePassword();
    })

    it('Try to signup with field name', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputEmail().type(randomEmail);
        form.inputPassword().type('password@12345');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessageEmptyField();
    })

    it('Try to signup with field email', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputPassword().type('password@12345');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessageEmptyField();
    })

    it('Try to signup with field password', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputEmail().type(randomEmail);
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessageEmptyField();
    })

    it('Try to signup with short password', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputEmail().type(randomEmail);
        form.inputPassword().type('password@123');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessageShortPassword();
    })    

    it('Try to signup with a repetead email', () => {
        let form
        form = new SignupPage();

        home.clickBtnSignup();
        form.inputName().type('Giovana Tavares');
        form.inputEmail().type('mail@teste.com');
        form.inputPassword().type('password@123');
        form.inputConfirmPassword().type('password@123');
        form.clickBtnSignup();
        form.validateErrorMessageRepeatedEmail();
    })    
})