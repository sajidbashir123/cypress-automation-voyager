/// <reference types="Cypress" />

describe("Case's 'Overview' Tab", () => {
  //Case details screen

  beforeEach("Navigate to Case Overview Tab", () => {
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
  });

  // Overview tab

  //*************Heading of OverView Cards*****/

  it("Verifying the Displaying Card from Name", () => {
    //*************Open task*****/
    cy.get(".jss547 > .MuiTypography-root", { timeout: 1000 }).should(
      "include.text",
      "Open Tasks"
    );

    //*************key dates*****/
    cy.get(".jss492 > .MuiTypography-root").should("include.text", "Key Dates");

    //*************Prevailing Wage Case*****/
    cy.get(
      `.MuiTypography-root.jss5575.MuiTypography-body1[shub-ins="1"]`
    ).should("contain.text", "Prevailing Wage Case");

    //*******Shipment Tracking******/
    cy.get(".jss505 > .MuiTypography-root").should(
      "contain.text",
      "Shipment Tracking"
    );
    /***********Receipt Numbers******/
    cy.get(".jss520 > .MuiTypography-root").should(
      "contain.text",
      "Receipt Numbers"
    );

    //***************Payment Status*******/
    cy.get(".jss531 > .MuiTypography-root").should(
      "contain.text",
      "Payment Status"
    );
  });

  //Using the contain keyword

  it("Verifying the Displaying Card from Name (Using 'Contains' keyword", () => {
    //*************Open task*****/
    cy.contains("Open Tasks").should("be.visible");

    //*************key dates*****/
    cy.contains("Key Dates").scrollIntoView().should("be.visible");

    //*************Prevailing Wage Case*****/
    cy.contains("Prevailing Wage Case").should("be.visible");

    /***********Receipt Numbers******/
    cy.contains("Receipt Numbers").should("be.visible");

    //*******Shipment Tracking******/
    cy.contains("Shipment Tracking").scrollIntoView().should("be.visible");

    //***************Payment Status*******/
    cy.contains("Payment Status").scrollIntoView().should("be.visible");
  });
});
