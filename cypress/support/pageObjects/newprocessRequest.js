export class ProcessRequest {
  element = {
    creatNewRequest: () => cy.get('button[aria-label="Create"]:visible'),
    createNewCase: () =>
      cy.get('#Create-actions:visible > button[title="New Case"]'),
    selectIndividual: () => cy.get("input.MuiInputBase-input"),
    sponsorshipType: () => cy.get('input[value="false"]'),
    clicktoShowMore: () => cy.contains("SHOW MORE OPTIONS"),
    salary: () => cy.get("input#salary-input"),
    workingAddress: () => cy.get('input[value="REMOTE"]'),
    jobtype: () => cy.contains("EXISTING JOB"),
    jobTitle: () => cy.get("#job-select"),
    exactJob: () => cy.get('.MuiList-root > [tabindex="0"]'),
    enterNotes: () => cy.get("#special-notes-input"),
    submitCaseRequestButton: () => cy.contains("SUBMIT CASE REQUEST"),
  };

  clickCreatNewRequest() {
    this.element.creatNewRequest().should("be.visible").click();
  }

  clickCreatCase() {
    this.element.createNewCase().click();
  }

  clickExsistingIndividual() {
    this.element
      .selectIndividual()
      .should("be.visible")
      .click()
      .type("sajid ts") //Drop down to searching FNs user sajid ts1
      .wait(3000)
      .type("{downArrow}")
      .type("{enter}");
  }

  selectSponsorshipType() {
    this.element.sponsorshipType().click();
  }

  clickShowMore() {
    this.element.clicktoShowMore().click().wait(2000);
  }

  offerSalary() {
    this.element.salary().type("1200");
  }

  physicalWorkingAddress() {
    this.element.workingAddress().click().scrollIntoView();
  }

  jobDescription() {
    this.element.jobtype().should("be.visible").click();
  }

  clickJobTitle() {
    this.element.jobTitle().click();
  }

  selectExactJob() {
    this.element.exactJob().wait(500).click();
  }

  clicksubmitCaseRequest() {
    this.element.submitCaseRequestButton().click();
  }
}
