//***************Login with Class and Object*****************/

/*This is an other approch used in pob where we create we store the compnent in the varibale and then called
 these variables in the object from the variable name but the code in the our original file remain same*/

 export class Login {

 txtUserName="#username-input";
 txtPassword="#password-input";
 clickbutton=".MuiButton-label";

    setUserName(username)
    {cy.get(this.txtUserName).type(username);}
    
    setPassword(password)
    {cy.get(this.txtPassword).type(password);}

    clickSingIn()
    {cy.get(this.clickbutton).click()}

}
