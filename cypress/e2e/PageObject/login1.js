//***************Login with Class and Object*****************/

/*This is a POB approch where we create a calss and defined differet methods
 in it and call all the methods in our code as[classname.methodname]*/

 class Login {

    setUserName(username)
    {cy.get("#username-input").type(username);}
    
    setPassword(password)
    {cy.get("#password-input").type(password);}

    clickSingIn()
    {cy.get(".MuiButton-label").click()}

}

export default Login;