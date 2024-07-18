import "cypress-wait-until";
import { Login } from "./pageObjects/loginPage";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//-- This is a parent command --
// Cypress.Commands.add("login", (email, password) => {
//   cy.session([email, password], () => {
//     cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
//     //login
//     cy.get("#username-input").type(email);
//     cy.get("#password-input").type(`${password}{enter}`);
//     //cy.wait(5000);
//     cy.get(".jss90").should("be.visible").and("contain.text", "Welcome back");
//   });
// });

//-- Custom Login Commad ---
Cypress.Commands.add("SignIn", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    const login = new Login();
    login.setUserName(username);
    login.setPassword(password);
    login.clickSingIn();
    login.elements
      .txtWelcome()
      .should("be.visible")
      .and("contain.text", "Welcome back");
  });
});

// Custom for task tab
