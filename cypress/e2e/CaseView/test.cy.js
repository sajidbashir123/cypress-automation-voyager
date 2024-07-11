/// <reference types="Cypress" />
/////////Just for testing purposes will delete it after testing
describe("Describe", () => {
  //Case details screen

  beforeEach("before each", () => {
    cy.log("before each block log");

    it("inside before each", () => {
      cy.log("it block inside of beforeeach blcok logs");
    });
  });

  it("2nd it blcok outside the before each", () => {
    cy.log("2nd it block outside of beforeeach blcok logs");
    it("'it in it", () => {
      cy.log("nested it block logs");
    });
  });
});

it("out of describe block", () => {
  cy.log("out side of describe blok logs");
});
