import { default as BasePage } from "./BasePage";

class RegisterPage extends BasePage {
  elements = {
    getPwdField: () => cy.get('[data-qa="password"]'),

    getDateDdl: () => cy.get('[data-qa="days"]'),

    getMonthDdl: () => cy.get('[data-qa="months"]'),

    getYearDdl: () => cy.get('[data-qa="years"]'),

    getFirstNameField: () => cy.get('[data-qa="first_name"]'),

    getLastNameField: () => cy.get('[data-qa="last_name"]'),

    getCompanyField: () => cy.get('[data-qa="company"]'),

    getAdressField: () => cy.get('[data-qa="address"]'),

    getAdress2Field: () => cy.get('[data-qa="address2"]'),

    getCountryDdl: () => cy.get('[data-qa="country"]'),

    getStateField: () => cy.get('[data-qa="state"]'),

    getCityField: () => cy.get('[data-qa="city"]'),

    getZipCodeField: () => cy.get('[data-qa="zipcode"]'),

    getMobileNumberField: () => cy.get('[data-qa="mobile_number"]'),

    getCreateAccountBtn: () => cy.get('[data-qa="create-account"]'),
  };

  getGenderRbtn = (gender) => cy.get(`#id_gender${gender}`); // 1-Mr. 2-Mrs.

  fillRegisterForm = (
    gender,
    pwd,
    date,
    month,
    year,
    fname,
    lname,
    company,
    adress,
    adress2,
    country,
    state,
    city,
    zipcode,
    mobile
  ) => {
    this.getGenderRbtn(gender).click();
    this.elements.getPwdField().click().type(pwd);
    this.elements.getDateDdl().select(date);
    this.elements.getMonthDdl().select(month);
    this.elements.getYearDdl().select(year);
    this.elements.getFirstNameField().click().type(fname);
    this.elements.getLastNameField().click().type(lname);
    this.elements.getCompanyField().click().type(company);
    this.elements.getAdressField().click().type(adress);
    this.elements.getAdress2Field().click().type(adress2);
    this.elements.getCountryDdl().select(country);
    this.elements.getStateField().click().type(state);
    this.elements.getCityField().click().type(city);
    this.elements.getZipCodeField().click().type(zipcode);
    this.elements.getMobileNumberField().click().type(mobile);
    this.elements.getCreateAccountBtn().click();
  };

  fillBasicForm = (
    pwd,
    fname,
    lname,
    adress,
    country,
    state,
    city,
    zipcode,
    mobile
  ) => {
    this.elements.getPwdField().click().type(pwd);
    this.elements.getFirstNameField().click().type(fname);
    this.elements.getLastNameField().click().type(lname);
    this.elements.getAdressField().click().type(adress);
    this.elements.getCountryDdl().select(country);
    this.elements.getStateField().click().type(state);
    this.elements.getCityField().click().type(city);
    this.elements.getZipCodeField().click().type(zipcode);
    this.elements.getMobileNumberField().click().type(mobile);
    this.elements.getCreateAccountBtn().click();
  };
}
export default RegisterPage;
