/// <reference types="Cypress" />

describe("Case's 'Document' Tab", () => {
  //Case details screen

  beforeEach("Navigate to Case Document Tab", () => {
    cy.visit("https://dev.meltzerhellrung.com");

    //******login*********/

    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
    cy.wait(5000);
    cy.get(
      "body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)"
    ).click();
    cy.wait(3000);
    cy.get("input[placeholder='Name, company or case number']")
      .click()
      .type("0483-0001-2")
      .wait(2000);
    cy.get(".MuiTableBody-root > .MuiTableRow-root > th.MuiTableCell-root")
      .wait(1000)
      .click();
    cy.wait(5000);
    cy.get("#case-navigation-2 > .MuiTab-wrapper").click();
    cy.wait(2000);
  });

  it("'File Uploading' Test", () => {
    cy.get(
      "label[for='contained-button-file-DIPLOMA'] span[class='MuiButton-label']"
    ).click();

    /*************Uploading a test file */

    cy.get("input[type=file]")
      .eq(2)
      .selectFile("cypress//fixtures//testfile.png", { force: true });
    cy.log("File Uplaoded Successfully");

    /*************Removing a test file */
    /*
    cy.contains("bot")
      .should("be.visible")
      .find('button[type="button"]')
      .click({ force: true });

    cy.log("File Removed Successfully");
    */
  });
});
