/// <reference types="cypress" />

describe("Autentification nominale", function () {
  it("connexion OK", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="inventory-item-name"]').should("be.visible");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("have.text","Remove");
    cy.get('[data-test="shopping-cart-badge"]')
      .should("have.text", "1").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]')
      .type("Sofiane")
      .should("have.value", "Sofiane");
    cy.get('[data-test="lastName"]').type("Adad").should("have.value", "Adad");
    cy.get('[data-test="postalCode"]')
      .type("95100")
      .should("have.value", "95100");
    cy.get('[data-test="continue"]').click();
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();
    cy.contains("Thank you for your order!");
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should("include", "/inventory.html");
  });
});
