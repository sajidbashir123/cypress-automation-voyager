import { CaseTasks } from "../support/pageObjects/caseTask";
/// <reference types="Cypress" />

const caseTasks = new CaseTasks();
const validemail = Cypress.env("USERNAME");
const validpassword = Cypress.env("PASSWORD");

const taskList = [
  { taskDescription: "Set Case Team" },
  { taskDescription: "Set Task Timeline" },
  { taskDescription: "Set Required Forms and Documents" },
  { taskDescription: "Send Process Initiation Message to Foreign National" },
  { taskDescription: "Complete Questionnaire" },
  /*
  { taskDescription: `Upload Documents (Foreign National)` },
  { taskDescription: "Upload Documents (Employer)" },
  { taskDescription: "Receive Case Invoice Payment" },
  { taskDescription: "Review Job Description" },
  { taskDescription: "Finalize Job Description" },
  { taskDescription: "Employee Confirms Requirements" },
  { taskDescription: "Prepare and Upload Experience Letter Templates" },
  { taskDescription: "Prepare Prevailing Wage Request" },
  { taskDescription: "Review Prevailing Wage Request" },
  { taskDescription: "File Prevailing Wage Request" },
  { taskDescription: "Receive Prevailing Wage Determination" },
  { taskDescription: "Prevailing Wage OK" },
  { taskDescription: "Upload Signed Experience Letters" },
  { taskDescription: "Review Signed Experience Letters" },
  { taskDescription: "Prepare Recruitment Templates" },
  { taskDescription: "Review Recruitment Templates" },
  { taskDescription: "Send Recruitment Templates to Vendor for Quote" },
  {
    taskDescription:
      "Send Recruitment Templates and Candidate Assessment to Client",
  },
  { taskDescription: "Approve Quote to Vendor" },
  { taskDescription: "Issue Recruitment Ads Invoice" },
  { taskDescription: "Receive Recruitment Ads Invoice Payment" },
  { taskDescription: "All Recruitment Complete and Review First Filing Date" },
  { taskDescription: "Prepare Audit File" },
  { taskDescription: "Review Audit File" },
  { taskDescription: "Upload Candidate Resumes and Assessments" },
  { taskDescription: "Draft PERM" },
  { taskDescription: "Share Draft PERM with Client and Employee" },
  { taskDescription: "Review and Submit PERM" },
  { taskDescription: "Receive Certified PERM" },
  { taskDescription: "Open I-140 Petition" },
  { taskDescription: "Check Priority Date for Current" },
  { taskDescription: "Set I-140 Task Timeline" },
  { taskDescription: "Set Required I-140 Forms and Documents" },
  { taskDescription: "Check Signature Page Version(s)" },
  { taskDescription: "Issue I-140 Invoice" },
  { taskDescription: "Receive I-140 Invoice Payment" },
  { taskDescription: "Review I-140 Information and Documents" },
  { taskDescription: "Prepare I-140 Forms" },
  { taskDescription: "Prepare I-140 LOS" },
  { taskDescription: "Review I-140 Forms" },
  { taskDescription: "Finalize I-140 Application for Attorney Review" },
  { taskDescription: "Review I-140 Application" },
  { taskDescription: "Ship I-140 Application" },
  { taskDescription: "Receive and Upload I-140 Receipt Notice" },
  { taskDescription: "Upload Decision Notice" },
  */
];

//*****************************//

describe("Case's 'Tasks' Tab", () => {
  //Case details screen

  before("login", () => {
    cy.SignIn(validemail, validpassword);
    cy.visit("/");
  });

  beforeEach("login", () => {
    cy.SignIn(validemail, validpassword);
    cy.visit("/cases/sajid-ts3-qa-permgreencard-5");
    caseTasks.clickTask();
  });

  taskList.forEach((task, index) => {
    it(`Verifying the task${task.taskDescription}${index + 1}`, () => {
      caseTasks.elements
        .alltask()
        .should("contain.text", `${task.taskDescription}`);
    });
  });
});
