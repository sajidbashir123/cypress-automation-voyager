import Login from "./PageObject/login1";
import {Login as Logindupliation} from "./PageObject/login2";
/// <reference types="Cypress" />


describe("New Process Request Creation", () => {

  //*************** General Login*****************/

  it("General hardcoded login", () => {
   
    cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
    cy.wait(5000);
  });

  //***************Login with Class and Object and geting data by making objects - login1.js*****************/

  it.only("login making class and object", () => {

    cy.visit("/");  
    const login= new Login
    login.setUserName("sajid.bashir+mh3@kwanso.com");
    login.setPassword("Test#123");
    login.clickSingIn();
  });

 //***************Login with Class and Object and geting data by making varables - login2.js*****************/

  it("login making class and object", () => {

    cy.visit("/");  
    const login= new Logindupliation
    login.setUserName("sajid.bashir+mh3@kwanso.com");
    login.setPassword("Test#123");
    login.clickSingIn();
  });

 //***************Login with Class and Object and geting data from the fixture file*****************/

  it("login by fetching data from the fixture file", () => {
    cy.visit("/");

    cy.fixture("login").then((data)=>{

     const login= new Login
     login.setUserName(data.username);
     login.setPassword(data.password);
     login.clickSingIn();
    });
  });

});
