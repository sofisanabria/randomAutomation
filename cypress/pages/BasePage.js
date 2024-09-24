import "cypress-xpath";

class BasePage {
  getSection = (section) => {
    return cy.xpath(`//*[@id="header"]//a[contains(text(), '${section}')]`);
  };
  goToSection = (section) => {
    this.getSection(section).click();
  };
}
export default BasePage;
