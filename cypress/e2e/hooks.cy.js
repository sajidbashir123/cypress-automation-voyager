/// <reference types="Cypress" />
import { Login } from "../support/pageObjects/loginPage";

describe("Use of Hooks in Voyaer", () => {
  const validemail = Cypress.env("USERNAME");
  const validpassword = Cypress.env("PASSWORD");
  before("SignIn to Voyager", () => {
    cy.SignIn(validemail, validpassword);
  });

  beforeEach("SignIn", () => {
    cy.SignIn(validemail, validpassword);
    cy.visit("/");
    cy.get('[href="/reports"] > .MuiButton-label').click();
  });

  it("Verify the text on the ForeignNational card", () => {
    cy.get(".MuiBox-root")
      .find(".MuiTypography-root")
      .should("be.visible")
      .and("contain.text", "Active Foreign Nationals");
  });

  it("Verify the text on the Company card", () => {
    cy.contains("Active Companies")
      .should("be.visible")
      .and("have.text", "Active Companies");
  });

  it("Verify the text on the Case card", () => {
    cy.contains("Open Cases")
      .should("be.visible")
      .and("have.text", "Open Cases");
  });

  afterEach("logout after each test", () => {
    cy.get("#header-avatar").click();
    cy.get("#header-sign-out").click();
  });

  after("Verify user has logout successfuly", () => {
    cy.get(".MuiButtonBase-root").should("be.visible");
  });
});
