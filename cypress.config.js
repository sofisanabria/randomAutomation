const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports",
    reportFilename: "testReport",
    reportTitle: "Test Results",
    reportPageTitle: "Test Report",
    overwrite: false,
    charts: true,
    code: true,
    inline: true,
    enableCharts: true,
    enableCode: true,
    embeddedScreenshots: true,
  },
});
