import { Login } from "../support/pageObjects/loginPage";
import { ProcessRequest } from "../support/pageObjects/newprocessRequest";
/// <reference types="Cypress" />

const login = new Login();
const processRequest = new ProcessRequest();
const validemail = Cypress.env("USERNAME");
const validpassword = Cypress.env("PASSWORD");

//////////////////////////

const processTypes = [
  {
    Name: "H-1B",
    selector: 'input[value="H_1B"]',
    notes: "Automating new 'H-1B' Process Request with Cypress",
  },
  {
    Name: "PERM: Green Card",
    selector: 'input[value="PERM_GREEN_CARD"]',
    notes: "Automating new 'PERM: Green Card' Process Request with Cypress",
  },
  {
    Name: "H-1B Lottery '24",
    selector: 'input[value="H_1B_24_LOTTERY"]',
    notes: "Automating new 'H-1B Lottery '24' Process Request with Cypress",
  },
  {
    Name: "E-3 USCIS",
    selector: 'input[value="E_3"]',
    notes: "Automating new 'E-3 USCIS' Process Request with Cypress",
  },
  {
    Name: "E-3 Consulate",
    selector: 'input[value="E_3_CONSULATE"]',
    notes: "Automating new 'E-3 Consulate' Process Request with Cypress",
  },
  {
    Name: "H-1B1 USCIS",
    selector: 'input[value="H_1B1"]',
    notes: "Automating new 'H-1B1 USCIS' Process Request with Cypress",
  },
  {
    Name: "H-1B1 Consulate",
    selector: 'input[value="H_1B1_CONSULATE"]',
    notes: "Automating new 'H-1B1 Consulate' Process Request with Cypress",
  },
  {
    Name: "TN USCIS",
    selector: 'input[value="TN"]',
    notes: "Automating new 'TN USCIS' Process Request with Cypress",
  },
  {
    Name: "TN Mexico",
    selector: 'input[value="TN_MEXICO"]',
    notes: "Automating new 'TN Mexico' Process Request with Cypress",
  },
  {
    Name: "TN Canada",
    selector: 'input[value="TN_CANADA"]',
    notes: "Automating new 'TN Canada' Process Request with Cypress",
  },
  {
    Name: "USCIS Primary - Company",
    selector: 'input[value="USCIS_PRIMARY"]',
    notes:
      "Automating new 'USCIS Primary - Company' Process Request with Cypress",
  },
  {
    Name: "AOS",
    selector: 'input[value="AOS"]',
    notes: "Automating new 'AOS' Process Request with Cypress",
  },
  {
    Name: "EAD Primary",
    selector: 'input[value="EAD_PRIMARY"]',
    notes: "Automating new 'EAD Primary' Process Request with Cypress",
  },
];

//***********************

describe("All Process Request Creation", () => {
  beforeEach("SignIn to Voyager", () => {
    cy.SignIn(validemail, validpassword);
    cy.visit("/");
  });

  processTypes.forEach((processType, index) => {
    it(`should execute test case ${index + 1}`, () => {
      processRequest.clickCreatNewRequest();
      processRequest.clickCreatCase();
      processRequest.clickExsistingIndividual();
      processRequest.selectSponsorshipType();
      processRequest.clickShowMore();
      cy.get(processType.selector).click(); //Select a processTypes from above
      processRequest.offerSalary();
      processRequest.physicalWorkingAddress();
      processRequest.jobDescription();
      processRequest.clickJobTitle();
      processRequest.selectExactJob();
      processRequest.element.enterNotes().type(processType.notes); //Select a notes from above
      cy.intercept({
        method: "POST",
        url: "https://tr5vw5h2kfczrn3u4x56tssjue.appsync-api.us-east-1.amazonaws.com/graphql",
      }).as("submittedrequest");
      cy.log("Intercept set up");
      processRequest.clicksubmitCaseRequest();
      // Wait for the intercepted request to complete
      cy.wait("@submittedrequest", { timeout: 90000 }).then((interception) => {
        expect(interception.response.statusCode).to.equal(200); // Check that the request was successful
      });
    });

    it.skip("verify the request created correctly", () => {
      cy.get('.MuiPaper-root > [href="/cases?mine=true"]').click();
      cy.reload();
      cy.wait(8000);
      cy.get(
        "#root > div > main > nav > div.MuiBox-root:nth-child(4) > :nth-child(1)"
      )
        .should("be.visible")
        .wait(1000)
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
      cy.contains("Overview").should("be.visible");
      cy.log("Case Open Successfuly. Thank you!😊");
    });
  });
});
