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
    // intercept for spying
    // cy.intercept({
    //   method: "POST",
    //   url: "https://72ao7fxqpvb63fn7mzt2j2cp3e.appsync-api.us-east-1.amazonaws.com/graphql",
    // }).as("fileUpload");

    // select file from cypress fixtures folder for upload
    cy.get("input[type=file]")
      .eq(2)
      .selectFile("cypress//fixtures//testfile.png", { force: true });

    // assertion for wait file upload
    // cy.waitUntil(
    //   () =>
    //     cy.get("@fileUpload").its("response.statusCode").should("equal", 200),
    //   {
    //     timeout: 0,
    //     interval: 500,
    //     errorMsg: "Request did not occur within the specified time.",
    //   }
    // );

    cy.wait(200, {
      timeout: 0,
      interval: 500,
      errorMsg: "Request did not occur within the specified time.",
    });

    // cy.wait("@fileUpload");
    /*************Removing a test file */
    /*
    
    */
    cy.contains("testfile")
      .should("be.visible")
      .find('button[type="button"]')
      .click({ force: true });
  });

  //File uplaods

  it.skip("File uplaod", () => {
    cy.get('[href="/contacts"] > .MuiButton-label').click();
    cy.get("#contact-navigation-2 > .MuiTab-wrapper").click();
    cy.get(
      ".MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("sajid fn{Enter}");
    cy.wait(5000);
    cy.get('[href="/people/sajid-fn4-2"] > .MuiPaper-root').click();
    cy.get("#person-navigation-1 > .MuiTab-wrapper").click();
    cy.get(
      "label[for='contained-button-file-DIPLOMA'] span[class='MuiButton-label']"
    ).click();
    cy.get("input[type=file]")
      .eq(0)
      .selectFile("cypress//fixtures//testfile.png", { force: true });
    //file to uplaod (if we choser the css selector type file only then the uploaded file will be display in cypress)
    //cy.get("label[for='contained-button-file-DIPLOMA'] span[class='MuiButton-label']").attachFile('bot.jpg');
    //cy.wait(5000);
  });
});
