/// <reference types="Cypress" />

describe("Case's 'Tasks' Tab", () => {
  //Case details screen

  beforeEach("Navigate to Case Task Tab", () => {
    cy.visit("https://dev.meltzerhellrung.com");

    //******login*********/

    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
    cy.wait(5000);
    cy.get(
      "body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)"
    ).click();
    cy.wait(3000);
    cy.get("input[placeholder='Name, company or case number']")
      .click()
      .type("0483-0001-2")
      .wait(2000);
    cy.get(".MuiTableBody-root > .MuiTableRow-root > th.MuiTableCell-root")
      .wait(1000)
      .click();
    cy.wait(5000);
    cy.get("#case-navigation-1 > .MuiTab-wrapper").click();
    cy.wait(2000);
  });

  // Task

  //*************VErifying the Tasks List *****/

  it("Verification of 'Tasks list' Test", () => {
    cy.contains("Set Case Team").should("be.visible");
    cy.contains("Set Task Timeline").should("be.visible");
    cy.contains("Set Required Forms and Documents").should("be.visible");
    cy.contains("Send Process Initiation Message to Foreign National").should(
      "be.visible"
    );
    cy.contains("Complete Questionnaire").should("be.visible");
    cy.contains(`Upload Documents (Foreign National)`)
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Upload Documents (Employer)").should("be.visible");
    cy.contains("Receive Case Invoice Payment").should("be.visible");
    cy.contains("Review Job Description").should("be.visible");
    cy.contains("Finalize Job Description").should("be.visible");
    cy.contains("Employee Confirms Requirements")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Prepare and Upload Experience Letter Templates").should(
      "be.visible"
    );
    cy.contains("Prepare Prevailing Wage Request").should("be.visible");
    cy.contains("Review Prevailing Wage Request").should("be.visible");
    cy.contains("File Prevailing Wage Request")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Receive Prevailing Wage Determination").should("be.visible");
    cy.contains("Prevailing Wage OK").scrollIntoView().should("be.visible");
    cy.contains("Upload Signed Experience Letters").should("be.visible");
    cy.contains("Review Signed Experience Letters").should("be.visible");
    cy.contains("Prepare Recruitment Templates").should("be.visible");
    cy.contains("Review Recruitment Templates").should("be.visible");
    cy.contains("Send Recruitment Templates to Vendor for Quote")
      .scrollIntoView()
      .should("be.visible");
    cy.contains(
      "Send Recruitment Templates and Candidate Assessment to Client"
    ).should("be.visible");
    cy.contains("Approve Quote to Vendor").should("be.visible");
    cy.contains("Issue Recruitment Ads Invoice")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Receive Recruitment Ads Invoice Payment").should("be.visible");
    cy.contains("All Recruitment Complete and Review First Filing Date").should(
      "be.visible"
    );
    cy.contains("Prepare Audit File").should("be.visible");
    cy.contains("Review Audit File").scrollIntoView().should("be.visible");
    cy.contains("Upload Candidate Resumes and Assessments").should(
      "be.visible"
    );
    cy.contains("Draft PERM").should("be.visible");
    cy.contains("Share Draft PERM with Client and Employee").should(
      "be.visible"
    );
    cy.contains("Review and Submit PERM").scrollIntoView().should("be.visible");
    cy.contains("Receive Certified PERM").should("be.visible");
    cy.contains("Open I-140 Petition").should("be.visible");
    cy.contains("Check Priority Date for Current").should("be.visible");
    cy.contains("Set I-140 Task Timeline")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Set Required I-140 Forms and Documents").should("be.visible");
    cy.contains("Check Signature Page Version(s)").should("be.visible");
    cy.contains("Issue I-140 Invoice").should("be.visible");
    cy.contains("Receive I-140 Invoice Payment").should("be.visible");
    cy.contains("Review I-140 Information and Documents")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Prepare I-140 Forms").should("be.visible");
    cy.contains("Prepare I-140 LOS").should("be.visible");
    cy.contains("Review I-140 Forms").should("be.visible");
    cy.contains("Review I-140 Forms and Letter of Support").should(
      "be.visible"
    );
    cy.contains("Finalize I-140 Application for Attorney Review").should(
      "be.visible"
    );
    cy.contains("Review I-140 Application")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Ship I-140 Application").should("be.visible");
    cy.contains("Receive and Upload I-140 Receipt Notice").should("be.visible");
    cy.contains("Upload Decision Notice").scrollIntoView().should("be.visible");
  });
});
