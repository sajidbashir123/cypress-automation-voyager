/// <reference types="Cypress" />

describe("New Process Request Creation", () => {
  beforeEach("login", () => {
    cy.visit("https://dev.meltzerhellrung.com"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
  });

  it("New 'AOS' Process Request", () => {
    cy.get('button[aria-label="Create"]:visible').click();
    cy.wait(1000);
    cy.get('#Create-actions:visible > button[title="New Case"]').click();
    //Drop down to searching sajid fn17
    cy.get("input.MuiInputBase-input")
      .click()
      .type("sajid Fn17")
      .wait(3000)
      .type("{downArrow}")
      .type("{enter}");
    cy.wait(2000);
    cy.get('input[value="false"]').click();
    cy.wait(2000);
    cy.contains("SHOW MORE OPTIONS").click();
    cy.wait(3000);

    //**************** Select a case by name ************/
    cy.get('input[value="AOS"]').click();
    cy.get("input#salary-input").type("1200");
    cy.get('input[value="REMOTE"]').click();
    cy.contains("EXISTING JOB").click();
    cy.wait(2000);
    cy.get("#job-select").click();
    cy.get('li[data-value="f258db95-ca92-4173-8032-2c8d2f17a23d"]')
      .should("have.text", "QA Engineer")
      .click();
    cy.wait(500);
    cy.get("#special-notes-input").type(
      "Automating new 'AOS' Process Request with Cypress"
    );

    cy.contains("SUBMIT CASE REQUEST").click();
    cy.get('a[href="/process-requests"]').should(
      "contain.text",
      "Process Requests"
    );
    cy.wait(5000);
  });
});
