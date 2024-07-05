import { ReportPage } from "../support/pageObjects/reportPage";
import { Login } from "../support/pageObjects/loginPage";
/// <reference types="Cypress" />

const reportPage = new ReportPage();

describe("Verifying the text on report cards", () => {
  beforeEach("login", () => {
    const validemail = Cypress.env("USERNAME");
    const validpassword = Cypress.env("PASSWORD");
    cy.SignIn(validemail, validpassword);
    cy.visit("/");
    reportPage.clickReportIcon();
  });

  it("Verify the text on the ForeignNational card", () => {
    reportPage
      .selectCard()
      .should("be.visible")
      .and("contain.text", "Active Foreign Nationals");
  });

  it("Verify the text on the Company card", () => {
    reportPage
      .selectCard()
      .should("be.visible")
      .and("contain.text", "Active Companies");
  });

  it("Verify the text on the Case card", () => {
    reportPage
      .selectCard()
      .should("be.visible")
      .and("contain.text", "Open Cases");
  });
});
