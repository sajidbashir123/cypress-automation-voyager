/// <reference types="Cypress" />

describe("General Hooks with Logs", () => {
  before("Before All", () => {
    cy.log("Once before all test cases");
  });

  beforeEach("Before Each", () => {
    cy.log("Before every test cases");
  });

  it("Test Case 1", () => {
    cy.log("1st test case");
  });

  it("Test Case 2", () => {
    cy.log("2nd test case");
  });

  afterEach("After Each", () => {
    cy.log("After every test case");
  });

  after("Once at the End", () => {
    cy.log("Once after all test cases");
  });
});
