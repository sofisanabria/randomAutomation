import { credentials } from "../../data/credentials";
import LoginPage from "../../pages/LoginPage";

describe("Login Test", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit("");
    loginPage.goToSection("Login");
  });

  it("Should login with valid credentials", () => {
    loginPage.login(credentials.email, credentials.password);
    loginPage.getSection("Logout").should("be.visible");
  });
});
