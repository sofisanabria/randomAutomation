import { default as BasePage } from "./BasePage";

class ProductPage extends BasePage {
  elements = {
    getSearchProductBtn: () => cy.get("search_product"),

    getCategoryLink: (category) =>
      cy.xpath(`//*[contains(@href, '#${category}')]`),

    getClothesLink: (clothes) =>
      cy.xpath(`//*[@id="Women"]/div/ul/li['${clothes}']/a`),

    getBrandLink: (brand) =>
      cy.xpath(`//*[contains(@href, '/brand_products/${brand}')]`),

    getAddToCartBtn: () => cy.get(".productinfo .add-to-cart"),
  };

  searchProductBtn = (productName) =>
    elements.getSearchProductBtn().click().type(productName);

  selectCategory = (category, clothes) => {
    elements.getCategoryLink(category).click();
    elements.getClothesLink(clothes).click();
  };
  selectBrand = (brand) => {
    elements.getBrandLink(brand).click();
  };
  addToCart = () => {
    elements.getAddToCartBtn().click();
  };

  /*searchProductBtn(productName) {
    cy.get("search_product").click().type(productName);
  }
  selectCategory(category, clothes) {
    cy.xpath(`//*[contains(@href, '#${category}')]`).click();
    cy.xpath(`//*[@id="Women"]/div/ul/li['${clothes}']/a`).click();
  }

  selectBrand(brand) {
    cy.xpath(`//*[contains(@href, '/brand_products/${brand}')]`);
  }

  addToCart() {
    cy.get(".productinfo .add-to-cart");
  }*/
}
export default ProductPage;
