export class Hooks {
  elements = {
    cardText: () => cy.get(".MuiBox-root").find(".MuiTypography-root"),
    profileIcon: () => cy.get("#header-avatar"),
    signoutText: () => cy.get("#header-sign-out"),
    loginScreen: () => cy.get(".MuiButtonBase-root"),
  };

  foreignNationalCardText() {
    this.elements
      .cardText()
      .should("be.visible")
      .and("contain.text", "Active Foreign Nationals");
    return;
  }

  companyCardText() {
    this.elements
      .cardText()
      .should("be.visible")
      .and("have.text", "Active Companies");
    return;
  }

  caseCardText() {
    this.elements
      .cardText()
      .should("be.visible")
      .and("have.text", "Open Cases");
    return;
  }

  clickProfileIcon() {
    this.elements.profileIcon().click();
  }

  clickSignOutText() {
    this.elements.signoutText().click();
  }

  verifyLoginScreen() {
    this.elements
      .loginScreen()
      .should("be.visible")
      .and("contain.text", "Sign in");
  }
}
