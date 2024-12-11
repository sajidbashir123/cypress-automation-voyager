export class CaseTasks {
  elements = {
    caseNevBar: () => cy.get('.MuiPaper-root > [href="/cases?mine=true"]'),
    caseSearch: () =>
      cy.get("input[placeholder='Name, company or case number']"),
    searchResult: () =>
      cy.get(".MuiTableBody-root > .MuiTableRow-root > th.MuiTableCell-root"),
    taskName: () => cy.get("#case-navigation-1 > .MuiTab-wrapper"),
    alltask: () => cy.get("p.MuiTypography-root.MuiTypography-body1"),
  };

  clickCaseNevBar() {
    this.elements.caseNevBar().click();
  }

  //Type Case Number
  clickCaseSearch() {
    this.elements.caseSearch().type("0121-0003-18").wait(2000).click();
  }

  clickSearchResult() {
    this.elements.searchResult().click();
  }

  clickTask() {
    this.elements.taskName().click();
  }

  selectTaskdescription() {
    this.elements.alltask();
  }
}
