const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //task1 (file cyTask.cy.js)
      //on('task',taskname(){funcn def})
      on('task', {
        print() {
          console.log('i am learning cypress')
          return null

        }
      })
      //---------------------------task2--------
      on('task', {
        addition({ a, b }) {
          console.log(a + b)
          return a + b
        }
      })

      //----------------task3----------------
      on('task', {
        mylog(msg) {
          console.log(msg)
          return null

        }
      })

    },
  },
});
