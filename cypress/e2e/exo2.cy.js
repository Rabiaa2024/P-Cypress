/// <reference types="cypress" />
describe("Autentification nominale", function () {
  it("connexion OK", function () {
    cy.visit("https://practice.automationtesteracademy.com/");
    cy.get('[data-test="username-login"]')
      .type("login_user")
      .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("cypress-geek")
      .should("have.value", "cypress-geek");
    cy.get('[data-test="remember-login"]').check().should("be.checked");
    cy.get('[data-test="submit-login"]').click();
    cy.url().should("include", "/home");
    cy.get('[data-test="title-product"]').should("be.visible");
  });

  it("connexion KO", function () {
    cy.visit("https://practice.automationtesteracademy.com/");
    cy.get('[data-test="username-login"]')
      .type("geek_user")
      .should("have.value", "geek_user");
    cy.get('[data-test="password-login"]')
      .type("cypress_geek")
      .should("have.value", "cypress_geek");
    cy.get('[data-test="submit-login"]').click();
    cy.get('[class="error-message"]')
      .should("be.visible")
      .and(
        "contain",
        "Veuillez vérifier votre nom d'utilisateur ou mot de passe"
      );
  });
});
