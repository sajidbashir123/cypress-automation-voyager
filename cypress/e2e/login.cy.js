/// <reference types="Cypress" />

describe("New Process Request Creation", () => {
  it("login", () => {
    cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
    cy.wait(5000);
    cy.get("#header-avatar").click();
    cy.wait(1000);
    cy.get("#header-sign-out").click();
    cy.wait(4000);
  });
});
