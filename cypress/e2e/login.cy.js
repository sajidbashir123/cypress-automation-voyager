import { Login } from "../support/pageObjects/loginPage";
/// <reference types="Cypress" />

describe("Login to Voyager", () => {
  //***************Login with Class and Object and geting data by making varables*****************/
  it("login", () => {
    cy.visit("/");
    const login = new Login();
    const validemail = Cypress.env("USERNAME");
    const validpassword = Cypress.env("PASSWORD");
    login.setUserName(validemail);
    login.setPassword(validpassword, { log: false });
    login.clickSingIn();
    login.elements
      .txtWelcome()
      .should("be.visible")
      .and("contain.text", "Welcome back");
  });
});
