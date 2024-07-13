export class ApproveProcessRequest {
  elements = {
    caseNevBar: () => cy.get('.MuiPaper-root > [href="/cases?mine=true"]'),
    firstRequest: () =>
      cy.get(
        "#root > div > main > nav > div.MuiBox-root:nth-child(4) > :nth-child(1)"
      ),
    approveButton: () => cy.contains("Approve"),
    caseOpenPage: () => cy.contains("Overview"),
  };

  clickCaseNevBar() {
    this.elements.caseNevBar().click();
  }

  clickFirstRequest() {
    this.elements.firstRequest().should("be.visible").click();
  }

  clickApproveButton() {
    this.elements.approveButton().click();
  }

  verifyCaseOpenPage() {
    this.elements.caseOpenPage().wait(3000).should("be.visible");
  }
}
