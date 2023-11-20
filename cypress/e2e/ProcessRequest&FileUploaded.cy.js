/// <reference types="Cypress" />
import "cypress-file-upload";

describe("New Process Request + File Uploading", () => {
  beforeEach("Login flow", () => {
    cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
  });

  it("Create 'H-1B' Process Request for User 'Sajid fn17'", () => {
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
    cy.get('input[value="H_1B"]').click();
    cy.get("input#salary-input").type("1200");
    cy.get('input[value="REMOTE"]').click();
    cy.contains("EXISTING JOB").click();
    cy.wait(2000);
    cy.get("#job-select").click();
    cy.get('li[data-value="f258db95-ca92-4173-8032-2c8d2f17a23d"]')
      .should("have.text", "QA Engineer")
      .click();
    cy.wait(500);
    cy.get("#special-notes-input").type("Automation testing");
    cy.contains("SUBMIT CASE REQUEST").click();
    cy.get('a[href="/process-requests"]').should(
      "contain.text",
      "Process Requests"
    );
    cy.wait(2000);
  });

  //File uplaods

  it.only("File uplaoding Test in Sajid Fn4's Documents", () => {
    cy.get('[href="/contacts"] > .MuiButton-label').click();
    cy.get("#contact-navigation-2 > .MuiTab-wrapper").click();
    cy.get(
      ".MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("sajid fn4{Enter}");
    cy.wait(5000);
    cy.get('[href="/people/sajid-fn4-2"] > .MuiPaper-root').click();
    cy.get("#person-navigation-1 > .MuiTab-wrapper").click();
    cy.get(
      "label[for='contained-button-file-DIPLOMA'] span[class='MuiButton-label']"
    ).click();

    /*************Uploading a test file */

    cy.get("input[type=file]")
      .eq(0)
      .selectFile("cypress//fixtures//testfile.png", { force: true });
    cy.log("File Uplaoded Successfully");
  });
});
