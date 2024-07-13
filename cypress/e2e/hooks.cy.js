/// <reference types="Cypress" />
import { Login } from "../support/pageObjects/loginPage";
import { ReportPage } from "../support/pageObjects/reportPage";
import { Hooks } from "../support/pageObjects/hooksInVoyager";

const reportPage = new ReportPage();
const hooks = new Hooks();
const validemail = Cypress.env("USERNAME");
const validpassword = Cypress.env("PASSWORD");

describe("Use of Hooks in Voyaer", () => {
  before("SignIn to Voyager", () => {
    cy.SignIn(validemail, validpassword);
  });

  beforeEach("SignIn", () => {
    cy.SignIn(validemail, validpassword);
    cy.visit("/");
    reportPage.clickReportIcon();
  });

  it("Verify the text on the ForeignNational card", () => {
    hooks.elements
      .cardText()
      .should("be.visible")
      .and("contain.text", "Active Foreign Nationals");
  });

  it("Verify the text on the Company card", () => {
    hooks.elements
      .cardText()
      .should("be.visible")
      .and("contain.text", "Active Companies");
  });

  it("Verify the text on the Case card", () => {
    hooks.elements
      .cardText()
      .should("be.visible")
      .and("contain.text", "Open Cases");
  });

  afterEach("logout after each test", () => {
    hooks.clickProfileIcon();
    hooks.clickSignOutText();
  });

  after("Verify user has logout successfuly", () => {
    hooks.verifyLoginScreen();
  });
});
