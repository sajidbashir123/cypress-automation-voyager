const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jw13m9",
  e2e: {
    baseUrl: "https://dev.meltzerhellrung.com",
    video: true,
    screenshotOnRunFailure: true,
    watchForFileChanges: false, // Not run automatically after any file changes
    defaultCommandTimeout: 20000,
    reporter: "mochawesome", // To generate the HTML report of the executed tested case for external use. it added when we install the mochaawesome dependency
    reporterOptions: {
      reportDir: "cypress/results",
      charts: true,
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
    runMode: 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
});
