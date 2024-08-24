const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx').default; //for exel file payload
const fs = require('fs'); //for exel file payload
const path = require('path'); //for exel file payload


const { verifyDownloadTasks } = require('cy-verify-downloads');//file download option

module.exports = defineConfig({

  chromeWebSecurity: false,
  downloadsFolder: 'cypress/e2e/6-Downloadfile/filedownloaded',
  e2e: {
    baseUrl : 'https://gorest.co.in/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', verifyDownloadTasks);//fle download option

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

      // ------------------- exel data payload --------------------------

      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })

    },
  },
});
