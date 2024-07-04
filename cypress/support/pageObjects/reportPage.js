export class ReportPage {
  elements = {
    nevbarReportIcon: () => cy.get('[href="/reports"] > .MuiButton-label'),
    selectDisplayCard: () => cy.get(".MuiBox-root").find(".MuiTypography-root"),
  };

  clickReportIcon() {
    this.elements.nevbarReportIcon().click();
  }

  selectCard() {
    return this.elements.selectDisplayCard(); // return the Cypress chainable object
  }
}
