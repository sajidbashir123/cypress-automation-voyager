//***************Login with Class and Object*****************/

/*This is an other approch used in pob where we create we store the compnent in the varibale and then called
 these variables in the object from the variable name but the code in the our original file remain same*/

export class Login {
  elements = {
    txtUserName: () => cy.get("#username-input"),
    txtPassword: () => cy.get("#password-input"),
    clickbutton: () => cy.get(".MuiButton-label"),
    txtWelcome: () => cy.get(".jss90"),
  };

  setUserName(username) {
    this.elements.txtUserName().type(username);
  }

  setPassword(password) {
    this.elements.txtPassword().type(password);
  }

  clickSingIn() {
    this.elements.clickbutton().click();
  }
}
