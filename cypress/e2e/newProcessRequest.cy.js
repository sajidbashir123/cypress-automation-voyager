import { Login } from "../support/pageObjects/loginPage";
/// <reference types="Cypress" />

describe("New Process Request Creation", () => {
  beforeEach("login", () => {
    cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mst1@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
  });

  it("New 'AOS' Process Request", () => {
    cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mst1@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");

    cy.get('button[aria-label="Create"]:visible').click();
    cy.wait(1000);
    cy.get('#Create-actions:visible > button[title="New Case"]').click();
    //Drop down to searching sajid fn17
    cy.get("input.MuiInputBase-input")
      .click()
      .type("sajid ts1")
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
    cy.get('.MuiList-root > [tabindex="0"]').click();
    cy.wait(500);
    cy.get("#special-notes-input").type(
      "Automating new 'AOS' Process Request with Cypress"
    );
    cy.intercept({
      method: "POST",
      url: "https://tr5vw5h2kfczrn3u4x56tssjue.appsync-api.us-east-1.amazonaws.com/graphql",
      //dev url: "https://72ao7fxqpvb63fn7mzt2j2cp3e.appsync-api.us-east-1.amazonaws.com/graphql",
    }).as("submittedrequest");

    cy.log("Intercept set up");

    cy.contains("SUBMIT CASE REQUEST").click();

    // Wait for the intercepted request to complete
    cy.wait("@submittedrequest", { timeout: 90000 }).then((interception) => {
      // Check that the request was successful
      expect(interception.response.statusCode).to.equal(200);
    });
  });
  it.only("verify the request created correctly", () => {
    cy.get('.MuiPaper-root > [href="/cases?mine=true"]').click();
    cy.wait(8000);
    cy.get(
      "#root > div > main > nav > div.MuiBox-root:nth-child(4) > :nth-child(1)"
    )
      .should("be.visible")
      .click();

    cy.intercept({
      method: "POST",
      url: "https://tr5vw5h2kfczrn3u4x56tssjue.appsync-api.us-east-1.amazonaws.com/graphql",
    }).as("CaseOpen");

    cy.log("Intercept set up");
    cy.contains("Approve").click();
    // Wait for the intercepted request to complete
    cy.wait("@CaseOpen", { timeout: 30000 }).then((interception) => {
      // Check that the request was successful
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.wait(3000);
    cy.contains("Case Opening").should("be.visible");
    cy.log("Case Open Successfuly! Thanks😊");
  });
});
