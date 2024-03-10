const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "upo5r1",
  // ...rest of the Cypress project config

  projectId: 'upo5r1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video:true,

  /*
  module.exports = defineConfig({
    video: true,
  })

  */

});



