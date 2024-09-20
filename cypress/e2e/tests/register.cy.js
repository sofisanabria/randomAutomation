import { default as LoginPage } from "../../pages/LoginPage";
import { faker } from "@faker-js/faker";
import RegisterPage from "../../pages/RegisterPage";

describe("Register Test", () => {
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  beforeEach(() => {
    cy.visit("");
    loginPage.goToSection("Login");
  });

  it("Should register new user with complete data", () => {
    loginPage.registerForm(faker.person.firstName(), faker.internet.email());
    registerPage.fillRegisterForm(
      "1",
      faker.person.zodiacSign(),
      "16",
      "June",
      "2000",
      faker.person.firstName("male"),
      faker.person.lastName(),
      faker.company.name(),
      "406",
      "123",
      "United States",
      "Oregon",
      "Redmond",
      "123",
      faker.phone.number()
    );
    registerPage.goToSection("Home");
    registerPage.getSection("Logout").should("be.visible");
  });
  it("Should register a new user with basic data", () => {
    loginPage.registerForm(faker.person.firstName(), faker.internet.email());
    registerPage.fillBasicForm(
      faker.person.zodiacSign(),
      faker.person.firstName("male"),
      faker.person.lastName(),
      "406",
      "United States",
      "Oregon",
      "Redmond",
      "123",
      faker.phone.number()
    );
    registerPage.goToSection("Home");
    registerPage.getSection("Logout").should("be.visible");
  });
  it("Should not redirect to register page without email", () => {
    loginPage.registerForm(faker.person.firstName(), " ");
    loginPage.elements.getRegisterBtn().should("be.visible");
  });
});
