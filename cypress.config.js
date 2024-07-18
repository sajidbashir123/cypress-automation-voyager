const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x7ipwi",
  env: {
    USERNAME: "sajid.bashir+mst1@kwanso.com",
    PASSWORD: "Test#123",
  },
  e2e: {
    //baseUrl: "https://dev.meltzerhellrung.com",
    baseUrl: "https://staging.meltzerhellrung.com",
    video: true,
    watchForFileChanges: false, // Not run automatically after any file changes
    defaultCommandTimeout: 20000,
    reporter: "mochawesome", // To generate the HTML report of the executed tested case for external use. it added when we install the mochaawesome dependency
    reporterOptions: {
      reportDir: "cypress/results",
      charts: false,
      overwrite: false,
      html: true,
      json: true,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
});
