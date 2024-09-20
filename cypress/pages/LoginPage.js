import { default as BasePage } from "./BasePage";

class LoginPage extends BasePage {
  elements = {
    getEmailField: () => cy.get('[data-qa="login-email"]'),

    getPasswordField: () => cy.get('[data-qa="login-password"]'),

    getLoginBtn: () => cy.get('[data-qa="login-button"]'),

    getRegisterEmailField: () => cy.get('[data-qa="signup-email"]'),

    getRegisterNameField: () => cy.get('[data-qa="signup-name"]'),

    getRegisterBtn: () => cy.get('[data-qa="signup-button"]'),
  };

  correctLogin = (email, password) => {
    this.elements.getEmailField().click().type(email);
    this.elements.getPasswordField().click().type(password);
    this.elements.getLoginBtn().click();
  };
  registerForm = (name, email) => {
    this.elements.getRegisterNameField().click().type(name);
    this.elements.getRegisterEmailField().click().type(email);
    this.elements.getRegisterBtn().click();
  };
}
export default LoginPage;
