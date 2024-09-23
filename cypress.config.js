const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    reportFilename: "testReport",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
});
