const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight:1080,
    viewportWidth:1440,
    baseUrl: 'https://www.google.pl',
    chromeWebSecurity: false,
    watchForFileChanges: false,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
