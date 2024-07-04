import { Login } from "../support/pageObjects/loginPage";
/// <reference types="Cypress" />

describe("Login to Voyager", () => {
  //***************Login with Class and Object and geting data by making varables - login2.js*****************/
  it("login making class and object", () => {
    cy.visit("/");
    const login = new Login();
    const validemail = "sajid.bashir+mh3@kwanso.com";
    const validpassword = "Test#123";
    login.setUserName(validemail);
    login.setPassword(validpassword);
    login.clickSingIn();
    login.elements
      .txtWelcome()
      .should("be.visible")
      .and("contain.text", "Welcome back");
  });
});
