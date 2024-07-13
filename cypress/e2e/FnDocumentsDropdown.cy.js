/// <reference types="Cypress" />

describe("FN's Additional Documents Types", () => {
  it("Adding All List Documents", () => {
    cy.visit("/");
    //login
    cy.get("#username-input").type("sajid.bashir+mst3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
    //clicking on contact and searching for sajid fn64
    cy.get('[href="/contacts"] > .MuiButton-label').click();
    cy.get("#contact-navigation-2 > .MuiTab-wrapper").click();
    cy.get(
      ".MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type("sajid fn64");
    cy.wait(2000);
    cy.get(".MuiLink-root > .MuiPaper-root").click();
    cy.get("#person-navigation-4 > .MuiTab-wrapper").click();
    //change the case for this specific users
    cy.get(":nth-child(2) > :nth-child(1) > a").click();
    //cy.wait(1000);
    cy.get("#case-navigation-2 > .MuiTab-wrapper").click();
    // recursive function working as loop
    function AddDcument() {
      cy.get(
        "#case-navigationpanel-2 > section > div > div > button > span.MuiIconButton-label > svg"
      ).click();
      cy.get('.MuiList-root > [tabindex="0"]').click();

      cy.get("#modal").then(($element) => {
        const elementText = $element.text();
        if (elementText.includes("There are no more documents left to add.")) {
          cy.get('button[data-title="close-button"]').click();
          return;
        } else {
          //open dropdown to add document types
          cy.get("#mui-component-select-fileType").click();
          cy.get(
            "#menu-fileType > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(1)"
          ).click();
          cy.get(
            "button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary"
          ).click();
          cy.wait(3000);
        }
        AddDcument(); // Call the function again for the next iteration
      });
    }
    // Calling first time
    AddDcument();
  });
});
